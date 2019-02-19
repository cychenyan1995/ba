/*
 * 文 件 名:  ResponseObject.java
 * 版    权:  深圳广联赛讯有限公司 Technologies Co., Ltd. Copyright 2017-2999,  All rights reserved
 * 描    述:  <描述>
*/

package com.glsx.oms.bigdata.admin.ba.framework;

/**
 * <一句话功能简述>
 * <功能详细描述>
 * 
 * @author  姓名 工号
 * @version  [版本号, 2018年9月3日]
 * @see  [相关类/方法]
 * @since  [产品/模块版本]
 */
public class ResponseObject<T> {

    private String resultCode;

    private String message;

    private T      data;

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
