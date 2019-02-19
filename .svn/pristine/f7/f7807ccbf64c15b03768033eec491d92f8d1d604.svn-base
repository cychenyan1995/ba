package com.glsx.oms.bigdata.admin.ba;

import org.oreframework.boot.main.AbsOreBootStarter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@ServletComponentScan
public class OMSBootStarter extends AbsOreBootStarter
{

    @Override
    public void run(String[] args)
    {
        SpringApplication.run(OMSBootStarter.class, args);
    }
    
    public static void main(String[] args)
    {
        OMSBootStarter starter = new OMSBootStarter();
        starter.run(args);
    }
}
