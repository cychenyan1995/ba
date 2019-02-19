package com.glsx.oms.bigdata.admin.ba.portrait.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.glsx.oms.bigdata.admin.ba.portrait.mapper.PortraitMapper;
import com.glsx.oms.bigdata.admin.ba.portrait.model.BasePortrait;
import com.glsx.oms.bigdata.admin.ba.portrait.model.Portrait;

@Service
public class PortraitService {

	@Resource
	private PortraitMapper portraitMapper;
	
	public List<BasePortrait> querySexData(){
		List<Portrait> portraitList = portraitMapper.querySexData();
		List<BasePortrait> basePortraitList = new ArrayList<>();
		for(Portrait portrait : portraitList){
			BasePortrait basePortrait = new BasePortrait();
			String sex= portrait.getSex();
			if(sex.equals("M")){
				sex = "男";
			}else{
				sex = "女";
			}
			basePortrait.setName(sex);
			basePortrait.setValue(portrait.getSexNum());
			basePortraitList.add(basePortrait);
		}
		return basePortraitList;
	}
	
	public float [] queryAgeData(){
		List<Portrait> portraitList = portraitMapper.queryAgeData();
		Integer totalNum = 0;
		for(Portrait portrait : portraitList){
			totalNum += portrait.getAgeNum();
		}
		float [] agePercentage = new float[5];
		for(int i = 1; i < portraitList.size(); i++){
			agePercentage[i-1] = (float) Math.round((portraitList.get(i).getAgeNum()*1.0/totalNum)*100)/100;
			
		}
		return agePercentage;
	}
	
	public List<BasePortrait> queryDeviceTypeData(){
		List<Portrait> portraitList = portraitMapper.queryDeviceTypeData();
		List<BasePortrait> basePortraitList = new ArrayList<>();
		for(Portrait portrait : portraitList){
			BasePortrait basePortrait = new BasePortrait();
			basePortrait.setName(portrait.getDevType());
			basePortrait.setValue(portrait.getDevTotal());
			basePortraitList.add(basePortrait);
		}
		return basePortraitList;
	}
	
	public List<BasePortrait> queryCityData(){
		List<Portrait> portraitList = portraitMapper.queryCityData();
		List<BasePortrait> basePortraitList = new ArrayList<>();
		for(Portrait portrait : portraitList){
			BasePortrait basePortrait = new BasePortrait();
			basePortrait.setName(portrait.getProvince());
			basePortrait.setValue(portrait.getProvinceNum());
			basePortraitList.add(basePortrait);
		}
		return basePortraitList;
	}
}
