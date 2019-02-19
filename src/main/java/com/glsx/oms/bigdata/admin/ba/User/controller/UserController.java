package com.glsx.oms.bigdata.admin.ba.User.controller;


import com.alibaba.dubbo.config.annotation.Reference;
import com.glsx.oms.auth.biz.console.model.ViewModel;
import com.glsx.oms.auth.biz.console.response.ResponseEntity;
import com.glsx.oms.auth.biz.console.service.MenuService;
import com.glsx.oms.bigdata.admin.ba.User.model.CurrentUser;
import com.glsx.oms.bigdata.admin.ba.vo.RespMessage;
import org.oreframework.boot.security.cas.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Reference(version = "1.0.0")
	MenuService menuService;

	@GetMapping("/currentUser")
	public RespMessage list(HttpServletRequest request) {
		RespMessage rm = new RespMessage();
		HttpSession session = request.getSession();
		User loginUser = (User) session.getAttribute("CAS_USER");
		CurrentUser user = new CurrentUser();
		if (null != loginUser) {
			user.setUserid(String.valueOf(loginUser.getId()));
			user.setName(loginUser.getUsername());
		}
		rm.setData(user);
		return rm;
	}
	
	@GetMapping("/fetchRight")
	public RespMessage fetchRight(String userId, HttpServletRequest request) {
		RespMessage rm = new RespMessage();
		ResponseEntity<List<ViewModel>> auth = menuService.getAuthority(request.getContextPath(),
				Integer.valueOf(userId));
		rm.setData(auth.getData());
		return rm;
	}
}
