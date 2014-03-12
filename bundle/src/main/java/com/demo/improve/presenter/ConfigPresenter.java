package com.demo.improve.presenter;

import javax.jcr.RepositoryException;

public class ConfigPresenter extends AbstractPresenter {

	@Override
	protected void process() throws RepositoryException {
		String slogan = properties.get("slogan", "Null My journey. My CWT.");
		String context = properties.get("context", "Null Careers Netherlands");
		String brand = properties.get("brand", "");
		putModel("slogan", slogan);
		putModel("context", context);
		putModel("brand", brand);
	}
	
}
