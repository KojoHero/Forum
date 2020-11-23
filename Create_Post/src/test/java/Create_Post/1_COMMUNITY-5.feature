@COMMUNITY-814
@REQ_COMMUNITY-5
Feature: Forum

	#Tests As a user I want to be able to navigate the forum 
	#
	#Acceptance Criteria : 
	#
	## create a navigation bar with the following functions 
	#
	#a) Home ( landing page )
	#
	#b) Following or Subscription  (Showing categories or threads subscribed to)
	#
	#c) Button to initiate a thread or a discussion
	#
	#d) Category ie Business , Science , Technology , Loans & Grants , Scholarship , health etc 
	#
	#e) Provide Filter : by category , topics posted ,  popular post 
	#
	#2.Forum must have rule to promote healthy conversation the following forum rules should be set 
	#
	#* No Spam / Advertising / Self-promote in the *forum*
	#* Do not post copyright-infringing material
	#* Do not post “offensive” posts, links or images
	#* Do not cross post questions 
	#* Remain respectful of other members at all times
	@TEST_COMMUNITY-836 @REQ_COMMUNITY-799 @TESTSET_COMMUNITY-811
	Scenario: Create Forum automated test
		When user navigates to forum
		And user should see a popup  to select preferred categories  
		Then user should be able to make a post to selected categories
		And user receives a successful message after post
