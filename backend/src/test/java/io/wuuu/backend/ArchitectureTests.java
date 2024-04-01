package io.wuuu.backend;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;
import org.jmolecules.archunit.JMoleculesArchitectureRules;
import org.jmolecules.archunit.JMoleculesDddRules;

@AnalyzeClasses
class ArchitectureTests {
    @ArchTest
    ArchRule ddd = JMoleculesDddRules.all();

    @ArchTest
    ArchRule hexagonal = JMoleculesArchitectureRules.ensureHexagonal();
}
