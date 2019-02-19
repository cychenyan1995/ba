package com.glsx.oms.bigdata.admin.ba.userList.service;

import java.util.List;

import javax.annotation.Resource;

import org.oreframework.web.ui.Pagination;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.glsx.oms.bigdata.admin.ba.common.BaseService;
import com.glsx.oms.bigdata.admin.ba.userList.mapper.EventListMapper;
import com.glsx.oms.bigdata.admin.ba.userList.model.EventList;

@Service
public class EventListService extends BaseService<EventList> {

	@Resource
	private EventListMapper eventListMapper;

	public PageInfo<EventList> getDeviceEventList(Pagination pagination, EventList eventList) {
		PageInfo<EventList> pageInfo = setPageInfo(pagination);
		Page<EventList> page = getPage(pageInfo);
		List<EventList> list = eventListMapper.selectDeviceEventList(eventList);
		setPageInfo(pageInfo, page, list);
		return pageInfo;
	}
	
	public PageInfo<EventList> getProgramEventList(Pagination pagination, EventList eventList) {
		PageInfo<EventList> pageInfo = setPageInfo(pagination);
		Page<EventList> page = getPage(pageInfo);
		List<EventList> list = eventListMapper.selectProgramEventList(eventList);
		setPageInfo(pageInfo, page, list);
		return pageInfo;
	}
}
