package com.demo.improve.presenter;

import java.util.Date;

import javax.jcr.RepositoryException;

import com.demo.improve.bean.Container;
import com.demo.improve.utils.ContainerUtils;

public class ContainerPresenter extends AbstractPresenter {

	@Override
	protected void process() throws RepositoryException {
		String elem = properties.get("boxLeft", null);
		Container container = ContainerUtils.parseFromString(elem);
		container.setNewRelease(properties.get("newRelase", ""));
		container.setCreateDate(properties.get("jcr:lastModified", Date.class));

		putModel("container", container);
	}

}
