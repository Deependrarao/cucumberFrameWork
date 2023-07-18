$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#cucumber hook will set up a browser"
    },
    {
      "line": 7,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user will verify \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "jbk-offline-application-test;login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title"
      ],
      "line": 12,
      "id": "jbk-offline-application-test;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Dashboard"
      ],
      "line": 13,
      "id": "jbk-offline-application-test;login-test;;2"
    },
    {
      "cells": [
        "deep123@gmail.com",
        "564789",
        "Log in"
      ],
      "line": 14,
      "id": "jbk-offline-application-test;login-test;;3"
    },
    {
      "cells": [
        "aaru123@gmail.com",
        "aaru",
        "Log in"
      ],
      "line": 15,
      "id": "jbk-offline-application-test;login-test;;4"
    },
    {
      "cells": [
        "jeet321@gmail.com",
        "deepak",
        "Log in"
      ],
      "line": 16,
      "id": "jbk-offline-application-test;login-test;;5"
    },
    {
      "cells": [
        "abhirao@gmail.com",
        "abhirao",
        "Log in"
      ],
      "line": 17,
      "id": "jbk-offline-application-test;login-test;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#cucumber hook will set up a browser"
    },
    {
      "line": 7,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 8,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user will verify \"Dashboard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 18
    }
  ],
  "location": "LoginStepdef.user_will_verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#cucumber hook will set up a browser"
    },
    {
      "line": 7,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 8,
  "name": "user enters \"deep123@gmail.com\" and \"564789\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "deep123@gmail.com",
      "offset": 13
    },
    {
      "val": "564789",
      "offset": 37
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "LoginStepdef.user_will_verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#cucumber hook will set up a browser"
    },
    {
      "line": 7,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 8,
  "name": "user enters \"aaru123@gmail.com\" and \"aaru\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "aaru123@gmail.com",
      "offset": 13
    },
    {
      "val": "aaru",
      "offset": 37
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "LoginStepdef.user_will_verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#cucumber hook will set up a browser"
    },
    {
      "line": 7,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 8,
  "name": "user enters \"jeet321@gmail.com\" and \"deepak\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jeet321@gmail.com",
      "offset": 13
    },
    {
      "val": "deepak",
      "offset": 37
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "LoginStepdef.user_will_verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#cucumber hook will set up a browser"
    },
    {
      "line": 7,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 8,
  "name": "user enters \"abhirao@gmail.com\" and \"abhirao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abhirao@gmail.com",
      "offset": 13
    },
    {
      "val": "abhirao",
      "offset": 37
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "LoginStepdef.user_will_verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Logo test",
  "description": "",
  "id": "jbk-offline-application-test;logo-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@logo"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#Given user should be on Login page"
    }
  ],
  "line": 23,
  "name": "user should see JBK logo",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user should be on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.user_should_see_JBK_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_Login_page()"
});
formatter.result({
  "status": "skipped"
});
});