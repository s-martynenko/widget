 widgetBtn.onclick = function () {
                widgetModal.style.display = "block";
                widgetBackground.style.display = "block";
                hideOnClickOutside(widgetBtn, widgetModal);

                if(getCookie('widgetIsKnownUser')==='1') {
                    document.getElementById('widget_log-out-btn').style.display = "inline-block";
                }
                else {
                    document.getElementById('login-tab-btn').style.display = "inline-block";
                }

                document.getElementById('login-tab-btn').onclick = function () {
                    closeAllTabs();
                    showLogInTab();
                };

                document.getElementById('widget_log-out-btn').onclick = function () {
                    logOut();
                };

                if (getCookie('widgetToken') === "" || getCookie('widgetToken') === "undefined") {
                    setAnonymousSession(widgetGenderID, function (token) {
                        if (token !== '') {
                            storedToken = token;
                            document.cookie = 'widgetToken=' + storedToken;
                        }
                        closeAllTabs();
                        clearPrevSelected();
                        showSelectTab();
                        showProgressBar(0);
                        completeBrandsList(widgetGenderID);
                    });
                }
                else { //Session was opened, but there are no measurements
                    if (getCookie('widgetMeasurements') !== '1') {
                        closeAllTabs();
                        showSelectTab();
                        showProgressBar(0);
                        completeBrandsList(widgetGenderID);
                    }
                }
            };
