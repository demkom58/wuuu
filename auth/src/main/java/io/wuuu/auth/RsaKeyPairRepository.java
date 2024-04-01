package io.wuuu.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Repository
public interface RsaKeyPairRepository extends CrudRepository<RsaKeyPairRepository.RsaKeyPair, String> {

    @NotNull List<RsaKeyPair> findAll();

    @Getter
    @AllArgsConstructor
    class RsaKeyPair {
        @Id
        private final String id;
        private final Instant created;
        private final String publicKey;
        private final String privateKey;

        public RsaKeyPair(String publicKey, String privateKey) {
            this(UUID.randomUUID().toString(), Instant.now(), publicKey, privateKey);
        }

        public RsaKeyPair(Instant created, String publicKey, String privateKey) {
            this(UUID.randomUUID().toString(), created, publicKey, privateKey);
        }
    }
}
