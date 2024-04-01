package io.wuuu.auth;


import com.nimbusds.jose.KeySourceException;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSelector;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.security.oauth2.server.authorization.token.JwtEncodingContext;
import org.springframework.security.oauth2.server.authorization.token.OAuth2TokenCustomizer;
import org.springframework.stereotype.Component;

import java.security.KeyFactory;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Component
public class RsaKeyPairRepositoryJWKSource implements JWKSource<SecurityContext>, OAuth2TokenCustomizer<JwtEncodingContext> {

    private final RsaKeyPairRepository keyPairRepository;

    public RsaKeyPairRepositoryJWKSource(RsaKeyPairRepository keyPairRepository) {
        this.keyPairRepository = keyPairRepository;
    }

    @Override
    public List<JWK> get(JWKSelector jwkSelector, SecurityContext context) throws KeySourceException {
        List<RsaKeyPairRepository.RsaKeyPair> keyPairs = this.keyPairRepository.findAll();
        List<JWK> result = new ArrayList<>(keyPairs.size());
        for (RsaKeyPairRepository.RsaKeyPair keyPair : keyPairs) {

            RSAKey rsaKey = new RSAKey.Builder(getPublicKeyFromString(keyPair.getPublicKey()))
                    .privateKey(getPrivateKeyFromString(keyPair.getPrivateKey()))
                    .keyID(keyPair.getId())
                    .build();
            if (jwkSelector.getMatcher().matches(rsaKey)) {
                result.add(rsaKey);
            }
        }
        return result;
    }

    @Override
    public void customize(JwtEncodingContext context) {
        List<RsaKeyPairRepository.RsaKeyPair> keyPairs = this.keyPairRepository.findAll();
        String kid = keyPairs.getFirst().getId();
        context.getJwsHeader().keyId(kid);
    }

    private static RSAPublicKey getPublicKeyFromString(String publicKeyString) throws KeySourceException {
        try {
            byte[] keyBytes = Base64.getDecoder().decode(publicKeyString);
            X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
            KeyFactory kf = KeyFactory.getInstance("RSA");
            return (RSAPublicKey) kf.generatePublic(spec);
        } catch (Exception e) {
            throw new KeySourceException("Failed to get public key from string", e);
        }
    }

    private static RSAPrivateKey getPrivateKeyFromString(String privateKeyString) throws KeySourceException {
        try {
            byte[] keyBytes = Base64.getDecoder().decode(privateKeyString);
            PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(keyBytes);
            KeyFactory kf = KeyFactory.getInstance("RSA");
            return (RSAPrivateKey) kf.generatePrivate(spec);
        } catch (Exception e) {
            throw new KeySourceException("Failed to get private key from string", e);
        }
    }
}