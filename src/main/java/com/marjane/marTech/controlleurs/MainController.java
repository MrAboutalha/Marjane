/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marjane.marTech.controlleurs;

import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author dell
 */
public class MainController {
    @GetMapping("/")
    public String getIndex(){
        return ("index.html");
    }
    
}
