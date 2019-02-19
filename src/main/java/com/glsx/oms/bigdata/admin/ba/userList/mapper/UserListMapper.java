package com.glsx.oms.bigdata.admin.ba.userList.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.glsx.oms.bigdata.admin.ba.userList.model.UserList;

@Mapper
public interface UserListMapper {

	public List<UserList> selectAllUser(UserList userList);
	
	public UserList selectByAccount(@Param(value="account")String account);
}