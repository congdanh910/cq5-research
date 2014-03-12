package com.demo.improve.presenter;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ValueMap;

public abstract class AbstractPresenter {
	SlingHttpServletRequest slingRequest;
	ValueMap properties;
	Node currentNode;

	public void init(SlingHttpServletRequest request, ValueMap properties,
			Node currentNode) throws RepositoryException {
		this.slingRequest = request;
		this.currentNode = currentNode;
        this.properties = properties;
        process();
		slingRequest.setAttribute("Abstract", "This is Abstract Presenter!!!");
	}

	protected abstract void process() throws RepositoryException;

	protected void putModel(String name, Object object) {
		slingRequest.setAttribute(name, object);
	}
}
