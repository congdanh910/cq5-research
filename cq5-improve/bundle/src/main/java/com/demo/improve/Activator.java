package com.demo.improve;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

/**
 * @author Kevin Vasseure Date: 14/06/13
 */
public class Activator implements BundleActivator {
	public void start(BundleContext bundleContext) throws Exception {
		System.out.println("Start bundle!!!");
	}

	public void stop(BundleContext bundleContext) throws Exception {
		System.out.println("Stop bundle!!!");
	}
}
