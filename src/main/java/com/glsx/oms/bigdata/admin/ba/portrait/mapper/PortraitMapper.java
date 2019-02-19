package com.glsx.oms.bigdata.admin.ba.portrait.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.glsx.oms.bigdata.admin.ba.portrait.model.Portrait;

@Mapper
public interface PortraitMapper {
	List<Portrait> querySexData();
	List<Portrait> queryAgeData();
	List<Portrait> queryDeviceTypeData();
	List<Portrait> queryCityData();
}
