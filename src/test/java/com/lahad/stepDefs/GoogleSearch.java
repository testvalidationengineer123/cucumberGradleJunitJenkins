package com.lahad.stepDefs;


import io.cucumber.java8.En;
import org.junit.Assert;

public class GoogleSearch  implements En {     // don't forget the "implement En"
    public GoogleSearch () {               // it's a constractor of the class, not a method

        Given("user is on google search page", () -> {
            System.out.println("////////////////// step 1");
        });

        When("user enters {string} and hit enter", (String string) -> {
            System.out.println("////////////////// step 2");
            Assert.assertEquals("les valeurs ne sont pas les même", "merci", "merci");
        });
        Then("results for {string} should be displayed", (String string) -> {
            System.out.println("////////////////// step 3");
        });

    }
}