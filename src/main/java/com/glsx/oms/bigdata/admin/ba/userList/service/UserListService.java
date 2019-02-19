package com.glsx.oms.bigdata.admin.ba.userList.service;

import java.util.List;

import javax.annotation.Resource;

import org.oreframework.web.ui.Pagination;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.glsx.oms.bigdata.admin.ba.common.BaseService;
import com.glsx.oms.bigdata.admin.ba.userList.mapper.UserListMapper;
import com.glsx.oms.bigdata.admin.ba.userList.model.UserList;

@Service
public class UserListService extends BaseService<UserList> {

	@Resource
	private UserListMapper userListMapper;

	public PageInfo<UserList> getAllUser(Pagination pagination, UserList userList) {
		PageInfo<UserList> pageInfo = setPageInfo(pagination);
		Page<UserList> page = getPage(pageInfo);
		List<UserList> list = userListMapper.selectAllUser(userList);
		setPageInfo(pageInfo, page, list);
		return pageInfo;
	}
	
	public UserList getByAccount(String account){
		
		UserList u = userListMapper.selectByAccount(account);
		return u;
	}
}
