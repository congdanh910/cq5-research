package com.demo.improve.bean;

import java.util.Date;

public class Container {
	private String newRelease;
	private String imagePath;
	private String title;
	private String sortDescription;
	private Date createDate;

	public Container() {
	}

	public Container(String newRelease, String imagePath, String title,
			String sortDescription, Date createDate) {
		this.newRelease = newRelease;
		this.imagePath = imagePath;
		this.title = title;
		this.sortDescription = sortDescription;
		this.createDate = createDate;
	}

	public String getNewRelease() {
		return newRelease;
	}

	public void setNewRelease(String newRelease) {
		this.newRelease = newRelease;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSortDescription() {
		return sortDescription;
	}

	public void setSortDescription(String sortDescription) {
		this.sortDescription = sortDescription;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

}
