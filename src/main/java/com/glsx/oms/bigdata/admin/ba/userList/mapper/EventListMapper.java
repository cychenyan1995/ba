package com.glsx.oms.bigdata.admin.ba.userList.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.glsx.oms.bigdata.admin.ba.userList.model.EventList;

@Mapper
public interface EventListMapper {
	
	public List<EventList> selectDeviceEventList(EventList eventList);
	
	public List<EventList> selectProgramEventList(EventList eventList);
}