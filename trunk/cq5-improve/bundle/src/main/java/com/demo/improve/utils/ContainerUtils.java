package com.demo.improve.utils;

import org.apache.commons.lang3.StringUtils;

import com.demo.improve.bean.Container;

public class ContainerUtils {
	private static final String SEPARTOR = "#!";
	
	public static Container parseFromString(String container) {
		Container con = new Container();
		if(StringUtils.isBlank(container)){
			return con;
		}
		String[] datas = StringUtils.splitByWholeSeparatorPreserveAllTokens(container, SEPARTOR);
		if(datas == null || datas.length < 3){
			return con;
		}
		
		if(StringUtils.isNotBlank(datas[0])){
			con.setImagePath(datas[0]);
		}
		if(StringUtils.isNotBlank(datas[1])){
			con.setTitle(datas[1]);
		}
		if(StringUtils.isNotBlank(datas[2])){
			con.setSortDescription(datas[2]);
		}
		
		return con;
	}
}
