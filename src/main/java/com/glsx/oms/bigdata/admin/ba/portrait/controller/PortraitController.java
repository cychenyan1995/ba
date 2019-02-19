package com.glsx.oms.bigdata.admin.ba.portrait.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glsx.oms.bigdata.admin.ba.common.BaseController;
import com.glsx.oms.bigdata.admin.ba.portrait.model.BasePortrait;
import com.glsx.oms.bigdata.admin.ba.portrait.model.Portrait;
import com.glsx.oms.bigdata.admin.ba.portrait.service.PortraitService;
import com.glsx.oms.bigdata.admin.ba.vo.RespMessage;

@RestController
@RequestMapping("/portrait")
public class PortraitController extends BaseController<Portrait>{

	private final static Logger LOGGER = LoggerFactory.getLogger(PortraitController.class);
	
	@Resource
	private PortraitService portraitService;
	
	@GetMapping("/querySexData")
	public RespMessage querySexData(){
		RespMessage rm = new RespMessage();
		List<BasePortrait> basePortraitList = portraitService.querySexData();
		LOGGER.info("性别分布数据记录数："+ basePortraitList.size());
		rm.setData(basePortraitList);
		return rm;
	}
	
	@GetMapping("queryAgeData")
	public RespMessage queryAgeData(){
		RespMessage rm = new RespMessage();
		float [] agePercentage = portraitService.queryAgeData();
		LOGGER.info("年龄分布数据："+ agePercentage);
		rm.setData(agePercentage);
		return rm;
	}
	
	
	@GetMapping("queryDeviceTypeData")
	public RespMessage queryDeviceTypeData(){
		RespMessage rm = new RespMessage();
		List<BasePortrait> basePortraitList = portraitService.queryDeviceTypeData();
		LOGGER.info("设备分布数据记录数："+ basePortraitList.size());
		rm.setData(basePortraitList);
		return rm;
	}
	
	@GetMapping("queryCityData")
	public RespMessage queryCityData(){
		RespMessage rm = new RespMessage();
		List<BasePortrait> basePortraitList = portraitService.queryCityData();
		LOGGER.info("省份分布数据记录数："+ basePortraitList.size());
		rm.setData(basePortraitList);
		return rm;
	}
	@GetMapping("queryOutTimeData")
	public RespMessage queryOutTimeData(){
		RespMessage rm = new RespMessage();
		return rm;
	}
}
