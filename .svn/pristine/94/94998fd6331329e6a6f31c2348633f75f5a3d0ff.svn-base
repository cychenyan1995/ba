package com.glsx.oms.bigdata.admin.ba.userList.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.oreframework.web.ui.Pagination;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageInfo;
import com.glsx.oms.bigdata.admin.ba.common.BaseController;
import com.glsx.oms.bigdata.admin.ba.userList.model.EventList;
import com.glsx.oms.bigdata.admin.ba.userList.model.UserList;
import com.glsx.oms.bigdata.admin.ba.userList.service.EventListService;
import com.glsx.oms.bigdata.admin.ba.userList.service.UserListService;
import com.glsx.oms.bigdata.admin.ba.vo.RespMessage;

@RestController
@RequestMapping("/userList")
public class UserListController extends BaseController<UserList> {

	@Resource
	private UserListService userListService;

	@Resource
	private EventListService eventListService;

	private final static Logger LOGGER = LoggerFactory.getLogger(UserListController.class);

	@GetMapping("/getListByPage")
	public RespMessage getListByPage(UserList userList, Pagination pagination) {
		RespMessage rm = new RespMessage();
		PageInfo<UserList> page = userListService.getAllUser(pagination, userList);
		if (null != page) {
			List<UserList> list = page.getList();
			rm.setData(list);
			rm.setPageTotal(page.getTotal());
		}
		LOGGER.info("一共" + page.getTotal() + "条用户数据");
		return rm;
	}
	
	@GetMapping("/getUserDetail")
	public RespMessage getUserDetail(String account) {
		RespMessage rm = new RespMessage();
		UserList u = userListService.getByAccount(account);
		
		Map<String, Object> resultMap = new HashMap<>();
		resultMap.put("user", u);
		rm.setData(resultMap);
		return rm;
	}

	@GetMapping("/getDeviceEventList")
	public RespMessage getDeviceEventList(EventList eventList, Pagination pagination) {
		RespMessage rm = new RespMessage();
		PageInfo<EventList> page = eventListService.getDeviceEventList(pagination, eventList);
		if (null != page) {
			List<EventList> list = page.getList();
			rm.setData(list);
			rm.setPageTotal(page.getTotal());
		}
		return rm;
	}
	
	@GetMapping("/getProgramEventList")
	public RespMessage getProgramEventList(EventList eventList, Pagination pagination) {
		RespMessage rm = new RespMessage();
		PageInfo<EventList> page = eventListService.getProgramEventList(pagination, eventList);
		if (null != page) {
			List<EventList> list = page.getList();
			rm.setData(list);
			rm.setPageTotal(page.getTotal());
		}
		return rm;
	}

}
