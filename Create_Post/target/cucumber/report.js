$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Forum/Create_Post/src/test/java/Create_Post/1_COMMUNITY-5.feature");
formatter.feature({
  "line": 3,
  "name": "Forum",
  "description": "",
  "id": "forum",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-814"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-5"
    }
  ]
});
formatter.before({
  "duration": 5895085500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Tests As a user I want to be able to navigate the forum"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Acceptance Criteria :"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "## create a navigation bar with the following functions"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#a) Home ( landing page )"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#b) Following or Subscription  (Showing categories or threads subscribed to)"
    },
    {
      "line": 14,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#c) Button to initiate a thread or a discussion"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#d) Category ie Business , Science , Technology , Loans \u0026 Grants , Scholarship , health etc"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#e) Provide Filter : by category , topics posted ,  popular post"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#2.Forum must have rule to promote healthy conversation the following forum rules should be set"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#* No Spam / Advertising / Self-promote in the *forum*"
    },
    {
      "line": 24,
      "value": "#* Do not post copyright-infringing material"
    },
    {
      "line": 25,
      "value": "#* Do not post “offensive” posts, links or images"
    },
    {
      "line": 26,
      "value": "#* Do not cross post questions"
    },
    {
      "line": 27,
      "value": "#* Remain respectful of other members at all times"
    }
  ],
  "line": 29,
  "name": "Create Forum automated test",
  "description": "",
  "id": "forum;create-forum-automated-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TEST_COMMUNITY-836"
    },
    {
      "line": 28,
      "name": "@REQ_COMMUNITY-799"
    },
    {
      "line": 28,
      "name": "@TESTSET_COMMUNITY-811"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user navigates to forum",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user should see a popup  to select preferred categories",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user should be able to make a post to selected categories",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user receives a successful message after post",
  "keyword": "And "
});
formatter.match({
  "location": "Post_steps.user_navigates_to_forum()"
});
formatter.result({
  "duration": 9698070500,
  "status": "passed"
});
formatter.match({
  "location": "Post_steps.user_should_see_a_popup_to_select_preferred_categories()"
});
formatter.result({
  "duration": 4086870100,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6APU30H\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51905}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f602f6db10c50af2ad6a700ab2ee62f3\n*** Element info: {Using\u003did, value\u003d}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.Post_steps.user_should_see_a_popup_to_select_preferred_categories(Post_steps.java:51)\r\n\tat ✽.And user should see a popup  to select preferred categories(F:/Forum/Create_Post/src/test/java/Create_Post/1_COMMUNITY-5.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Post_steps.user_should_be_able_to_make_a_post_to_selected_categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Post_steps.user_receives_a_successful_message_after_post()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 601459500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6APU30H\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat steps.Post_steps.end(Post_steps.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});