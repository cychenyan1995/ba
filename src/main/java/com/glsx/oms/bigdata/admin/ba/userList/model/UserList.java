package com.glsx.oms.bigdata.admin.ba.userList.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.glsx.oms.bigdata.admin.ba.common.BasePojo;

public class UserList extends BasePojo<UserList>{
    private Integer id;

    private String account;

    private String mobile;

    @JsonFormat(timezone="GMT+8",pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date registerTime;

    private String name;

    private String idCardNo;

    private String gender;

    private String province;

    private String city;

    private String carNum;

    private String carBrand;

    private Integer miniProgramTime;

    private Integer termUsedTime;

    private Float totalFlow;

    private Float perDayFlow;

    @JsonFormat(timezone="GMT+8",pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date pkEndTime;

    @JsonFormat(timezone="GMT+8",pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createTime;

    @JsonFormat(timezone="GMT+8",pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Date getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(Date registerTime) {
        this.registerTime = registerTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdCardNo() {
        return idCardNo;
    }

    public void setIdCardNo(String idCardNo) {
        this.idCardNo = idCardNo;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCarNum() {
        return carNum;
    }

    public void setCarNum(String carNum) {
        this.carNum = carNum;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public Integer getMiniProgramTime() {
        return miniProgramTime;
    }

    public void setMiniProgramTime(Integer miniProgramTime) {
        this.miniProgramTime = miniProgramTime;
    }

    public Integer getTermUsedTime() {
        return termUsedTime;
    }

    public void setTermUsedTime(Integer termUsedTime) {
        this.termUsedTime = termUsedTime;
    }

    public Float getTotalFlow() {
        return totalFlow;
    }

    public void setTotalFlow(Float totalFlow) {
        this.totalFlow = totalFlow;
    }

    public Float getPerDayFlow() {
        return perDayFlow;
    }

    public void setPerDayFlow(Float perDayFlow) {
        this.perDayFlow = perDayFlow;
    }

    public Date getPkEndTime() {
        return pkEndTime;
    }

    public void setPkEndTime(Date pkEndTime) {
        this.pkEndTime = pkEndTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}