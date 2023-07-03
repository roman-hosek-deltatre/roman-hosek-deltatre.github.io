(function() {
	window._satellite = window._satellite || {};
	window._satellite.container = {
		buildInfo: {
			buildDate: '2020-01-29T15:22:05Z',
			environment: 'staging',
			turbineBuildDate: '2019-06-25T22:25:24Z',
			turbineVersion: '25.6.0'
		},
		dataElements: {
			Page_Content_Type: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.contentType'
				}
			},
			User_Subscription_Type: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.subscriptionType'
				}
			},
			User_ID: {
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						var id = '';
						if (window.digitalData && digitalData.user) {
							id = digitalData.user.id || digitalData.user.userId || '';
							if (id.indexOf('@') > -1) {
								id = '';
							}
						}
						return id;
					}
				}
			},
			Site_Platform: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.platform'
				}
			},
			playbackLanguage: {
				forceLowerCase: true,
				cleanText: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.playbackLanguage'
				}
			},
			Page_Section: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.section'
				}
			},
			Campaign_ID: {
				modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
				settings: {
					name: 'cid',
					caseInsensitive: true
				}
			},
			Page_External_Referrer: {
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						if (document.referrer && document.referrer.match(/(crave|bellmedia)\.ca/) === null) {
							return document.referrer;
						}
					}
				}
			},
			Event_Name: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.eventData.name'
				}
			},
			Page_Date: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.currentDate'
				}
			},
			Page_Collection_ID: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.collectionId'
				}
			},
			shelfTrack_collectionName: {
				forceLowerCase: true,
				cleanText: true,
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						return window._dataManager.readShelfCookie('collectionName');
					}
				}
			},
			User_Profile_Type: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.profileType'
				}
			},
			User_Subscription_Partners: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.subscriptionPartners'
				}
			},
			Page_Name: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.name'
				}
			},
			Page_URL: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						return 'https://' + document.location.hostname + document.location.pathname;
					}
				}
			},
			User_Auth_Location: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.authLocation'
				}
			},
			Search_Term: {
				forceLowerCase: true,
				cleanText: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.search.term'
				}
			},
			Page_Day_Parts: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.dayParts'
				}
			},
			Page_Filter_List: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.filterList'
				}
			},
			profileLanguage: {
				forceLowerCase: true,
				cleanText: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.profileLanguage'
				}
			},
			Page_Version: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.version'
				}
			},
			User_Auth_Error_Type: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						if (
							window.digitalData &&
							digitalData.eventData &&
							digitalData.eventData.name &&
							digitalData.eventData.name == 'authentication error'
						) {
							return digitalData.error && digitalData.error.type
								? digitalData.error.type.replace(/\<br\>/g, '')
								: 'no error available';
						}
						return '';
					}
				}
			},
			Show_Name: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.show.name'
				}
			},
			Page_Hostname: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/pageInfo.js',
				settings: {
					attribute: 'hostname'
				}
			},
			shelfTrack_horizontalPosition: {
				forceLowerCase: true,
				cleanText: true,
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						return window._dataManager.readShelfCookie('horizontalPosition');
					}
				}
			},
			Gift_Promo_Code: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.purchase.promoCode'
				}
			},
			User_Status: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.authStatus'
				}
			},
			User_BDU: {
				forceLowerCase: true,
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.user.authBDU'
				}
			},
			Site_Name: {
				modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
				settings: {
					path: 'digitalData.page.sitename'
				}
			},
			shelfTrack_verticalPosition: {
				forceLowerCase: true,
				cleanText: true,
				modulePath: 'core/src/lib/dataElements/customCode.js',
				settings: {
					source: function(event) {
						return window._dataManager.readShelfCookie('verticalPosition');
					}
				}
			}
		},
		extensions: {
			'adobe-analytics': {
				displayName: 'Adobe Analytics',
				modules: {
					'adobe-analytics/src/lib/actions/clearVariables.js': {
						name: 'clear-variables',
						displayName: 'Clear Variables',
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var getTracker = require('../sharedModules/getTracker');

							module.exports = function() {
								return getTracker().then(
									function(tracker) {
										if (tracker.clearVars) {
											turbine.logger.info('Clear variables.');
											tracker.clearVars();
										}
									},
									function(errorMessage) {
										turbine.logger.error('Cannot clear variables: ' + errorMessage);
									}
								);
							};
						}
					},
					'adobe-analytics/src/lib/actions/setVariables.js': {
						name: 'set-variables',
						displayName: 'Set Variables',
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var getTracker = require('../sharedModules/getTracker');
							var applyTrackerVariables = require('../helpers/applyTrackerVariables');

							module.exports = function(settings, event) {
								return getTracker().then(
									function(tracker) {
										turbine.logger.info('Set variables on the tracker.');
										applyTrackerVariables(tracker, settings.trackerProperties);
										if (settings.customSetup && settings.customSetup.source) {
											settings.customSetup.source.call(event.element, event, tracker);
										}
									},
									function(errorMessage) {
										turbine.logger.error('Cannot set variables: ' + errorMessage);
									}
								);
							};
						}
					},
					'adobe-analytics/src/lib/actions/sendBeacon.js': {
						name: 'send-beacon',
						displayName: 'Send Beacon',
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var getTracker = require('../sharedModules/getTracker');

							var isLink = function(element) {
								return element && element.nodeName && element.nodeName.toLowerCase() === 'a';
							};

							var getLinkName = function(element) {
								if (isLink(element)) {
									return element.innerHTML;
								} else {
									return 'link clicked';
								}
							};

							var sendBeacon = function(tracker, settings, targetElement) {
								if (settings.type === 'page') {
									turbine.logger.info('Firing page view beacon.');
									tracker.t();
								} else {
									var linkSettings = {
										linkType: settings.linkType || 'o',
										linkName: settings.linkName || getLinkName(targetElement)
									};

									turbine.logger.info(
										'Firing link track beacon using the values: ' + JSON.stringify(linkSettings) + '.'
									);

									tracker.tl(
										isLink(targetElement) ? targetElement : 'true',
										linkSettings.linkType,
										linkSettings.linkName
									);
								}
							};

							module.exports = function(settings, event) {
								return getTracker().then(
									function(tracker) {
										sendBeacon(tracker, settings, event.element);
									},
									function(errorMessage) {
										turbine.logger.error('Cannot send beacon: ' + errorMessage);
									}
								);
							};
						}
					},
					'adobe-analytics/src/lib/sharedModules/getTracker.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var cookie = require('@adobe/reactor-cookie');
							var Promise = require('@adobe/reactor-promise');
							var window = require('@adobe/reactor-window');
							var augmenters = require('../helpers/augmenters');
							var loadScript = require('@adobe/reactor-load-script');

							var applyTrackerVariables = require('../helpers/applyTrackerVariables');
							var loadLibrary = require('../helpers/loadLibrary');
							var generateVersion = require('../helpers/generateVersion');

							var version = generateVersion(turbine.buildInfo.turbineBuildDate);
							var BEFORE_SETTINGS_LOAD_PHASE = 'beforeSettings';

							var mcidInstance = turbine.getSharedModule('adobe-mcid', 'mcid-instance');

							var checkEuCompliance = function(trackingCoookieName) {
								if (!trackingCoookieName) {
									return true;
								}

								var euCookieValue = cookie.get(trackingCoookieName);
								return euCookieValue === 'true';
							};

							var augmentTracker = function(tracker) {
								return Promise.all(
									augmenters.map(function(augmenterFn) {
										var result;

										// If a tracker augmenter fails, we don't want to fail too. We'll re-throw the error in a
										// timeout so it still hits the console but doesn't reject our promise.
										try {
											result = augmenterFn(tracker);
										} catch (e) {
											setTimeout(function() {
												throw e;
											});
										}

										return Promise.resolve(result);
									})
								).then(function() {
									return tracker;
								});
							};

							var linkVisitorId = function(tracker) {
								if (mcidInstance) {
									turbine.logger.info('Setting MCID instance on the tracker.');
									tracker.visitor = mcidInstance;
								}

								return tracker;
							};

							var updateTrackerVersion = function(tracker) {
								turbine.logger.info('Setting version on tracker: "' + version + '".');

								if (typeof tracker.tagContainerMarker !== 'undefined') {
									tracker.tagContainerMarker = version;
								} else if (
									typeof tracker.version === 'string' &&
									tracker.version.substring(tracker.version.length - 5) !== '-' + version
								) {
									tracker.version += '-' + version;
								}

								return tracker;
							};

							var updateTrackerVariables = function(trackerProperties, customSetup, tracker) {
								if (customSetup.loadPhase === BEFORE_SETTINGS_LOAD_PHASE && customSetup.source) {
									turbine.logger.info('Calling custom script before settings.');
									customSetup.source.call(window, tracker);
								}

								applyTrackerVariables(tracker, trackerProperties || {});

								if (customSetup.loadPhase !== BEFORE_SETTINGS_LOAD_PHASE && customSetup.source) {
									turbine.logger.info('Calling custom script after settings.');
									customSetup.source.call(window, tracker);
								}

								return tracker;
							};

							var loadTrackerModules = function(properties, tracker) {
								var moduleProperties = properties.moduleProperties;
								if (
									moduleProperties &&
									moduleProperties.audienceManager &&
									moduleProperties.audienceManager.config &&
									window._satellite &&
									window._satellite.company &&
									window._satellite.company.orgId
								) {
									var visitorServiceConfig = {
										namespace: window._satellite.company.orgId
									};
									moduleProperties.audienceManager.config.visitorService = visitorServiceConfig;
									var libFileName = 'AppMeasurement_Module_AudienceManagement.js';
									var libFileUrl = turbine.getHostedLibFileUrl(libFileName);
									return loadScript(libFileUrl).then(function() {
										tracker.loadModule('AudienceManagement');
										turbine.logger.info('Initializing AudienceManagement module');
										//turbine.logger.info(JSON.stringify(moduleProperties.audienceManager.config, null, 3));
										tracker.AudienceManagement.setup(moduleProperties.audienceManager.config);
										return tracker;
									});
								} else {
									return tracker;
								}
							};

							var initialize = function(settings) {
								if (checkEuCompliance(settings.trackingCookieName)) {
									return loadLibrary(settings)
										.then(augmentTracker)
										.then(linkVisitorId)
										.then(updateTrackerVersion)
										.then(updateTrackerVariables.bind(null, settings.trackerProperties, settings.customSetup || {}))
										.then(loadTrackerModules.bind(null, settings));
								} else {
									return Promise.reject('EU compliance was not acknowledged by the user.');
								}
							};

							var promise = initialize(turbine.getExtensionSettings());
							module.exports = function() {
								return promise;
							};
						},
						name: 'get-tracker',
						shared: true
					},
					'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
						name: 'augment-tracker',
						shared: true,
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2017 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var augmenters = require('../helpers/augmenters');

							module.exports = function(fn) {
								augmenters.push(fn);
							};
						}
					},
					'adobe-analytics/src/lib/helpers/augmenters.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2017 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							module.exports = [];
						}
					},
					'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var queryString = require('@adobe/reactor-query-string');
							var window = require('@adobe/reactor-window');

							var eVarRegExp = /eVar([0-9]+)/;
							var propRegExp = /prop([0-9]+)/;
							var linkTrackVarsKeys = new RegExp(
								'^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|' + 'channel|server|state|zip|pageType$'
							);

							var onlyUnique = function(value, index, self) {
								return self.indexOf(value) === index;
							};

							var buildLinkTrackVars = function(tracker, newTrackerProperties, addEvents) {
								var linkTrackVarsValues = Object.keys(newTrackerProperties).filter(
									linkTrackVarsKeys.test.bind(linkTrackVarsKeys)
								);

								if (addEvents) {
									linkTrackVarsValues.push('events');
								}

								// Merge with the values already set on tracker.
								linkTrackVarsValues = linkTrackVarsValues.concat((tracker.linkTrackVars || '').split(','));

								return linkTrackVarsValues
									.filter(function(value, index) {
										return value !== 'None' && value && onlyUnique(value, index, linkTrackVarsValues);
									})
									.join(',');
							};

							var buildLinkTrackEvents = function(tracker, eventsData) {
								var linkTrackEventsValues = eventsData.map(function(event) {
									return event.name;
								});

								// Merge with the values already set on tracker.
								linkTrackEventsValues = linkTrackEventsValues.concat((tracker.linkTrackEvents || '').split(','));

								return linkTrackEventsValues
									.filter(function(value, index) {
										return value !== 'None' && onlyUnique(value, index, linkTrackEventsValues);
									})
									.join(',');
							};

							var commaJoin = function(store, keyName, trackerProperties) {
								store[keyName] = trackerProperties[keyName].join(',');
							};

							var variablesTransform = function(store, keyName, trackerProperties) {
								var dynamicVariablePrefix = trackerProperties.dynamicVariablePrefix || 'D=';

								trackerProperties[keyName].forEach(function(variableData) {
									var value;
									if (variableData.type === 'value') {
										value = variableData.value;
									} else {
										var eVarData = eVarRegExp.exec(variableData.value);

										if (eVarData) {
											value = dynamicVariablePrefix + 'v' + eVarData[1];
										} else {
											var propData = propRegExp.exec(variableData.value);

											if (propData) {
												value = dynamicVariablePrefix + 'c' + propData[1];
											}
										}
									}

									store[variableData.name] = value;
								});
							};

							var transformers = {
								linkDownloadFileTypes: commaJoin,
								linkExternalFilters: commaJoin,
								linkInternalFilters: commaJoin,
								hierarchies: function(store, keyName, trackerProperties) {
									trackerProperties[keyName].forEach(function(hierarchyData) {
										store[hierarchyData.name] = hierarchyData.sections.join(hierarchyData.delimiter);
									});
								},
								props: variablesTransform,
								eVars: variablesTransform,
								campaign: function(store, keyName, trackerProperties) {
									if (trackerProperties[keyName].type === 'queryParam') {
										var queryParams = queryString.parse(window.location.search);
										store[keyName] = queryParams[trackerProperties[keyName].value];
									} else {
										store[keyName] = trackerProperties[keyName].value;
									}
								},
								events: function(store, keyName, trackerProperties) {
									var events = trackerProperties[keyName].map(function(data) {
										var entry = data.name;
										if (data.value) {
											entry = [entry, data.value].join('=');
										}
										if (data.id) {
											entry = [entry, data.id].join(':');
										}
										return entry;
									});
									store[keyName] = events.join(',');
								}
							};

							module.exports = function(tracker, trackerProperties) {
								var newProperties = {};
								trackerProperties = trackerProperties || {};

								Object.keys(trackerProperties).forEach(function(propertyName) {
									var transform = transformers[propertyName];
									var value = trackerProperties[propertyName];

									if (transform) {
										transform(newProperties, propertyName, trackerProperties);
									} else {
										newProperties[propertyName] = value;
									}
								});

								// New events are added to existing tracker events
								if (newProperties.events) {
									if (tracker.events && tracker.events.length > 0) {
										newProperties.events = tracker.events + ',' + newProperties.events;
									}
								}

								var hasEvents = trackerProperties && trackerProperties.events && trackerProperties.events.length > 0;
								var linkTrackVars = buildLinkTrackVars(tracker, newProperties, hasEvents);
								if (linkTrackVars) {
									newProperties.linkTrackVars = linkTrackVars;
								}

								var linkTrackEvents = buildLinkTrackEvents(tracker, trackerProperties.events || []);
								if (linkTrackEvents) {
									newProperties.linkTrackEvents = linkTrackEvents;
								}

								turbine.logger.info(
									'Applying the following properties on tracker: "' + JSON.stringify(newProperties) + '".'
								);

								Object.keys(newProperties).forEach(function(propertyName) {
									tracker[propertyName] = newProperties[propertyName];
								});
							};
						}
					},
					'adobe-analytics/src/lib/helpers/loadLibrary.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';

							var loadScript = require('@adobe/reactor-load-script');
							var window = require('@adobe/reactor-window');
							var Promise = require('@adobe/reactor-promise');

							var LIB_TYPES = {
								MANAGED: 'managed',
								PREINSTALLED: 'preinstalled',
								REMOTE: 'remote',
								CUSTOM: 'custom'
							};

							var loadAppMeasurementScript = function(url) {
								turbine.logger.info('Loading AppMeasurement script from: ' + url + '.');
								return loadScript(url);
							};

							var getReportSuites = function(reportSuitesData) {
								var reportSuiteValues = reportSuitesData.production;
								if (reportSuitesData[turbine.buildInfo.environment]) {
									reportSuiteValues = reportSuitesData[turbine.buildInfo.environment];
								}

								return reportSuiteValues.join(',');
							};

							var createTracker = function(settings, reportSuites) {
								if (!window.s_gi) {
									throw new Error(
										'Unable to create AppMeasurement tracker, `s_gi` function not found.' + window.AppMeasurement
									);
								}
								turbine.logger.info('Creating AppMeasurement tracker with these report suites: "' + reportSuites + '"');
								var tracker = window.s_gi(reportSuites);
								if (settings.libraryCode.scopeTrackerGlobally) {
									turbine.logger.info('Setting the tracker as window.s');
									window.s = tracker;
								}
								return tracker;
							};

							var loadManagedLibrary = function(settings) {
								var reportSuites = getReportSuites(settings.libraryCode.accounts);
								return loadAppMeasurementScript(turbine.getHostedLibFileUrl('AppMeasurement.js')).then(
									createTracker.bind(null, settings, reportSuites)
								);
							};

							var setReportSuitesOnTracker = function(settings, tracker) {
								if (settings.libraryCode.accounts) {
									if (!tracker.sa) {
										turbine.logger.warn('Cannot set report suites on tracker. `sa` method not available.');
									} else {
										var reportSuites = getReportSuites(settings.libraryCode.accounts);
										turbine.logger.info('Setting the following report suites on the tracker: "' + reportSuites + '"');
										tracker.sa(reportSuites);
									}
								}

								return tracker;
							};

							var poll = function(trackerVariableName) {
								turbine.logger.info('Waiting for the tracker to become accessible at: "' + trackerVariableName + '".');
								return new Promise(function(resolve, reject) {
									var i = 1;
									var intervalId = setInterval(function() {
										if (window[trackerVariableName]) {
											turbine.logger.info('Found tracker located at: "' + trackerVariableName + '".');
											resolve(window[trackerVariableName]);
											clearInterval(intervalId);
										}

										if (i >= 10) {
											clearInterval(intervalId);
											reject(
												new Error('Bailing out. Cannot find the global variable name: "' + trackerVariableName + '".')
											);
										}

										i++;
									}, 1000);
								});
							};

							var detectPreinstalledLibrary = function(settings) {
								return poll(settings.libraryCode.trackerVariableName).then(
									setReportSuitesOnTracker.bind(null, settings)
								);
							};

							var getTrackerFromVariable = function(trackerVariableName) {
								if (window[trackerVariableName]) {
									turbine.logger.info('Found tracker located at: "' + trackerVariableName + '".');
									return window[trackerVariableName];
								} else {
									throw new Error('Cannot find the global variable name: "' + trackerVariableName + '".');
								}
							};

							var loadRemoteLibrary = function(url, settings) {
								return loadAppMeasurementScript(url)
									.then(getTrackerFromVariable.bind(null, settings.libraryCode.trackerVariableName))
									.then(setReportSuitesOnTracker.bind(null, settings));
							};

							module.exports = function(settings) {
								var url;
								var libraryPromise;

								switch (settings.libraryCode.type) {
									case LIB_TYPES.MANAGED:
										libraryPromise = loadManagedLibrary(settings);
										break;

									case LIB_TYPES.PREINSTALLED:
										libraryPromise = detectPreinstalledLibrary(settings);
										break;

									case LIB_TYPES.CUSTOM:
										url = settings.libraryCode.source;

										libraryPromise = loadRemoteLibrary(url, settings);
										break;

									case LIB_TYPES.REMOTE:
										url =
											window.location.protocol === 'https:'
												? settings.libraryCode.httpsUrl
												: settings.libraryCode.httpUrl;

										libraryPromise = loadRemoteLibrary(url, settings);
										break;

									default:
										throw new Error('Cannot load library. Type not supported.');
								}

								return libraryPromise;
							};
						}
					},
					'adobe-analytics/src/lib/helpers/generateVersion.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							// The Launch code version is a 4 characters string.  The first character will always be L
							// followed by year, month, and day codes.
							// For example: JS-1.4.3-L53O = JS 1.4.3 code, Launch 2015 March 24th release (revision 1)
							// More info: https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=tagmanager&title=DTM+Analytics+Code+Versions

							'use strict';

							var THIRD_OF_DAY = 8; //hours

							var getDayField = function(date) {
								return date.getUTCDate().toString(36);
							};

							var getLastChar = function(str) {
								return str.substr(str.length - 1);
							};

							var getRevision = function(date) {
								// We are under the assumption that a Turbine version will be release at least 8h apart (max 3
								// releases per day).
								return Math.floor(date.getUTCHours() / THIRD_OF_DAY);
							};

							var getMonthField = function(date) {
								var monthNumber = date.getUTCMonth() + 1;
								var revision = getRevision(date);

								var monthField = (monthNumber + revision * 12).toString(36);

								return getLastChar(monthField);
							};

							var getYearField = function(date) {
								return (date.getUTCFullYear() - 2010).toString(36);
							};

							module.exports = function(dateString) {
								var date = new Date(dateString);

								if (isNaN(date)) {
									throw new Error('Invalid date provided');
								}

								return ('L' + getYearField(date) + getMonthField(date) + getDayField(date)).toUpperCase();
							};
						}
					}
				},
				settings: {
					orgId: 'BB3937CB5B349FE70A495EAE@AdobeOrg',
					customSetup: {
						source: function(s) {
							if (!window.s_doPlugins) {
								window.s = s;

								/*
								 * ************************************************************************
								 *
								 *  ADOBE CONFIDENTIAL
								 *  ___________________
								 *
								 *   (c) Copyright 2018 Adobe Systems Incorporated
								 *   All Rights Reserved.
								 *
								 *  NOTICE:  All information contained herein is, and remains
								 *  the property of Adobe Systems Incorporated and its suppliers,
								 *  if any.  The intellectual and technical concepts contained
								 *  herein are proprietary to Adobe Systems Incorporated and its
								 *  suppliers and may be covered by U.S. and Foreign Patents,
								 *  patents in process, and are protected by trade secret or copyright law.
								 *  Dissemination of this information or reproduction of this material
								 *  is strictly forbidden unless prior written permission is obtained
								 *  from Adobe Systems Incorporated.
								 * ************************************************************************
								 */

								/*
								 * video heartbeats - 2.1.0 - 2018-02-15
								 * Copyright (c) 2018 Adobe Systems, Inc. All Rights Reserved.
								 */
								/*
    ! Copyright for external libraries used in ADBMobile library
    */
								/*
								 * JavaScript MD5 1.0.1
								 * https://github.com/blueimp/JavaScript-MD5
								 *
								 * Copyright 2011, Sebastian Tschan
								 * https://blueimp.net
								 *
								 * Licensed under the MIT license:
								 * http://www.opensource.org/licenses/MIT
								 *
								 * Based on
								 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
								 * Digest Algorithm, as defined in RFC 1321.
								 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
								 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
								 * Distributed under the BSD License
								 * See http://pajhome.org.uk/crypt/md5 for more info.
								 */
								/*
								 * The MIT License (MIT)
								 * Copyright (c) 2014 the UMD contributors.
								 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
								 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
								 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
								 */
								(function(root, factory) {
									//https://github.com/umdjs/umd/blob/master/templates/returnExports.js
									if (typeof define === 'function' && define.amd) {
										define([], factory);
									} else if (typeof module === 'object' && module.exports) {
										module.exports = factory();
									} else {
										root.ADB = factory();
									}
								})(typeof self !== 'undefined' ? self : this, function() {
									var exports = {};
									(function() {
										// Heartbeat core
										!(function(a) {
											if (void 0 === b) var b = {};
											if (void 0 === c) var c = {};
											if (void 0 === d) var d = {};
											if ((d.radio || (d.radio = {}), d.plugin || (d.plugin = {}), void 0 === e)) var e = {};
											e.clock || (e.clock = {}),
												(function(a) {
													'use strict';

													function b(a, b) {
														var c = (65535 & a) + (65535 & b);
														return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (65535 & c);
													}

													function c(a, b) {
														return (a << b) | (a >>> (32 - b));
													}

													function d(a, d, e, f, g, h) {
														return b(c(b(b(d, a), b(f, h)), g), e);
													}

													function e(a, b, c, e, f, g, h) {
														return d((b & c) | (~b & e), a, b, f, g, h);
													}

													function f(a, b, c, e, f, g, h) {
														return d((b & e) | (c & ~e), a, b, f, g, h);
													}

													function g(a, b, c, e, f, g, h) {
														return d(b ^ c ^ e, a, b, f, g, h);
													}

													function h(a, b, c, e, f, g, h) {
														return d(c ^ (b | ~e), a, b, f, g, h);
													}

													function i(a, c) {
														(a[c >> 5] |= 128 << c % 32), (a[14 + (((c + 64) >>> 9) << 4)] = c);
														var d,
															i,
															j,
															k,
															l,
															m = 1732584193,
															n = -271733879,
															o = -1732584194,
															p = 271733878;
														for (d = 0; d < a.length; d += 16)
															(i = m),
																(j = n),
																(k = o),
																(l = p),
																(m = e(m, n, o, p, a[d], 7, -680876936)),
																(p = e(p, m, n, o, a[d + 1], 12, -389564586)),
																(o = e(o, p, m, n, a[d + 2], 17, 606105819)),
																(n = e(n, o, p, m, a[d + 3], 22, -1044525330)),
																(m = e(m, n, o, p, a[d + 4], 7, -176418897)),
																(p = e(p, m, n, o, a[d + 5], 12, 1200080426)),
																(o = e(o, p, m, n, a[d + 6], 17, -1473231341)),
																(n = e(n, o, p, m, a[d + 7], 22, -45705983)),
																(m = e(m, n, o, p, a[d + 8], 7, 1770035416)),
																(p = e(p, m, n, o, a[d + 9], 12, -1958414417)),
																(o = e(o, p, m, n, a[d + 10], 17, -42063)),
																(n = e(n, o, p, m, a[d + 11], 22, -1990404162)),
																(m = e(m, n, o, p, a[d + 12], 7, 1804603682)),
																(p = e(p, m, n, o, a[d + 13], 12, -40341101)),
																(o = e(o, p, m, n, a[d + 14], 17, -1502002290)),
																(n = e(n, o, p, m, a[d + 15], 22, 1236535329)),
																(m = f(m, n, o, p, a[d + 1], 5, -165796510)),
																(p = f(p, m, n, o, a[d + 6], 9, -1069501632)),
																(o = f(o, p, m, n, a[d + 11], 14, 643717713)),
																(n = f(n, o, p, m, a[d], 20, -373897302)),
																(m = f(m, n, o, p, a[d + 5], 5, -701558691)),
																(p = f(p, m, n, o, a[d + 10], 9, 38016083)),
																(o = f(o, p, m, n, a[d + 15], 14, -660478335)),
																(n = f(n, o, p, m, a[d + 4], 20, -405537848)),
																(m = f(m, n, o, p, a[d + 9], 5, 568446438)),
																(p = f(p, m, n, o, a[d + 14], 9, -1019803690)),
																(o = f(o, p, m, n, a[d + 3], 14, -187363961)),
																(n = f(n, o, p, m, a[d + 8], 20, 1163531501)),
																(m = f(m, n, o, p, a[d + 13], 5, -1444681467)),
																(p = f(p, m, n, o, a[d + 2], 9, -51403784)),
																(o = f(o, p, m, n, a[d + 7], 14, 1735328473)),
																(n = f(n, o, p, m, a[d + 12], 20, -1926607734)),
																(m = g(m, n, o, p, a[d + 5], 4, -378558)),
																(p = g(p, m, n, o, a[d + 8], 11, -2022574463)),
																(o = g(o, p, m, n, a[d + 11], 16, 1839030562)),
																(n = g(n, o, p, m, a[d + 14], 23, -35309556)),
																(m = g(m, n, o, p, a[d + 1], 4, -1530992060)),
																(p = g(p, m, n, o, a[d + 4], 11, 1272893353)),
																(o = g(o, p, m, n, a[d + 7], 16, -155497632)),
																(n = g(n, o, p, m, a[d + 10], 23, -1094730640)),
																(m = g(m, n, o, p, a[d + 13], 4, 681279174)),
																(p = g(p, m, n, o, a[d], 11, -358537222)),
																(o = g(o, p, m, n, a[d + 3], 16, -722521979)),
																(n = g(n, o, p, m, a[d + 6], 23, 76029189)),
																(m = g(m, n, o, p, a[d + 9], 4, -640364487)),
																(p = g(p, m, n, o, a[d + 12], 11, -421815835)),
																(o = g(o, p, m, n, a[d + 15], 16, 530742520)),
																(n = g(n, o, p, m, a[d + 2], 23, -995338651)),
																(m = h(m, n, o, p, a[d], 6, -198630844)),
																(p = h(p, m, n, o, a[d + 7], 10, 1126891415)),
																(o = h(o, p, m, n, a[d + 14], 15, -1416354905)),
																(n = h(n, o, p, m, a[d + 5], 21, -57434055)),
																(m = h(m, n, o, p, a[d + 12], 6, 1700485571)),
																(p = h(p, m, n, o, a[d + 3], 10, -1894986606)),
																(o = h(o, p, m, n, a[d + 10], 15, -1051523)),
																(n = h(n, o, p, m, a[d + 1], 21, -2054922799)),
																(m = h(m, n, o, p, a[d + 8], 6, 1873313359)),
																(p = h(p, m, n, o, a[d + 15], 10, -30611744)),
																(o = h(o, p, m, n, a[d + 6], 15, -1560198380)),
																(n = h(n, o, p, m, a[d + 13], 21, 1309151649)),
																(m = h(m, n, o, p, a[d + 4], 6, -145523070)),
																(p = h(p, m, n, o, a[d + 11], 10, -1120210379)),
																(o = h(o, p, m, n, a[d + 2], 15, 718787259)),
																(n = h(n, o, p, m, a[d + 9], 21, -343485551)),
																(m = b(m, i)),
																(n = b(n, j)),
																(o = b(o, k)),
																(p = b(p, l));
														return [m, n, o, p];
													}

													function j(a) {
														var b,
															c = '';
														for (b = 0; b < 32 * a.length; b += 8)
															c += String.fromCharCode((a[b >> 5] >>> b % 32) & 255);
														return c;
													}

													function k(a) {
														var b,
															c = [];
														for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) c[b] = 0;
														for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
														return c;
													}

													function l(a) {
														return j(i(k(a), 8 * a.length));
													}

													function m(a, b) {
														var c,
															d,
															e = k(a),
															f = [],
															g = [];
														for (
															f[15] = g[15] = void 0, e.length > 16 && (e = i(e, 8 * a.length)), c = 0;
															c < 16;
															c += 1
														)
															(f[c] = 909522486 ^ e[c]), (g[c] = 1549556828 ^ e[c]);
														return (d = i(f.concat(k(b)), 512 + 8 * b.length)), j(i(g.concat(d), 640));
													}

													function n(a) {
														var b,
															c,
															d = '0123456789abcdef',
															e = '';
														for (c = 0; c < a.length; c += 1)
															(b = a.charCodeAt(c)), (e += d.charAt((b >>> 4) & 15) + d.charAt(15 & b));
														return e;
													}

													function o(a) {
														return unescape(encodeURIComponent(a));
													}

													function p(a) {
														return l(o(a));
													}

													function q(a) {
														return n(p(a));
													}

													function r(a, b) {
														return m(o(a), o(b));
													}

													function s(a, b) {
														return n(r(a, b));
													}

													function t(a, b, c) {
														return b ? (c ? r(b, a) : s(b, a)) : c ? p(a) : q(a);
													}
													a.md5 = t;
												})(b),
												(function(a) {
													'use strict';
													var b = {};
													(b.startsWith = function(a, b) {
														return 0 == a.indexOf(b);
													}),
														(a.StringUtils = b);
												})(b),
												(function(a) {
													'use strict';
													var b = {};
													(b.clone = function(a) {
														var b = {};
														for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
														return b;
													}),
														(b.merge = function(a, c) {
															var d = b.clone(a);
															for (var e in c) c.hasOwnProperty(e) && (d[e] = c[e]);
															return d;
														}),
														(b.append = function(a, b) {
															for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
														}),
														(a.ObjectUtils = b);
												})(b),
												(function(a) {
													'use strict';

													function b(a, b, c) {
														(this.fn = a), (this.ctx = b), (this.params = c);
													}
													(b.prototype.run = function() {
														this.params ? this.fn.apply(this.ctx, this.params) : this.fn.apply(this.ctx);
													}),
														(a.radio.Command = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a, b) {
														(this._queue = []),
															(this._lastTs = 0),
															(this._isSuspended = void 0 !== a && a),
															(this._delay = void 0 !== b ? b : 0);
													}
													(b.prototype.addCommand = function(a) {
														this._queue.push(a), this._drain();
													}),
														(b.prototype.cancelAllCommands = function() {
															this._queue = [];
														}),
														(b.prototype.isEmpty = function() {
															return 0 === this._queue.length;
														}),
														(b.prototype.suspend = function() {
															this._isSuspended = !0;
														}),
														(b.prototype.resume = function() {
															(this._isSuspended = !1), this._drain();
														}),
														(b.prototype.flush = function() {
															this._isSuspended = !1;
															for (var a = 0; a < this._queue.length; a++) {
																this._queue[a].run();
															}
															this._queue = [];
														}),
														(b.prototype._drain = function() {
															if (!this._isSuspended && !this._drainInProgress) {
																this._drainInProgress = !0;
																var a = this;
																!(function b() {
																	var c = a._queue.shift();
																	c
																		? a._runCommand(c, function() {
																				a._isSuspended || b();
																		  })
																		: (a._drainInProgress = !1);
																})();
															}
														}),
														(b.prototype._runCommand = function(a, b) {
															function c() {
																a.run(), null != b && b.call(d);
															}
															var d = this;
															if (0 == this._lastTs) c();
															else {
																var e = new Date().getTime(),
																	f = e - this._lastTs;
																(this._lastTs = e), f < this._delay ? setTimeout(c, this._delay - f) : c();
															}
														}),
														(a.radio.CommandQueue = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a, b) {
														if (((this._name = a), !b))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = b),
															(this._listeners = {}),
															(this._requests = {}),
															(this._commands = {}),
															(this._isShutDown = !1);
													}

													function c(a, c) {
														if (a === c) return !0;
														for (
															var d = (a || '').split(b.SEPARATOR), e = (c || '').split(b.SEPARATOR), f = !0, g = 0;
															g < d.length;
															g++
														)
															f = f && (d[g] === b.WILDCARD || d[g] === e[g]);
														return f;
													}
													(b.WILDCARD = '*'),
														(b.SEPARATOR = ':'),
														(b.prototype.toString = function() {
															return '<channel: ' + this._name + '>';
														}),
														(b.prototype.shutdown = function() {
															this._isShutDown ||
																(this._logger.debug(d, '#shutdown > Shutting down'),
																this.off(),
																(this._requests = {}),
																(this._commands = {}),
																(this._isShutDown = !0));
														}),
														(b.prototype.on = function(a, b, c) {
															this._isShutDown ||
																(this._listeners[a] || (this._listeners[a] = []),
																this._listeners[a].push({
																	fn: b,
																	ctx: c
																}));
														}),
														(b.prototype.off = function(a, b, c) {
															if (!this._isShutDown) {
																if (((b = 'function' == typeof b ? b : null), !a && null == b && !c))
																	return void (this._listeners = {});
																if (a) this._removeListener(a, b, c);
																else
																	for (a in this._listeners)
																		this._listeners.hasOwnProperty(a) && this._removeListener(a, b, c);
															}
														}),
														(b.prototype.trigger = function(a) {
															if (!this._isShutDown)
																for (var b in this._listeners)
																	if (this._listeners.hasOwnProperty(b) && c(b, a.name))
																		for (var d = this._listeners[b].slice(0), e = 0; e < d.length; e++) {
																			var f = d[e];
																			f.fn.call(f.ctx, a);
																		}
														}),
														(b.prototype.comply = function(a, b, c) {
															this._isShutDown ||
																(this._commands[a] = {
																	cmd: b,
																	ctx: c
																});
														}),
														(b.prototype.command = function(a, b) {
															if (!this._isShutDown) {
																var c = this._commands[a];
																if (!c) return void this._logger.warn(d, '#command > No command handler for: ' + a);
																c.cmd.call(c.ctx, b);
															}
														}),
														(b.prototype.reply = function(a, b, c) {
															this._isShutDown ||
																(this._requests[a] = {
																	fn: b,
																	ctx: c
																});
														}),
														(b.prototype.request = function(a) {
															if (!this._isShutDown) {
																var b = this._requests[a];
																return b
																	? b.fn.call(b.ctx)
																	: (this._logger.warn(d, '#request > No request handler for: ' + a), null);
															}
														}),
														(b.prototype._removeListener = function(a, b, c) {
															b = 'function' == typeof b ? b : null;
															var d = this._listeners[a];
															if (d) {
																if (!d.length || (null == b && !c)) return void delete this._listeners[a];
																for (var e = 0; e < d.length; e++) {
																	var f = d[e];
																	(null !== b && b !== f.fn) || (c && c !== f.ctx) || this._listeners[a].splice(e, 1);
																}
															}
														});
													var d = 'radio::Channel';
													a.radio.Channel = b;
												})(d),
												(function(a) {
													'use strict';

													function b(a) {
														if (!a) throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = a), (this._channels = {});
													}
													var c = a.radio.Channel;
													(b.prototype.channel = function(a) {
														return this._channels[a] || (this._channels[a] = new c(a, this._logger)), this._channels[a];
													}),
														(b.prototype.shutdown = function() {
															for (var a in this._channels)
																this._channels.hasOwnProperty(a) && this._channels[a].shutdown();
														}),
														(a.radio.Radio = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a, b) {
														function c() {
															this.constructor = a;
														}
														for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
														return (c.prototype = b.prototype), (a.prototype = new c()), (a.__super__ = b.prototype), a;
													}
													a.extend = b;
												})(d),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.write = function(a) {
														throw new Error('Implementation error: Method must be overridden.');
													}),
														(a.ILogWriter = b);
												})(d),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.write = function(a) {
														window.console && window.console.log && window.console.log(a);
													}),
														(a.LogWriter = b);
												})(d),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.setLogWriter = function(a) {
														throw new Error('Implementation error: Method must be overridden.');
													}),
														(b.prototype.getLogWriter = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.getEnabled = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.enable = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.disable = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.debug = function(a, b) {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.info = function(a, b) {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.warn = function(a, b) {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.error = function(a, b) {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(a.ILogger = b);
												})(d),
												(function(a) {
													'use strict';

													function b() {
														this._logWriter = new d();
													}

													function c(a) {
														return a < 10 ? '00' + a : a < 100 ? '0' + a : '' + a;
													}
													var d = a.LogWriter;
													(b.prototype.setLogWriter = function(a) {
														if (!a) throw new Error('Reference to the ILogWriter object cannot be NULL');
														(this._logWriter = a), (this._enabled = !1);
													}),
														(b.prototype.getLogWriter = function() {
															return this._logWriter;
														}),
														(b.prototype.getEnabled = function() {
															return this._enabled;
														}),
														(b.prototype.enable = function() {
															this._enabled = !0;
														}),
														(b.prototype.disable = function() {
															this._enabled = !1;
														}),
														(b.prototype.debug = function(a, b) {
															this._log(a, f, b);
														}),
														(b.prototype.info = function(a, b) {
															this._log(a, e, b);
														}),
														(b.prototype.warn = function(a, b) {
															this._log(a, g, b);
														}),
														(b.prototype.error = function(a, b) {
															this._log(a, h, b);
														}),
														(b.prototype._log = function(a, b, d) {
															if (b == h || this._enabled) {
																var e = '',
																	f = new Date();
																(e += '[' + f.toTimeString() + '.' + c(f.getMilliseconds()) + '] [' + b + '] '),
																	(e += '[' + a + '] ' + d),
																	this._logWriter.write(e);
															}
														});
													var e = 'INFO',
														f = 'DEBUG',
														g = 'WARN',
														h = 'ERROR';
													a.Logger = b;
												})(d),
												(function(a) {
													'use strict';

													function b(a, b) {
														(this._pluginName = a), (this._eventName = b);
													}
													var c = a.radio.Channel;
													(b.prototype.getPluginName = function() {
														return this._pluginName;
													}),
														(b.prototype.getEventName = function() {
															return this._eventName;
														}),
														(b.prototype.getName = function() {
															return this._pluginName + c.SEPARATOR + this._eventName;
														}),
														(a.Trigger = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a, b) {
														(this.name = a), (this.data = b);
													}
													(b.SUCCESS = 'success'),
														(b.ERROR = 'error'),
														(b.createFromTrigger = function(a) {
															return new b(a.getName());
														}),
														(a.Event = b);
												})(d),
												(function(a) {
													'use strict';

													function b() {
														this._events = {};
													}
													(b.prototype.addEventListener = function(a, b, c) {
														a &&
															b &&
															((c = c || window),
															(this._events[a] = this._events[a] || []),
															this._events[a].push({
																cb: b,
																ctx: c
															}));
													}),
														(b.prototype.removeEventListener = function(a, b, c) {
															if (a && b) {
																c = c || window;
																var d,
																	e,
																	f = !1;
																for (e in this._events)
																	if (a === e) {
																		f = !0;
																		break;
																	}
																if (f) {
																	for (d = this._events[e].length - 1; d >= 0; d--) {
																		var g = this._events[e][d];
																		b === g.cb && c === g.ctx && this._events[e].splice(d, 1);
																	}
																	this._events[e].length || delete this._events[e];
																}
															}
														}),
														(b.prototype.dispatchEvent = function(a) {
															if (a.name) {
																var b, c;
																for (b in this._events)
																	if (this._events.hasOwnProperty(b) && a.name === b) {
																		var d = this._events[b],
																			e = d.slice(0),
																			f = e.length;
																		for (c = 0; c < f; c++) e[c].cb.call(e[c].ctx, a);
																		break;
																	}
															}
														}),
														(b.prototype.removeAllListeners = function(a) {
															if (a) {
																var b, c;
																for (c in this._events)
																	if (this._events.hasOwnProperty(c)) {
																		for (b = this._events[c].length - 1; b >= 0; b--) {
																			var d = this._events[c][b];
																			d.ctx === a && this._events[c].splice(b, 1);
																		}
																		this._events[c].length || delete this._events[c];
																	}
															} else this._events = {};
														}),
														(a.EventDispatcher = b);
												})(d),
												(function(a) {
													'use strict';

													function b() {}

													function c(a, b) {
														(this.url = a || null), (this.method = b), (this._xmlhttp = null);
													}

													function d() {
														d.__super__.constructor.call(this), (this._connection = null);
													}
													var e = a.Event,
														f = a.EventDispatcher;
													(b.GET = 'GET'),
														(d.RESPONSE = 'response'),
														(d.INSTANCE = 'instance'),
														a.extend(d, f),
														(d.prototype.close = function() {
															this.removeAllListeners(null);
														}),
														(d.prototype.load = function(a) {
															a &&
																a.method &&
																a.url &&
																((a._xmlhttp = this._createCORSRequest(a)),
																a._xmlhttp ? a._xmlhttp.send() : this._loadImage(a));
														}),
														(d.prototype._createCORSRequest = function(a) {
															var b = null;
															if (void 0 !== window.XMLHttpRequest) {
																var c = new window.XMLHttpRequest();
																'withCredentials' in c && ((b = c), b.open(a.method, a.url, !0));
															}
															if (
																(null == b &&
																	void 0 !== window.XDomainRequest &&
																	((b = new window.XDomainRequest()), b.open(a.method, a.url)),
																b)
															) {
																var f = {};
																f[d.INSTANCE] = this;
																var g = this;
																(b.onload = function() {
																	if (b.status && parseInt(b.status, 10) >= 400) return this.onerror();
																	(f[d.RESPONSE] = b.responseText), g.dispatchEvent(new e(e.SUCCESS, f));
																}),
																	(b.onerror = function() {
																		g.dispatchEvent(new e(e.ERROR, f));
																	});
															}
															return b;
														}),
														(d.prototype._loadImage = function(a) {
															this._connection || ((this._connection = new Image()), (this._connection.alt = '')),
																(this._connection.src = a.url);
															var b = {};
															(b[d.RESPONSE] = ''), (b[d.INSTANCE] = this), this.dispatchEvent(new e(e.SUCCESS, b));
														}),
														(a.URLRequestMethod = b),
														(a.URLRequest = c),
														(a.URLLoader = d);
												})(d),
												(function(a) {
													'use strict';
													var b = '2.1.0.161',
														c = '43bccc',
														d = {};
													(d.getVersion = function() {
														return 'js-' + b + '-' + c;
													}),
														(d.getMajor = function() {
															return d.getNumberAtPosition(0);
														}),
														(d.getMinor = function() {
															return d.getNumberAtPosition(1);
														}),
														(d.getMicro = function() {
															return d.getNumberAtPosition(2);
														}),
														(d.getPatch = function() {
															return d.getNumberAtPosition(3);
														}),
														(d.getBuild = function() {
															return c;
														}),
														(d.getApiLevel = function() {
															return 4;
														}),
														(d.getNumberAtPosition = function(a) {
															return b.split('.')[a];
														}),
														(a.Version = d);
												})(c),
												(function(a) {
													'use strict';

													function b(a, b) {
														(this._message = a), (this._details = b);
													}
													(b.prototype.getMessage = function() {
														return this._message;
													}),
														(b.prototype.getDetails = function() {
															return this._details;
														}),
														(a.ErrorInfo = b);
												})(c),
												(function(a) {
													'use strict';

													function b() {
														this.debugLogging = !1;
													}
													a.HeartbeatConfig = b;
												})(c),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.onError = function(a) {}), (a.HeartbeatDelegate = b);
												})(c),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.configure = function(a) {
														throw new Error('Implementation error: Method must be overridden.');
													}),
														(b.prototype.bootstrap = function(a) {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.setup = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.destroy = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.enable = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.disable = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.getName = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.isInitialized = function() {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(b.prototype.resolveData = function(a) {
															throw new Error('Implementation error: Method must be overridden.');
														}),
														(a.plugin.IPlugin = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a, b, c, d) {
														(this.trigger = a),
															(this.action = c),
															(this.plugin = b),
															(this._paramMappings = {}),
															this.mergeParams(d);
													}
													var c = a.plugin.ParamMapping;
													(b.prototype.mergeParams = function(a) {
														if (a)
															for (var b = 0; b < a.length; b++) {
																var c = a[b];
																this._paramMappings[c.getKeyName()] = c;
															}
													}),
														(b.prototype.getParams = function() {
															var a = [];
															for (var b in this._paramMappings)
																this._paramMappings.hasOwnProperty(b) && a.push(this._paramMappings[b]);
															return a;
														}),
														(b.prototype.addParam = function(a) {
															this._paramMappings[a.getKeyName()] = a;
														}),
														(b.prototype.removeParam = function(a, b) {
															var d = new c(a, b);
															this._paramMappings.hasOwnProperty(d.getKeyName()) &&
																delete this._paramMappings[d.getKeyName()];
														}),
														(a.plugin.Behaviour = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a, b, d) {
														(this._pluginName = a), (this._key = b), (this._paramName = d || a + c.SEPARATOR + b);
													}
													var c = a.radio.Channel;
													(b.prototype.getPluginName = function() {
														return this._pluginName;
													}),
														(b.prototype.getKey = function() {
															return this._key;
														}),
														(b.prototype.getKeyName = function() {
															return this._pluginName + c.SEPARATOR + this._key;
														}),
														(b.prototype.getParamName = function() {
															return this._paramName;
														}),
														(a.plugin.ParamMapping = b);
												})(d),
												(function(a) {
													'use strict';

													function b(a) {
														if (!a) throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = a),
															(this._plugins = {}),
															(this._behaviours = {}),
															(this._radio = new d(this._logger)),
															(this._dataChannel = this._radio.channel(g)),
															(this._ctrlChannel = this._radio.channel(h));
													}
													var c = a.Event,
														d = a.radio.Radio,
														e = a.radio.Channel,
														f = a.plugin.Behaviour;
													(b.ERROR = 'error'),
														(b.prototype.addPlugin = function(a) {
															var b = a.getName();
															this._plugins[b] && this._logger.warn(i, '#addPlugin > Replacing plugin: ' + b),
																(this._plugins[b] = a),
																a.bootstrap(this);
														}),
														(b.prototype.setupPlugins = function() {
															for (var a in this._plugins) this._plugins.hasOwnProperty(a) && this._plugins[a].setup();
														}),
														(b.prototype.pluginExists = function(a) {
															return !!this._plugins[a];
														}),
														(b.prototype.isPluginInitialized = function(a) {
															return this._plugins[a] && this._plugins[a].isInitialized();
														}),
														(b.prototype.on = function(a, b, c, d) {
															this._dataChannel.on(a + e.SEPARATOR + b, c, d);
														}),
														(b.prototype.off = function(a, b, c, d) {
															var f = a && b ? a + e.SEPARATOR + b : null;
															this._dataChannel.off(f, c, d);
														}),
														(b.prototype.trigger = function(a) {
															var b = a.name,
																c = this._behaviours[b];
															if (c) {
																var d,
																	e,
																	f,
																	g,
																	h,
																	i = {},
																	j = {};
																for (d = 0; d < c.length; d++)
																	if (((f = c[d]), (g = f.getParams())))
																		for (e = 0; e < g.length; e++)
																			(h = g[e]),
																				(i[h.getPluginName()] = i[h.getPluginName()] || []),
																				h.key in i[h.getPluginName()] || i[h.getPluginName()].push(h.getKey());
																for (var k in i) i.hasOwnProperty(k) && (j[k] = this.request(k, i[k]));
																for (d = 0; d < c.length; d++) {
																	f = c[d];
																	var l = {
																		_behaviour: f,
																		_eventData: a.data || {}
																	};
																	if ((g = f.getParams())) {
																		for (e = 0; e < g.length; e++)
																			(h = g[e]),
																				(l[h.getParamName()] = j[h.getPluginName()]
																					? j[h.getPluginName()][h.getKey()]
																					: null);
																		this.command(f.plugin.getName(), f.action, l);
																	}
																}
															}
															this._dataChannel.trigger(a);
														}),
														(b.prototype.request = function(a, b) {
															var c = this._plugins[a];
															return c && b && 0 != b.length ? c.resolveData(b) : null;
														}),
														(b.prototype.raise = function(a) {
															this._errorInfo = a;
															var d = new c(b.ERROR, a);
															this._ctrlChannel.trigger(d);
														}),
														(b.prototype.getErrorInfo = function() {
															return this._errorInfo;
														}),
														(b.prototype.destroy = function() {
															this._radio.shutdown();
															for (var a in this._plugins)
																this._plugins.hasOwnProperty(a) && this._plugins[a].destroy();
														}),
														(b.prototype.comply = function(a, b, c) {
															this._dataChannel.comply(a.getName() + e.SEPARATOR + b, c, a);
														}),
														(b.prototype.command = function(a, b, c) {
															this._dataChannel.command(a + e.SEPARATOR + b, c);
														}),
														(b.prototype.registerBehaviour = function(a, b, c, d) {
															var e = a.getName(),
																g = new f(a, b, c, d);
															(this._behaviours[e] = this._behaviours[e] || []), this._behaviours[e].push(g);
														});
													var g = 'data_channel',
														h = 'ctrl_channel',
														i = 'plugin::PluginManager';
													a.plugin.PluginManager = b;
												})(d),
												(function(a, b) {
													'use strict';

													function c(a) {
														(this._name = a),
															(this._isInitialized = !1),
															(this._isDestroyed = !1),
															(this._isEnabled = !0),
															(this._dataResolver = {}),
															(this._logTag = 'plugin::' + this.getName()),
															(this._logger = new d());
													}
													var d = a.Logger,
														e = a.Trigger,
														f = a.Event,
														g = b.ErrorInfo;
													(c.INITIALIZED = 'initialized'),
														(c.prototype.configure = function(a) {}),
														(c.prototype.bootstrap = function(a) {
															(this._pluginManager = a),
																this._isDestroyed &&
																	this._pluginManager.raise(new g('Invalid state.', 'Plugin already destroyed.'));
														}),
														(c.prototype.setup = function() {
															this._trigger(c.INITIALIZED), (this._isInitialized = !0);
														}),
														(c.prototype.destroy = function() {
															this._isDestroyed || ((this._isDestroyed = !0), this._teardown());
														}),
														(c.prototype.enable = function() {
															(this._isEnabled = !0), this._enabled();
														}),
														(c.prototype.disable = function() {
															(this._isEnabled = !1), this._disabled();
														}),
														(c.prototype.getName = function() {
															return this._name;
														}),
														(c.prototype.getLogger = function() {
															return this._logger;
														}),
														(c.prototype.isInitialized = function() {
															return this._isInitialized;
														}),
														(c.prototype.resolveData = function(a) {
															if (!this._isEnabled || !this._isInitialized)
																return (
																	this._logger.warn(
																		this._logTag,
																		'Unable to retrieve plugin data. Plugin: ' +
																			this._name +
																			'. Enabled: ' +
																			this._isEnabled +
																			'. Initialized: ' +
																			this._isInitialized +
																			'.'
																	),
																	null
																);
															if ('function' == typeof this._dataResolver) return this._dataResolver.call(this, a);
															var b = null;
															if (a)
																for (var c = 0; c < a.length; c++) {
																	var d = a[c];
																	this._dataResolver.hasOwnProperty(d) &&
																		((b = b || {}),
																		'function' == typeof this._dataResolver[d]
																			? (b[d] = this._dataResolver[d].call(this))
																			: (b[d] = this._dataResolver[d]));
																}
															return b;
														}),
														(c.prototype.toString = function() {
															return '<plugin: ' + this._name + '>';
														}),
														(c.prototype._enabled = function() {}),
														(c.prototype._disabled = function() {}),
														(c.prototype._teardown = function() {}),
														(c.prototype._canProcess = function() {
															return this._isEnabled
																? !this._isDestroyed || (this._logger.error(this._logTag, 'Plugin destroyed.'), !1)
																: (this._logger.error(this._logTag, 'Plugin disabled.'), !1);
														}),
														(c.prototype._trigger = function(a, b) {
															var c = f.createFromTrigger(new e(this.getName(), a));
															(c.data = b), this._pluginManager.trigger(c);
														}),
														(a.plugin.BasePlugin = c);
												})(d, c),
												(function(a) {
													'use strict';

													function b(a, b, c) {
														(this.name = a),
															(this.interval = b),
															(this.isActive = !1),
															(this.repeatCount = void 0 !== c ? c : e),
															(this._nextTickTimestamp = 0),
															this.reset();
													}

													function c(a, b) {
														if (!a) throw new Error('Reference to the ClockService object cannot be NULL');
														if (((this._service = a), !b))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = b), (this._isDestroyed = !1), (this._timers = {});
														var c = this;
														this._clock = window.setInterval(function() {
															c._onTick();
														}, 1e3 * f);
													}
													(b.prototype.reset = function() {
														(this.tick = 0),
															(this._createdTimestamp = new Date().getTime()),
															this._updateNextTickTimestamp();
													}),
														(b.prototype.shouldTick = function() {
															return (
																new Date().getTime() > this._nextTickTimestamp - g / 2 &&
																(this.tick++, this._updateNextTickTimestamp(), !0)
															);
														}),
														(b.prototype._updateNextTickTimestamp = function() {
															var a = new Date().getTime();
															this._nextTickTimestamp = a + 1e3 * this.interval - 1;
														}),
														(c.prototype.createTimer = function(a, c, d) {
															this._timers[a] = new b(a, c, d);
														}),
														(c.prototype.destroyTimer = function(a) {
															delete this._timers[a];
														}),
														(c.prototype.resumeTimer = function(a, b) {
															(b = void 0 !== b && b),
																this._logger.debug(d, '#resumeTimer(name=' + a + ', reset=' + b + ')');
															var c = this._timers[a];
															c && ((c.isActive = !0), b && c.reset());
														}),
														(c.prototype.pauseTimer = function(a, b) {
															(b = void 0 !== b && b),
																this._logger.debug(d, '#pauseTimer(name=' + a + ', reset=' + b + ')');
															var c = this._timers[a];
															c && ((c.isActive = !1), b && c.reset());
														}),
														(c.prototype.isTimerPaused = function(a) {
															var b = this._timers[a];
															return !!b && !b.isActive;
														}),
														(c.prototype.destroy = function() {
															this._isDestroyed ||
																((this._isDestroyed = !0), (this._timers = {}), window.clearInterval(this._clock));
														}),
														(c.prototype._onTick = function() {
															for (var a in this._timers)
																if (this._timers.hasOwnProperty(a)) {
																	var b = this._timers[a];
																	b.isActive &&
																		b.shouldTick() &&
																		(b.interval > 1 &&
																			this._logger.debug(
																				d,
																				'#_onTick() > ' + b.name + '(' + b.tick + ' | ' + b.repeatCount + ')'
																			),
																		0 != b.repeatCount
																			? (this._service.onTick(b.name, b.interval, b.tick),
																			  b.repeatCount != e && b.repeatCount--)
																			: this.destroyTimer(b.name));
																}
														});
													var d = 'service.clock::TimerManager',
														e = -1,
														f = 0.25,
														g = 1e3 * f;
													(a.clock.TimerDescriptor = b), (a.clock.TimerManager = c);
												})(e),
												(function(a, b, c) {
													'use strict';

													function d(a) {
														if ((d.__super__.constructor.call(this, h), !a))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = a),
															(this._timerManager = new e(this, this._logger)),
															this._setupDataResolver();
													}
													var e = c.clock.TimerManager,
														f = b.StringUtils,
														g = a.plugin.BasePlugin;
													a.extend(d, g),
														(d.prototype.bootstrap = function(a) {
															d.__super__.bootstrap.call(this, a),
																this._pluginManager.comply(this, i, this._cmdCreate),
																this._pluginManager.comply(this, k, this._cmdResume),
																this._pluginManager.comply(this, j, this._cmdPause),
																this._pluginManager.comply(this, l, this._cmdDestroy);
														}),
														(d.prototype._teardown = function() {
															this._timerManager.destroy();
														}),
														(d.prototype._cmdCreate = function(a) {
															var b = a[o] || s;
															this._timerManager.createTimer(a[m], a[n], b);
														}),
														(d.prototype._cmdPause = function(a) {
															this._timerManager.pauseTimer(a[m], !!a[q]);
														}),
														(d.prototype._cmdResume = function(a) {
															this._timerManager.resumeTimer(a[m], !!a[q]);
														}),
														(d.prototype._cmdDestroy = function(a) {
															this._timerManager.destroyTimer(a[m]);
														}),
														(d.prototype.onTick = function(a, b, c) {
															a += '.tick';
															var d = {};
															(d[m] = a), (d[n] = b), (d[p] = c), this._trigger(a, d);
														}),
														(d.prototype._setupDataResolver = function() {
															var a = {},
																b = this._timerManager;
															(a[r] = function(a) {
																return b.isTimerPaused(a);
															}),
																(this._dataResolver = function(b) {
																	if (!b || 0 == b.length) return null;
																	for (var c = null, d = 0; d < b.length; d++) {
																		var e = b[d];
																		if (((c = c || {}), f.startsWith(e, r))) {
																			var g = e.split(r + '.');
																			g.length > 0 && (c[e] = a[r].call(this, g[1]));
																		}
																	}
																	return c;
																});
														});
													var h = 'service.clock',
														i = 'create',
														j = 'pause',
														k = 'resume',
														l = 'destroy',
														m = 'name',
														n = 'interval',
														o = 'repeat_count',
														p = 'tick',
														q = 'reset',
														r = 'is_paused',
														s = -1;
													c.clock.ClockService = d;
												})(d, b, e),
												(function(a, b, c) {
													'use strict';

													function d(a, b) {
														if (
															((this._logger = new e()),
															(this._pluginManager = new f(this._logger)),
															this._pluginManager.addPlugin(new g(this._logger)),
															b)
														)
															for (var c = 0; c < b.length; c++) this._pluginManager.addPlugin(b[c]);
														this._pluginManager.setupPlugins(), (this._isDestroyed = !1);
													}
													var e = a.Logger,
														f = a.plugin.PluginManager,
														g = b.clock.ClockService;
													(d.prototype.configure = function(a) {
														if (!a) throw new Error('Configuration object cannot be NULL.');
														a.debugLogging ? this._logger.enable() : this._logger.disable(),
															this._isDestroyed && this._logger.error(h, 'Instance is destroyed.');
													}),
														(d.prototype.destroy = function() {
															this._isDestroyed || (this._pluginManager.destroy(), (this._isDestroyed = !0));
														});
													var h = 'Heartbeat';
													c.Heartbeat = d;
												})(d, e, c),
												a.ADB || (a.ADB = {}),
												a.ADB.core || (a.ADB.core = d),
												a.ADB.va || (a.ADB.va = c),
												a.ADB.va.utils || (a.ADB.va.utils = b),
												a.ADB.va.plugins || (a.ADB.va.plugins = {});
										})(this);

										// VideoPlayerPlugin
										!(function(a) {
											if (void 0 === b) var b = {};
											!(function(a) {
												'use strict';
												var b = {};
												(b.ASSET_TYPE_VOD = 'vod'),
													(b.ASSET_TYPE_LIVE = 'live'),
													(b.ASSET_TYPE_LINEAR = 'linear'),
													(a.AssetType = b);
											})(b),
												(function(a) {
													'use strict';

													function b() {
														(this.playerName = null),
															(this.name = null),
															(this.position = null),
															(this.startTime = null);
													}
													(b.prototype.toString = function() {
														return (
															'playerName=' +
															this.playerName +
															', name=' +
															this.name +
															', position=' +
															this.position +
															', startTime=' +
															this.startTime
														);
													}),
														(a.AdBreakInfo = b);
												})(b),
												(function(a) {
													'use strict';

													function b() {
														(this.id = null),
															(this.name = null),
															(this.length = null),
															(this.position = null),
															(this.granularTracking = !0);
													}
													(b.prototype.toString = function() {
														return (
															'id=' +
															this.id +
															', name=' +
															this.name +
															', length=' +
															this.length +
															', position=' +
															this.position +
															', granularTracking=' +
															this.granularTracking
														);
													}),
														(a.AdInfo = b);
												})(b),
												(function(a) {
													'use strict';

													function b() {
														(this.name = null), (this.length = null), (this.position = null), (this.startTime = null);
													}
													(b.prototype.toString = function() {
														return (
															'name=' +
															this.name +
															', length=' +
															this.length +
															', position=' +
															this.position +
															', startTime=' +
															this.startTime
														);
													}),
														(a.ChapterInfo = b);
												})(b),
												(function(a) {
													'use strict';

													function b() {
														(this.bitrate = null),
															(this.fps = null),
															(this.droppedFrames = null),
															(this.startupTime = null);
													}
													(b.prototype.toString = function() {
														return (
															'bitrate=' +
															this.bitrate +
															', fps=' +
															this.fps +
															', droppedFrames=' +
															this.droppedFrames +
															', startupTime=' +
															this.startupTime
														);
													}),
														(a.QoSInfo = b);
												})(b),
												(function(a) {
													'use strict';

													function b() {
														(this.playerName = null),
															(this.id = null),
															(this.name = null),
															(this.length = null),
															(this.playhead = null),
															(this.streamType = null),
															(this.resumed = !1);
													}
													(b.prototype.toString = function() {
														return (
															'playerName=' +
															this.playerName +
															', id=' +
															this.id +
															', name=' +
															this.name +
															', length=' +
															this.length +
															', playhead=' +
															this.playhead +
															', streamType=' +
															this.streamType +
															', resumed=' +
															this.resumed
														);
													}),
														(a.VideoInfo = b);
												})(b),
												(function(a) {
													'use strict';

													function b() {
														this.debugLogging = !1;
													}
													a.VideoPlayerPluginConfig = b;
												})(b),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.getVideoInfo = function() {
														throw new Error('Implementation error: Method must be overridden.');
													}),
														(b.prototype.getAdBreakInfo = function() {
															return null;
														}),
														(b.prototype.getAdInfo = function() {
															return null;
														}),
														(b.prototype.getChapterInfo = function() {
															return null;
														}),
														(b.prototype.getQoSInfo = function() {
															return null;
														}),
														(a.VideoPlayerPluginDelegate = b);
												})(b),
												(function(a, b) {
													'use strict';

													function c(a) {
														if ((c.__super__.constructor.call(this, h), !a))
															throw new Error('PlayerPlugin delegate cannot be NULL.');
														(this._delegate = a),
															(this._isTrackingSessionActive = !1),
															(this._isTrackingSessionStarted = !1),
															this._setupDataResolver();
													}
													var d = a.plugin.ParamMapping,
														e = a.Trigger,
														f = a.plugin.BasePlugin,
														g = b.VideoPlayerPluginConfig;
													a.extend(c, f),
														(c.prototype.configure = function(a) {
															if (!a) throw new Error('Reference to the configuration data cannot be NULL.');
															if (!(a instanceof g))
																throw new Error('Expected config data to be instance of VideoPlayerPluginConfig.');
															a.debugLogging ? this._logger.enable() : this._logger.disable(),
																this._logger.debug(this._logTag, '#configure(debugLogging=' + a.debugLogging + ')');
														}),
														(c.prototype.bootstrap = function(a) {
															c.__super__.bootstrap.call(this, a), this._registerCommands(), this._registerBehaviours();
														}),
														(c.prototype._cmdVideoIdleStart = function(a) {
															this._logger.info(this._logTag, '#_cmdVideoIdleStart()'), (this._videoIdle = !0);
														}),
														(c.prototype._cmdVideoIdleResume = function(a) {
															this._logger.info(this._logTag, '#_cmdVideoIdleResume()'),
																this._videoIdle &&
																	(this._trigger(p),
																	this._trigger(q),
																	a.isInChapter && this._trigger(E),
																	a.isInAd && (this._trigger(x), (this._isTrackingAd = !0))),
																(this._videoIdle = !1);
														}),
														(c.prototype.trackSessionStart = function() {
															if ((this._logger.info(this._logTag, '#trackSessionStart()'), this._canProcess())) {
																if (!this._isTrackingSessionActive)
																	return void this._logger.warn(
																		this._logTag,
																		'#trackSessionStart() > No active tracking session.'
																	);
																if (this._isTrackingSessionStarted)
																	return void this._logger.info(
																		this._logTag,
																		'#trackSessionStart() > Tracking session already started.'
																	);
																this._trigger(p), (this._isTrackingSessionStarted = !0);
																var a = this._dataResolver(['video.resumed']);
																a.hasOwnProperty('video.resumed') && a['video.resumed'] && this._trigger(q);
															}
														}),
														(c.prototype.trackVideoLoad = function() {
															this._logger.info(this._logTag, '#trackVideoLoad()'),
																this._canProcess() &&
																	((this._isTrackingAd = !1),
																	(this._contentStarted = !1),
																	(this._isPaused = !0),
																	(this._isBuffering = !1),
																	(this._isSeeking = !1),
																	(this._playheadTimer = null),
																	(this._previousPlayhead = -1),
																	(this._stalledPlayheadCount = 0),
																	(this._playheadStalled = !1),
																	(this._videoIdle = !1),
																	this._trigger(m),
																	(this._isTrackingSessionActive = !0),
																	(this._isTrackingSessionStarted = !1));
														}),
														(c.prototype.trackVideoUnload = function() {
															if ((this._logger.info(this._logTag, '#trackVideoUnload()'), this._canProcess())) {
																if (!this._isTrackingSessionActive)
																	return void this._logger.warn(
																		this._logTag,
																		'#trackVideoUnload() > No active tracking session.'
																	);
																this._stopPlayheadTimer(),
																	this._trigger(n),
																	(this._isTrackingSessionActive = !1),
																	(this._isTrackingSessionStarted = !1),
																	(this._contentStarted = !1);
															}
														}),
														(c.prototype.trackPlay = function() {
															this._logger.info(this._logTag, '#trackPlay()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackPlay') &&
																	((this._isPaused = !1), this._trigger(u), this._startPlayheadTimer());
														}),
														(c.prototype.trackPause = function() {
															if (
																(this._logger.info(this._logTag, '#trackPause()'),
																this._canProcess() && this._startSessionIfNeeded('trackPause'))
															) {
																this._stopPlayheadTimer();
																var a = {};
																(a[M] = !1), (this._isPaused = !0), this._trigger(v, a);
															}
														}),
														(c.prototype.trackBufferStart = function() {
															this._logger.info(this._logTag, '#trackBufferStart()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackBufferStart') &&
																	(this._stopPlayheadTimer(), (this._isBuffering = !0), this._trigger(A));
														}),
														(c.prototype.trackBufferComplete = function() {
															this._logger.info(this._logTag, '#trackBufferComplete()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackBufferComplete') &&
																	((this._isBuffering = !1), this._trigger(B), this._startPlayheadTimer());
														}),
														(c.prototype.trackSeekStart = function() {
															this._logger.info(this._logTag, '#trackSeekStart()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackSeekStart') &&
																	(this._stopPlayheadTimer(), (this._isSeeking = !0), this._trigger(C));
														}),
														(c.prototype.trackSeekComplete = function() {
															if (
																(this._logger.info(this._logTag, '#trackSeekComplete()'),
																this._canProcess() && this._startSessionIfNeeded('trackSeekComplete'))
															) {
																(this._isSeeking = !1), this._trigger(D), this._startPlayheadTimer();
																var a = this._dataResolver(['ad.isInAd']);
																this._isTrackingAd = a.hasOwnProperty('ad.isInAd') && a['ad.isInAd'];
															}
														}),
														(c.prototype.trackComplete = function(a, b) {
															if (
																(this._logger.info(this._logTag, '#trackComplete()'),
																this._canProcess() && this._startSessionIfNeeded('trackComplete'))
															) {
																this._stopPlayheadTimer();
																var c = {};
																(c[L] = a),
																	(b = void 0 === b || !!b),
																	b ? this._trigger(r, c) : (this._trigger(s), this._trigger(o, c));
															}
														}),
														(c.prototype.trackTimedMetadata = function(a) {
															this._logger.info(this._logTag, '#trackComplete()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackTimedMetadata') &&
																	this._trigger(t, a);
														}),
														(c.prototype.trackChapterStart = function() {
															this._logger.info(this._logTag, '#trackChapterStart()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('#trackChapterStart') &&
																	this._trigger(E);
														}),
														(c.prototype.trackChapterComplete = function() {
															this._logger.info(this._logTag, '#trackChapterComplete()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackChapterComplete') &&
																	this._trigger(F);
														}),
														(c.prototype.trackChapterSkip = function() {
															this._logger.info(this._logTag, '#trackChapterSkip()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackChapterSkip') &&
																	this._trigger(G);
														}),
														(c.prototype.trackAdStart = function() {
															this._logger.info(this._logTag, '#trackAdStart()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackAdStart') &&
																	(this._trigger(x), (this._isTrackingAd = !0));
														}),
														(c.prototype.trackAdComplete = function() {
															this._logger.info(this._logTag, '#trackAdComplete()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackAdComplete') &&
																	(this._trigger(y), (this._isTrackingAd = !1));
														}),
														(c.prototype.trackAdSkip = function() {
															this._logger.info(this._logTag, '#trackAdSkip()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackAdSkip') &&
																	(this._trigger(z), (this._isTrackingAd = !1));
														}),
														(c.prototype.trackBitrateChange = function() {
															this._logger.info(this._logTag, '#trackBitrateChange()'),
																this._canProcess() &&
																	this._startSessionIfNeeded('trackBitrateChange') &&
																	this._trigger(H);
														}),
														(c.prototype.trackVideoPlayerError = function(a) {
															if (
																(this._logger.info(this._logTag, '#trackVideoPlayerError(errorId=' + a + ')'),
																this._startSessionIfNeeded('trackVideoPlayerError'))
															) {
																var b = {};
																(b[N] = l), (b[O] = a), this._trigger(I, b);
															}
														}),
														(c.prototype.trackApplicationError = function(a) {
															if (
																(this._logger.info(this._logTag, '#trackApplicationError(errorId=' + a + ')'),
																this._startSessionIfNeeded('trackApplicationError'))
															) {
																var b = {};
																(b[N] = k), (b[O] = a), this._trigger(I, b);
															}
														}),
														(c.prototype._registerCommands = function() {
															this._pluginManager.comply(this, 'handleVideoIdleStart', this._cmdVideoIdleStart),
																this._pluginManager.comply(this, 'handleVideoIdleResume', this._cmdVideoIdleResume);
														}),
														(c.prototype._registerBehaviours = function() {
															this._pluginManager.registerBehaviour(new e(j, J), this, 'handleVideoIdleStart'),
																this._pluginManager.registerBehaviour(new e(j, K), this, 'handleVideoIdleResume', [
																	new d(i, 'ad.isInAd', 'isInAd'),
																	new d(i, 'chapter.isInChapter', 'isInChapter')
																]);
														}),
														(c.prototype._setupDataResolver = function() {
															function a() {
																return g.video
																	? g.video
																	: ((g.video = h._delegate.getVideoInfo()),
																	  h._logger.info(h._logTag, 'Data from delegate > VideoInfo: ' + g.video),
																	  g.video);
															}

															function b() {
																return g.ad
																	? g.ad
																	: ((g.ad = h._delegate.getAdInfo()),
																	  h._logger.info(h._logTag, 'Data from delegate > AdInfo: ' + g.ad),
																	  g.ad);
															}

															function c() {
																return g.pod
																	? g.pod
																	: ((g.pod = h._delegate.getAdBreakInfo()),
																	  h._logger.info(h._logTag, 'Data from delegate > AdBreakInfo: ' + g.pod),
																	  g.pod);
															}

															function d() {
																return g.chapter
																	? g.chapter
																	: ((g.chapter = h._delegate.getChapterInfo()),
																	  h._logger.info(h._logTag, 'Data from delegate > ChapterInfo: ' + g.chapter),
																	  g.chapter);
															}

															function e() {
																return g.qos
																	? g.qos
																	: ((g.qos = h._delegate.getQoSInfo()),
																	  h._logger.info(h._logTag, 'Data from delegate > QoSInfo: ' + g.qos),
																	  g.qos);
															}
															var f = {},
																g = {},
																h = this;
															(f['video.id'] = function() {
																var b = a(),
																	c = b ? b.id : null;
																return h._logger.debug(h._logTag, 'Resolving video.id: ' + c), c;
															}),
																(f['video.name'] = function() {
																	var b = a(),
																		c = b ? b.name : null;
																	return h._logger.debug(h._logTag, 'Resolving video.name: ' + c), c;
																}),
																(f['video.length'] = function() {
																	var b = a(),
																		c = b ? b.length : NaN;
																	return h._logger.debug(h._logTag, 'Resolving video.length: ' + c), c;
																}),
																(f['video.playerName'] = function() {
																	var b = a(),
																		c = b ? b.playerName : null;
																	return h._logger.debug(h._logTag, 'Resolving video.playerName: ' + c), c;
																}),
																(f['video.streamType'] = function() {
																	var b = a(),
																		c = b ? b.streamType : null;
																	return h._logger.debug(h._logTag, 'Resolving video.streamType: ' + c), c;
																}),
																(f['video.playhead'] = function() {
																	var b = a(),
																		c = b ? b.playhead : NaN;
																	return h._logger.debug(h._logTag, 'Resolving video.playhead: ' + c), c;
																}),
																(f['video.resumed'] = function() {
																	var b = a(),
																		c = !!b && b.resumed;
																	return h._logger.debug(h._logTag, 'Resolving video.resumed: ' + c), c;
																}),
																(f['video.playheadStalled'] = function() {
																	return this._playheadStalled;
																}),
																(f['pod.name'] = function() {
																	var a = c(),
																		b = a ? a.name : null;
																	return h._logger.debug(h._logTag, 'Resolving pod.name: ' + b), b;
																}),
																(f['pod.playerName'] = function() {
																	var a = c(),
																		b = a ? a.playerName : null;
																	return h._logger.debug(h._logTag, 'Resolving pod.playerName: ' + b), b;
																}),
																(f['pod.position'] = function() {
																	var a = c(),
																		b = a ? a.position : NaN;
																	return h._logger.debug(h._logTag, 'Resolving pod.position: ' + b), b;
																}),
																(f['pod.startTime'] = function() {
																	var a = c(),
																		b = a ? a.startTime : NaN;
																	return h._logger.debug(h._logTag, 'Resolving pod.startTime: ' + b), b;
																}),
																(f['ad.isInAd'] = function() {
																	var a = b(),
																		c = null != a;
																	return h._logger.debug(h._logTag, 'Resolving ad.isInAd: ' + c), c;
																}),
																(f['ad.isInAdBreak'] = function() {
																	var a = c(),
																		b = null != a;
																	return h._logger.debug(h._logTag, 'Resolving ad.isInAdBreak: ' + b), b;
																}),
																(f['ad.id'] = function() {
																	var a = b(),
																		c = a ? a.id : null;
																	return h._logger.debug(h._logTag, 'Resolving ad.id: ' + c), c;
																}),
																(f['ad.name'] = function() {
																	var a = b(),
																		c = a ? a.name : null;
																	return h._logger.debug(h._logTag, 'Resolving ad.name: ' + c), c;
																}),
																(f['ad.length'] = function() {
																	var a = b(),
																		c = a ? a.length : NaN;
																	return h._logger.debug(h._logTag, 'Resolving ad.length: ' + c), c;
																}),
																(f['ad.position'] = function() {
																	var a = b(),
																		c = a ? a.position : NaN;
																	return h._logger.debug(h._logTag, 'Resolving ad.position: ' + c), c;
																}),
																(f['ad.granularTracking'] = function() {
																	var a = b(),
																		c = !!a && a.granularTracking;
																	return h._logger.debug(h._logTag, 'Resolving ad.granularTracking: ' + c), c;
																}),
																(f['ad.trackingInterval'] = function() {
																	var a = Q;
																	return h._logger.debug(h._logTag, 'Resolving ad.trackingInterval: ' + a), a;
																}),
																(f['chapter.isInChapter'] = function() {
																	var a = d(),
																		b = null != a;
																	return h._logger.debug(h._logTag, 'Resolving chapter.isInChapter: ' + b), b;
																}),
																(f['chapter.name'] = function() {
																	var a = d(),
																		b = a ? a.name : null;
																	return h._logger.debug(h._logTag, 'Resolving chapter.name: ' + b), b;
																}),
																(f['chapter.length'] = function() {
																	var a = d(),
																		b = a ? a.length : NaN;
																	return h._logger.debug(h._logTag, 'Resolving chapter.length: ' + b), b;
																}),
																(f['chapter.position'] = function() {
																	var a = d(),
																		b = a ? a.position : NaN;
																	return h._logger.debug(h._logTag, 'Resolving chapter.position: ' + b), b;
																}),
																(f['chapter.startTime'] = function() {
																	var a = d(),
																		b = a ? a.startTime : NaN;
																	return h._logger.debug(h._logTag, 'Resolving chapter.startTime: ' + b), b;
																}),
																(f['qos.bitrate'] = function() {
																	var a = e(),
																		b = a ? a.bitrate : NaN;
																	return h._logger.debug(h._logTag, 'Resolving qos.bitrate: ' + b), b;
																}),
																(f['qos.fps'] = function() {
																	var a = e(),
																		b = a ? a.fps : NaN;
																	return h._logger.debug(h._logTag, 'Resolving qos.fps: ' + b), b;
																}),
																(f['qos.droppedFrames'] = function() {
																	var a = e(),
																		b = a ? a.droppedFrames : NaN;
																	return h._logger.debug(h._logTag, 'Resolving qos.droppedFrames: ' + b), b;
																}),
																(f['qos.startupTime'] = function() {
																	var a = e(),
																		b = a ? 1e3 * a.startupTime : NaN;
																	return h._logger.debug(h._logTag, 'Resolving qos.startupTime: ' + b), b;
																}),
																(this._dataResolver = function(a) {
																	if (!a || 0 == a.length) return null;
																	g = {};
																	for (var b = null, c = 0; c < a.length; c++) {
																		var d = a[c];
																		(b = b || {}), (b[d] = f.hasOwnProperty(d) ? f[d].call(this) : null);
																	}
																	return b;
																});
														}),
														(c.prototype._trackPlayheadStall = function() {
															this._canProcess() &&
																(this._playheadStalled ||
																	(this._logger.info(this._logTag, '#_trackPlayheadStall()'),
																	(this._stalledPlayheadCount = 0),
																	(this._playheadStalled = !0),
																	this._trigger(v)));
														}),
														(c.prototype._trackExitStall = function() {
															this._canProcess() &&
																((this._stalledPlayheadCount = 0),
																!this._playheadStalled ||
																	this._isPaused ||
																	this._isSeeking ||
																	this._isBuffering ||
																	(this._logger.info(this._logTag, '#_trackExitStall()'),
																	(this._playheadStalled = !1),
																	this._trigger(u)));
														}),
														(c.prototype._startPlayheadTimer = function() {
															var a = this;
															this._playheadTimer ||
																this._isPaused ||
																this._isSeeking ||
																this._isBuffering ||
																(this._playheadTimer = setInterval(function() {
																	if (a._canProcess()) {
																		var b = a._dataResolver(['ad.isInAd', 'video.playhead']);
																		if (a._isTrackingAd)
																			a._playheadStalled && a._trackExitStall(),
																				b.hasOwnProperty('ad.isInAd') && !b['ad.isInAd'] && (a._isTrackingAd = !1);
																		else {
																			var c = b['video.playhead'];
																			c != a._previousPlayhead
																				? a._trackExitStall()
																				: a._previousPlayhead >= 0 &&
																				  c == a._previousPlayhead &&
																				  ++a._stalledPlayheadCount == R &&
																				  a._trackPlayheadStall(),
																				c != a._previousPlayhead &&
																					c > 0 &&
																					!a._contentStarted &&
																					(a._isPaused ||
																						a._isBuffering ||
																						a._isSeeking ||
																						(a._logger.info(a._logTag, '#_playheadTimer playhead progress to: ' + c),
																						a._trigger(w),
																						(a._contentStarted = !0))),
																				(a._previousPlayhead = c);
																		}
																	}
																}, P));
														}),
														(c.prototype._stopPlayheadTimer = function() {
															this._playheadTimer && (clearInterval(this._playheadTimer), (this._playheadTimer = null)),
																this._trackExitStall();
														}),
														(c.prototype._startSessionIfNeeded = function(a) {
															return this._isTrackingSessionActive
																? (this._isTrackingSessionStarted ||
																		(this._logger.info(this._logTag, '#' + a + '() > Tracking session auto-start.'),
																		this.trackSessionStart()),
																  !0)
																: (this._logger.warn(this._logTag, '#' + a + '() > No active tracking session.'), !1);
														});
													var h = 'player',
														i = h,
														j = 'adobe-heartbeat',
														k = 'sourceErrorExternal',
														l = 'sourceErrorSDK',
														m = 'video_load',
														n = 'video_unload',
														o = 'video_session_end',
														p = 'video_start',
														q = 'video_resume',
														r = 'video_complete',
														s = 'video_skip',
														t = 'timed_metadata',
														u = 'play',
														v = 'pause',
														w = 'content_start',
														x = 'ad_start',
														y = 'ad_complete',
														z = 'ad_skip',
														A = 'buffer_start',
														B = 'buffer_complete',
														C = 'seek_start',
														D = 'seek_complete',
														E = 'chapter_start',
														F = 'chapter_complete',
														G = 'chapter_skip',
														H = 'bitrate_change',
														I = 'track_error',
														J = 'video_idle_start',
														K = 'video_idle_resume',
														L = 'callback',
														M = 'filter_report',
														N = 'source',
														O = 'error_id',
														P = 1001,
														Q = 1,
														R = 2;
													b.VideoPlayerPlugin = c;
												})(a.ADB.core, b),
												a.ADB.va.plugins.videoplayer || (a.ADB.va.plugins.videoplayer = b);
										})(this);

										// AdobeHeartbeatPlugin
										!(function(a) {
											if (void 0 === b) var b = {};
											b.clock || (b.clock = {}),
												b.context || (b.context = {}),
												b.filter || (b.filter = {}),
												b.model || (b.model = {}),
												b.network || (b.network = {}),
												(function(a, b) {
													'use strict';

													function c(a, b, c, d, e) {
														if (!b) throw new Error('Reference to the channel object cannot be NULL');
														if (((this._channel = b), !a))
															throw new Error('Reference to the pluginManager object cannot be NULL');
														if (((this._pluginManager = a), !e))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logTag = 'ah::Timer.' + c),
															(this._logger = e),
															(this._isDestroyed = !1),
															this._createTimer(c, d),
															this._installHandlers();
													}
													var d = a.Event;
													(c.KEY_NAME = 'name'),
														(c.KEY_INTERVAL = 'interval'),
														(c.KEY_RESET = 'reset'),
														(c.prototype.resume = function(a) {
															this._logger.debug(this._logTag, 'Starting timer: ' + this._name);
															var b = {};
															(b[c.KEY_NAME] = e + '.' + this._name),
																(b[c.KEY_RESET] = a),
																this._pluginManager.command(f, i, b);
														}),
														(c.prototype.pause = function(a) {
															this._logger.debug(this._logTag, 'Stopping timer: ' + this._name);
															var b = {};
															(b[c.KEY_NAME] = e + '.' + this._name),
																(b[c.KEY_RESET] = a),
																this._pluginManager.command(f, h, b);
														}),
														(c.prototype.destroy = function() {
															if (!this._isDestroyed) {
																(this._isDestroyed = !0), this._uninstallHandlers();
																var a = {};
																(a[c.KEY_NAME] = e + '.' + this._name), this._pluginManager.command(f, j, a);
															}
														}),
														(c.prototype.setInterval = function(a) {
															var b = k + '.' + e + '.' + this._name,
																c = this._pluginManager.request(f, [b])[b];
															this.pause(!0), this._createTimer(this._name, a), c || this.resume(!0);
														}),
														(c.prototype._cmdResume = function(a) {
															var b = !1;
															null != a && a.hasOwnProperty(c.KEY_RESET) && (b = a[c.KEY_RESET]), this.resume(b);
														}),
														(c.prototype._cmdPause = function(a) {
															var b = !1;
															null != a && a.hasOwnProperty(c.KEY_RESET) && (b = a[c.KEY_RESET]), this.pause(b);
														}),
														(c.prototype._onTick = function(a, b) {
															this._channel.trigger(new d('clock:' + this._name + '.tick', b));
														}),
														(c.prototype._installHandlers = function() {
															this._channel.comply('clock:' + this._name + '.resume', this._cmdResume, this),
																this._channel.comply('clock:' + this._name + '.pause', this._cmdPause, this),
																this._pluginManager.on(f, e + '.' + this._name + '.tick', this._onTick, this);
														}),
														(c.prototype._uninstallHandlers = function() {
															this._channel.off(null, null, this), this._pluginManager.off(null, null, null, this);
														}),
														(c.prototype._createTimer = function(a, b) {
															(this._name = a), (this._interval = b);
															var d = {};
															(d[c.KEY_NAME] = e + '.' + this._name),
																(d[c.KEY_INTERVAL] = this._interval),
																this._pluginManager.command(f, g, d);
														});
													var e = 'heartbeat',
														f = 'service.clock',
														g = 'create',
														h = 'pause',
														i = 'resume',
														j = 'destroy',
														k = 'is_paused';
													b.clock.Timer = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b, d) {
														c.__super__.constructor.call(this, a, b, f, h, d);
													}
													var d = a.Event,
														e = b.clock.Timer;
													a.extend(c, e),
														(c.prototype._onCheckStatusComplete = function(a) {
															var b = a.data[l];
															if (
																(this._logger.debug(this._logTag, '#_onCheckStatusComplete(interval=' + b + ')'), b)
															) {
																if (b == this._interval)
																	return void this._logger.debug(
																		this._logTag,
																		'#_onCheckStatusComplete() > Interval value not changed.'
																	);
																b > g
																	? (this._logger.warn(
																			this._logTag,
																			'#_onCheckStatusComplete() > Interval value too large: ' + b
																	  ),
																	  this.setInterval(g))
																	: (this._logger.debug(
																			this._logTag,
																			'#_onCheckStatusComplete() > Interval changed to: ' + b
																	  ),
																	  this.setInterval(b));
															} else
																this._logger.warn(this._logTag, '#_onCheckStatusComplete() > Invalid interval value.'),
																	this.setInterval(h);
														}),
														(c.prototype._getSettings = function(a) {
															this._logger.debug(this._logTag, '#_getSettings()'), this._channel.trigger(new d(i));
														}),
														(c.prototype._installHandlers = function() {
															c.__super__._installHandlers.call(this),
																this._channel.on(j, this._getSettings, this),
																this._channel.on(k, this._onCheckStatusComplete, this),
																this._channel.reply(
																	l,
																	function() {
																		return this._interval;
																	},
																	this
																);
														});
													var f = 'check_status',
														g = 600,
														h = 60,
														i = 'clock:check_status.tick',
														j = 'clock:check_status.get_settings',
														k = 'net:check_status_complete',
														l = 'check_status_interval';
													b.clock.CheckStatusTimer = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b, d) {
														c.__super__.constructor.call(this, a, b, e, f, d), (this._doNotOverrideInterval = !1);
													}
													var d = b.clock.Timer;
													a.extend(c, d),
														(c.prototype._onCheckStatusComplete = function(a) {
															var b = a.data[g];
															if (
																(this._logger.debug(this._logTag, '#_onCheckStatusComplete(interval=' + b + ')'),
																this._doNotOverrideInterval)
															)
																this._logger.debug(
																	this._logTag,
																	'#_onCheckStatusComplete() > Interval value not changed. (doNotOverrideInterval = true)'
																);
															else if (b) {
																if (b == this._interval)
																	return void this._logger.debug(
																		this._logTag,
																		'#_onCheckStatusComplete() > Interval value not changed.'
																	);
																this._logger.debug(
																	this._logTag,
																	'#_onCheckStatusComplete() > Interval changed to: ' + b
																),
																	this.setInterval(b);
															} else
																this._logger.warn(this._logTag, '#_onCheckStatusComplete() > Invalid interval value.'),
																	this.setInterval(f);
														}),
														(c.prototype._onUpdateReportingInterval = function(a) {
															var b = a.data[g];
															if (
																((this._doNotOverrideInterval = !!a.data[h]),
																this._logger.debug(
																	this._logTag,
																	'#_onUpdateReportingInterval(interval=' +
																		b +
																		', doNotOverrideInterval=' +
																		this._doNotOverrideInterval +
																		')'
																),
																b)
															) {
																if (b == this._interval)
																	return void this._logger.debug(
																		this._logTag,
																		'#_onUpdateReportingInterval() > Interval value not changed.'
																	);
																this._logger.debug(
																	this._logTag,
																	'#_onUpdateReportingInterval() > Interval changed to: ' + b
																),
																	this.setInterval(b);
															} else
																this._logger.warn(
																	this._logTag,
																	'#_onUpdateReportingInterval() > Invalid interval value.'
																),
																	this.setInterval(f);
														}),
														(c.prototype._installHandlers = function() {
															c.__super__._installHandlers.call(this),
																this._channel.on(j, this._onCheckStatusComplete, this),
																this._channel.on(i, this._onUpdateReportingInterval, this),
																this._channel.reply(
																	g,
																	function() {
																		return this._interval;
																	},
																	this
																);
														});
													var e = 'reporting',
														f = 10,
														g = 'reporting_interval',
														h = 'do_not_override_interval',
														i = 'reporting:update_interval',
														j = 'net:check_status_complete';
													b.clock.ReportingTimer = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b, d) {
														c.__super__.constructor.call(this, a, b, e, f, d);
													}
													var d = b.clock.Timer;
													a.extend(c, d);
													var e = 'idle',
														f = 1800;
													b.clock.IdleTimer = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b, d) {
														c.__super__.constructor.call(this, a, b, e, f, d);
													}
													var d = b.clock.Timer;
													a.extend(c, d);
													var e = 'flush_filter',
														f = 0.25;
													b.clock.FlushFilterTimer = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b, c) {
														if (!a) throw new Error('Reference to the pluginManager object cannot be NULL');
														if (!b) throw new Error('Reference to the channel object cannot be NULL');
														if (!c) throw new Error('Reference to the logger object cannot be NULL');
														(this._isDestroyed = !1),
															(this._reportingTimer = new f(a, b, c)),
															(this._checkStatusTimer = new d(a, b, c)),
															(this._flushFilterTimer = new e(a, b, c)),
															(this._idleTimer = new g(a, b, c));
													}
													var d = b.clock.CheckStatusTimer,
														e = b.clock.FlushFilterTimer,
														f = b.clock.ReportingTimer,
														g = b.clock.IdleTimer;
													(c.prototype.destroy = function() {
														this._isDestroyed ||
															((this._isDestroyed = !0),
															this._reportingTimer.destroy(),
															this._checkStatusTimer.destroy(),
															this._flushFilterTimer.destroy(),
															this._idleTimer.destroy());
													}),
														(b.clock.Clock = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b) {
														(this.value = a), (this.hint = b);
													}

													function d(a) {
														(this.realm = a), (this.data = {});
													}
													(c.HINT_SHORT = 'short'),
														(d.prototype.setField = function(a, b, d) {
															this.data[a] = new c(b, d);
														}),
														(d.prototype._createAccessor = function(a, b, c) {
															var d = this;
															return function() {
																return (
																	arguments.length && ((d[a] = arguments[0]), d.setField(b, arguments[0], c)), d[a]
																);
															};
														}),
														(b.model.Dao = d),
														(b.model.DaoField = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'asset'),
															(this.adId = this._createAccessor('_adId', 'ad_id', null)),
															(this.sid = this._createAccessor('_sid', 'ad_sid', null)),
															(this.resolver = this._createAccessor('_resolver', 'resolver', null)),
															(this.podId = this._createAccessor('_podId', 'pod_id', null)),
															(this.podPosition = this._createAccessor('_podPosition', 'pod_position', null)),
															(this.podOffset = this._createAccessor('_podOffset', 'pod_offset', null)),
															(this.podName = this._createAccessor('_podName', 'pod_name', null)),
															(this.adLength = this._createAccessor('_adLength', 'ad_length', null)),
															(this.adName = this._createAccessor('_adName', 'ad_name', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.adId(a.adId()),
																this.sid(a.sid()),
																this.resolver(a.resolver()),
																this.podId(a.podId()),
																this.podPosition(a.podPosition()),
																this.podOffset(a.podOffset()),
																this.podName(a.podName()),
																this.adLength(a.adLength()),
																this.adName(a.adName());
														} else
															this.adId(''),
																this.sid(''),
																this.resolver(''),
																this.podId(''),
																this.podPosition(''),
																this.podOffset(0),
																this.podName(''),
																this.adLength(0),
																this.adName('');
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.AdDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'sc'),
															(this.reportSuiteId = this._createAccessor('_reportSuiteId', 'rsid', null)),
															(this.trackingServer = this._createAccessor('_trackingServer', 'tracking_server', null)),
															(this.ssl = this._createAccessor('_ssl', 'ssl', e.HINT_SHORT)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.reportSuiteId(a.reportSuiteId()),
																this.trackingServer(a.trackingServer()),
																this.ssl(a.ssl());
														} else this.reportSuiteId(''), this.trackingServer(''), this.ssl(0);
													}
													var d = b.model.Dao,
														e = b.model.DaoField;
													a.extend(c, d), (b.model.AdobeAnalyticsDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'stream'),
															(this.id = this._createAccessor('_id', 'chapter_id', null)),
															(this.sid = this._createAccessor('_sid', 'chapter_sid', null)),
															(this.name = this._createAccessor('_name', 'chapter_name', null)),
															(this.position = this._createAccessor('_position', 'chapter_pos', null)),
															(this.length = this._createAccessor('_length', 'chapter_length', null)),
															(this.offset = this._createAccessor('_offset', 'chapter_offset', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.id(a.id()),
																this.sid(a.sid()),
																this.name(a.name()),
																this.position(a.position()),
																this.length(a.length()),
																this.offset(a.offset());
														} else
															this.id(''),
																this.sid(''),
																this.name(''),
																this.position(0),
																this.length(0),
																this.offset(0);
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.ChapterDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'asset'),
															(this.type = this._createAccessor('_type', 'type', null)),
															(this.videoId = this._createAccessor('_videoId', 'video_id', null)),
															(this.publisher = this._createAccessor('_publisher', 'publisher', null)),
															(this.adData = this._createAccessor('_adData', 'ad_data', null)),
															(this.chapterData = this._createAccessor('_chapterData', 'chapter_data', null)),
															(this.length = this._createAccessor('_length', 'length', null)),
															(this.name = this._createAccessor('_name', 'name', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.type(a.type()),
																this.name(a.name()),
																this.videoId(a.videoId()),
																this.publisher(a.publisher()),
																this.length(a.length());
															var b = a.adData() ? new e(a.adData()) : null;
															this.adData(b);
															var d = a.chapterData() ? new f(a.chapterData()) : null;
															this.chapterData(d);
														} else
															this.type(''),
																this.name(''),
																this.videoId(''),
																this.publisher(''),
																this.length(0),
																this.adData(null),
																this.chapterData(null);
													}
													var d = b.model.Dao,
														e = b.model.AdDao,
														f = b.model.ChapterDao;
													a.extend(c, d), (c.TYPE_AD = 'ad'), (c.TYPE_MAIN_CONTENT = 'main'), (b.model.AssetDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'event'),
															(this.type = this._createAccessor('_type', 'type', null)),
															(this.duration = this._createAccessor('_duration', 'duration', null)),
															(this.playhead = this._createAccessor('_playhead', 'playhead', null)),
															(this.id = this._createAccessor('_id', 'id', null)),
															(this.source = this._createAccessor('_source', 'source', null)),
															(this.ts = this._createAccessor('_ts', 'ts', null)),
															(this.prevTs = this._createAccessor('_prevTs', 'prev_ts', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.type(a.type()),
																this.duration(a.duration()),
																this.playhead(a.playhead()),
																this.id(a.id()),
																this.source(a.source()),
																this.ts(a.ts()),
																this.prevTs(a.prevTs());
														} else
															this.type(''),
																this.duration(0),
																this.playhead(0),
																this.id(''),
																this.source(''),
																this.ts(0),
																this.prevTs(-1);
													}
													var d = b.model.Dao;
													a.extend(c, d),
														(c.EVENT_TYPE_AA_START = 'aa_start'),
														(c.EVENT_TYPE_AA_AD_START = 'aa_ad_start'),
														(c.EVENT_TYPE_START = 'start'),
														(c.EVENT_TYPE_RESUME = 'resume'),
														(c.EVENT_TYPE_CHAPTER_START = 'chapter_start'),
														(c.EVENT_TYPE_CHAPTER_COMPLETE = 'chapter_complete'),
														(c.EVENT_TYPE_CHAPTER_SKIP = 'chapter_skip'),
														(c.EVENT_TYPE_PLAY = 'play'),
														(c.EVENT_TYPE_PAUSE = 'pause'),
														(c.EVENT_TYPE_STALL = 'stall'),
														(c.EVENT_TYPE_BUFFER = 'buffer'),
														(c.EVENT_TYPE_BITRATE_CHANGE = 'bitrate_change'),
														(c.EVENT_TYPE_ERROR = 'error'),
														(c.EVENT_TYPE_COMPLETE = 'complete'),
														(c.EVENT_TYPE_SKIP = 'skip'),
														(c.EVENT_TYPE_END = 'end'),
														(b.model.EventDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'stream'),
															(this.bitrate = this._createAccessor('_bitrate', 'bitrate', null)),
															(this.fps = this._createAccessor('_fps', 'fps', null)),
															(this.droppedFrames = this._createAccessor('_droppedFrames', 'dropped_frames', null)),
															(this.startupTime = this._createAccessor('_startup_time', 'startup_time', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.bitrate(a.bitrate()),
																this.fps(a.fps()),
																this.droppedFrames(a.droppedFrames()),
																this.startupTime(a.startupTime()),
																(this.isStartupTimeOverridden = a.isStartupTimeOverridden);
														} else
															this.bitrate(0),
																this.fps(0),
																this.droppedFrames(0),
																this.startupTime(0),
																(this.isStartupTimeOverridden = !1);
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.QoSDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'sp'),
															(this.ovp = this._createAccessor('_ovp', 'ovp', null)),
															(this.sdk = this._createAccessor('_sdk', 'sdk', null)),
															(this.channel = this._createAccessor('_channel', 'channel', null)),
															(this.playerName = this._createAccessor('_playerName', 'player_name', null)),
															(this.libVersion = this._createAccessor('_libVersion', 'hb_version', null)),
															(this.apiLevel = this._createAccessor('_apiLevel', 'hb_api_lvl', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.ovp(a.ovp()),
																this.sdk(a.sdk()),
																this.channel(a.channel()),
																this.playerName(a.playerName()),
																this.libVersion(a.libVersion()),
																this.apiLevel(a.apiLevel());
														} else
															this.ovp(e),
																this.sdk(e),
																this.channel(e),
																this.playerName(''),
																this.libVersion(''),
																this.apiLevel(0);
													}
													var d = b.model.Dao;
													a.extend(c, d);
													var e = 'unknown';
													b.model.ServiceProviderDao = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'event'),
															(this.sessionId = this._createAccessor('_sessionId', 'sid', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.sessionId(a.sessionId());
														} else this.sessionId(null);
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.SessionDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'stream'),
															(this.type = this._createAccessor('_type', 'type', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.type(a.type());
														} else this.type(null);
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.StreamDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'user'),
															(this.analyticsVisitorId = this._createAccessor('_analyticsVisitorId', 'aid', null)),
															(this.marketingCloudVisitorId = this._createAccessor(
																'_marketingCloudVisitorId',
																'mid',
																null
															)),
															(this.visitorId = this._createAccessor('_visitorId', 'id', null)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.analyticsVisitorId(a.analyticsVisitorId()),
																this.marketingCloudVisitorId(a.marketingCloudVisitorId()),
																this.visitorId(a.visitorId());
														} else
															this.analyticsVisitorId(null), this.marketingCloudVisitorId(null), this.visitorId(null);
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.UserDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c() {
														if (
															(c.__super__.constructor.call(this, 'aam'),
															(this.audienceManagerBlob = this._createAccessor('_audienceManagerBlob', 'blob', null)),
															(this.audienceManagerLocationHint = this._createAccessor(
																'_audienceManagerLocationHint',
																'loc_hint',
																null
															)),
															arguments.length && arguments[0] instanceof c)
														) {
															var a = arguments[0];
															this.audienceManagerBlob(a.audienceManagerBlob()),
																this.audienceManagerLocationHint(a.audienceManagerLocationHint());
														} else this.audienceManagerBlob(null), this.audienceManagerLocationHint(null);
													}
													var d = b.model.Dao;
													a.extend(c, d), (b.model.AudienceManagerDao = c);
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b, c, i, j) {
														(this.eventData = new e()),
															this.eventData.type(b),
															this.eventData.duration(0),
															this.eventData.ts(new Date().getTime()),
															this.eventData.playhead(c),
															(this.assetData = new f(a._assetData)),
															(this.streamData = new g(a._streamData)),
															(this.qosData = new h(a._qosData)),
															(this.cuserData = d.clone(a._cuserData)),
															(this.meta = i),
															(this.callback = j),
															(this.filterReport = !0);
													}
													var d = a.ObjectUtils,
														e = b.model.EventDao,
														f = b.model.AssetDao,
														g = b.model.StreamDao,
														h = b.model.QoSDao;
													b.model.TrackItem = c;
												})(a.ADB.va.utils, b),
												(function(a, b) {
													'use strict';

													function c(a, b, c, i, j, k) {
														(this.adobeAnalyticsData = a),
															(this.userData = b),
															(this.aamData = c),
															(this.serviceProviderData = i),
															(this.sessionData = j),
															(this.eventData = new e(k.eventData)),
															(this.assetData = new f(k.assetData)),
															(this.streamData = new g(k.streamData)),
															(this.qosData = new h(k.qosData)),
															(this.cuserData = d.clone(k.cuserData)),
															(this.meta = d.clone(k.meta)),
															(this.callback = k.callback),
															(this.filterReport = k.filterReport);
													}
													var d = a.ObjectUtils,
														e = b.model.EventDao,
														f = b.model.AssetDao,
														g = b.model.StreamDao,
														h = b.model.QoSDao;
													b.model.CUserDao;
													b.model.Report = c;
												})(a.ADB.va.utils, b),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.serializeReport = function(a) {}),
														(b.prototype.serializeDao = function(a) {}),
														(b.prototype.serializeMap = function(a) {}),
														(b.prototype.serializeNumber = function(a, b, c, d) {}),
														(b.prototype.serializeString = function(a, b, c, d) {}),
														(a.model.ISerializer = b);
												})(b),
												(function(a, b) {
													'use strict';

													function c(a) {
														if (!a) throw new Error('Reference to the logger object cannot be NULL');
														this._logger = a;
													}
													var d = b.model.Dao,
														e = b.model.DaoField,
														f = b.model.ISerializer;
													a.extend(c, f),
														(c.prototype.serializeReport = function(a) {
															var b = [];
															return (
																b.push(this.serializeDao(a.adobeAnalyticsData)),
																b.push(this.serializeDao(a.userData)),
																b.push(this.serializeDao(a.aamData)),
																b.push(this.serializeMap(a.cuserData, 'cuser')),
																b.push(this.serializeDao(a.serviceProviderData)),
																b.push(this.serializeDao(a.sessionData)),
																b.push(this.serializeDao(a.eventData)),
																b.push(this.serializeDao(a.assetData)),
																b.push(this.serializeDao(a.streamData)),
																b.push(this.serializeDao(a.qosData)),
																b.push(this.serializeMap(a.meta, 'meta')),
																{
																	serializedOutput: b
																		.filter(function(a) {
																			return !!a;
																		})
																		.join('&'),
																	callback: a.callback
																}
															);
														}),
														(c.prototype.serializeDao = function(a) {
															return this._processDao(a)
																.filter(function(a) {
																	return !!a;
																})
																.join('&');
														}),
														(c.prototype.serializeMap = function(a, b) {
															var c = [],
																d = b || 'meta';
															for (var e in a)
																a.hasOwnProperty(e) &&
																	a[e] &&
																	c.push('s:' + d + ':' + e + '=' + window.encodeURIComponent(a[e]));
															return c.join('&');
														}),
														(c.prototype.serializeNumber = function(a, b, c, d) {
															var f = h;
															return null == b || isNaN(b)
																? null
																: (d === e.HINT_SHORT && (f = i), f + ':' + c + ':' + a + '=' + Math.floor(b));
														}),
														(c.prototype.serializeString = function(a, b, c, d) {
															return b ? j + ':' + c + ':' + a + '=' + window.encodeURIComponent(b) : null;
														}),
														(c.prototype._processDao = function(a) {
															var b = [];
															for (var c in a.data)
																if (a.data.hasOwnProperty(c)) {
																	var e = a.data[c],
																		f = e.value,
																		h = e.hint,
																		i = null,
																		j = a.realm;
																	if (null == f) continue;
																	'number' == typeof f
																		? (i = this.serializeNumber(c, f, j, h))
																		: 'string' == typeof f
																		? (i = this.serializeString(c, f, j, h))
																		: f instanceof d
																		? (i = this.serializeDao(f))
																		: this._logger.warn(
																				g,
																				'#_processDao() > Unable to serialize DAO. Field: ' + c + '. Value: ' + f + '.'
																		  ),
																		i && b.push(i);
																}
															return b;
														});
													var g = 'ah::QuerystringSerializer',
														h = 'l',
														i = 'h',
														j = 's';
													b.model.QuerystringSerializer = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b) {
														if (!a) throw new Error('Reference to the data object cannot be NULL');
														if (((this._data = a), !b))
															throw new Error('Reference to the logger object cannot be NULL');
														this._logger = b;
													}
													c.prototype.parse = function() {
														var a, b, c, i, j;
														if (window.DOMParser) {
															j = new window.DOMParser().parseFromString(this._data, 'text/xml');
														} else
															(j = new window.ActiveXObject('Microsoft.XMLDOM')), (j.async = !1), j.loadXML(this._data);
														var k;
														(k = parseInt(j.getElementsByTagName('trackingInterval')[0].childNodes[0].nodeValue, 10)),
															k && (a = k),
															(k = parseInt(
																j.getElementsByTagName('setupCheckInterval')[0].childNodes[0].nodeValue,
																10
															)),
															k && (b = k),
															(k = parseInt(
																j.getElementsByTagName('trackExternalErrors')[0].childNodes[0].nodeValue,
																10
															)),
															k && (c = 1 == k),
															j.getElementsByTagName('nielsenEnabled')[0]
																? ((k = parseInt(
																		j.getElementsByTagName('nielsenEnabled')[0].childNodes[0].nodeValue,
																		10
																  )),
																  (i = 1 == k))
																: (i = !0);
														var l = {};
														return (
															(l[e] = a),
															(l[f] = b),
															(l[g] = c),
															(l[h] = i),
															this._logger.debug(d, '#parse() > Obtained configuration settings.'),
															l
														);
													};
													var d = 'ah::SettingsParser',
														e = 'reporting_interval',
														f = 'check_status_interval',
														g = 'track_external_errors',
														h = 'nielsen_enabled';
													b.network.SettingsParser = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b) {
														if (
															((this._trackingServer = null),
															(this._checkStatusServer = null),
															(this._publisher = null),
															(this._isConfigured = !1),
															(this._isDestroyed = !1),
															(this._quietMode = !1),
															(this._visitorOptedOut = !1),
															(this._prevReportSent = null),
															!a)
														)
															throw new Error('Reference to the channel object cannot be NULL');
														if (((this._channel = a), !b))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = b), (this._serializer = new i(b)), this._installEventListeners();
													}
													var d = a.Event,
														e = a.URLRequestMethod,
														f = a.URLRequest,
														g = a.URLLoader,
														h = b.network.SettingsParser,
														i = b.model.QuerystringSerializer;
													(c.prototype.destroy = function() {
														this._isDestroyed ||
															((this._isDestroyed = !0),
															this._logger.debug(j, '#destroy()'),
															this._uninstallEventListeners());
													}),
														(c.prototype._onApiConfig = function(a) {
															var b = a.data;
															this._logger.debug(
																j,
																'#_onApiConfig(sb_server=' +
																	b[k] +
																	', check_status_server=' +
																	b[l] +
																	', publisher=' +
																	b[m] +
																	', quiet_mode=' +
																	b[n] +
																	', ssl=' +
																	b[o] +
																	')'
															),
																(this._trackingServer = this._updateRequestProtocol(b[k], b[o])),
																(this._checkStatusServer = this._updateRequestProtocol(b[l], b[o])),
																(this._publisher = b[m]),
																(this._quietMode = b[n]),
																(this._isConfigured = !0);
														}),
														(c.prototype._onUpdateVisitorOptOut = function(a) {
															var b = a.data;
															this._logger.debug(j, '#_onUpdateVisitorOptOut(visitor_opt_out=' + b[q] + ')'),
																(this._visitorOptedOut = b[q]);
														}),
														(c.prototype._onFilterReportAvailable = function(a) {
															var b = a.data;
															if (!this._isConfigured)
																return void this._logger.warn(
																	j,
																	'#_onFilterReportAvailable() > Unable to send request: not configured.'
																);
															var c = b[p],
																h = this._serializer.serializeReport(c),
																i = this._trackingServer + '/?' + h.serializedOutput;
															if (
																this._prevReportSent &&
																this._prevReportSent.eventData &&
																c.eventData &&
																this._prevReportSent.eventData.playhead == c.eventData.playhead &&
																this._prevReportSent.eventData.ts == c.eventData.ts &&
																this._prevReportSent.eventData.prevTs == c.eventData.prevTs &&
																this._prevReportSent.eventData.type == c.eventData.type
															)
																return void this._logger.debug(
																	j,
																	'#_onFilterReportAvailable() > Duplicate heartbeat report not sent for URL:\n' + i
																);
															this._prevReportSent = c;
															var k = new f(i, e.GET);
															this._logger.debug(j, '#_onFilterReportAvailable() > ' + k.url);
															var l = this,
																m = function(a) {
																	o.close(), h.callback && h.callback.call(null);
																},
																n = function(a) {
																	o.close(),
																		l._logger.warn(j, '#_onFilterReportAvailable() > Failed to send heartbeat report.'),
																		h.callback && h.callback.call(null);
																};
															if (!this._quietMode && !this._visitorOptedOut) {
																var o = new g();
																o.addEventListener(d.SUCCESS, m, this), o.addEventListener(d.ERROR, n, this), o.load(k);
															}
														}),
														(c.prototype._onClockCheckStatusTick = function(a) {
															function b(a) {
																if (a.data) {
																	var b = new h(a.data.response, i._logger),
																		c = b.parse();
																	c
																		? i._channel.trigger(new d(v, c))
																		: i._logger.warn(
																				j,
																				'#_onClockCheckStatusTick() > Failed to parse the config. settings.'
																		  );
																}
																n.close();
															}

															function c(a) {
																i._logger.warn(
																	j,
																	'#_onClockCheckStatusTick() > Failed to obtain the config. settings.'
																),
																	n.close();
															}
															if (!this._isConfigured)
																return void this._logger.warn(
																	j,
																	'#_onClockCheckStatusTick() > Unable to send request: not configured.'
																);
															if (!this._publisher)
																return void this._logger.warn(j, '#_onClockCheckStatusTick() > Publisher is NULL.');
															var i = this,
																k = this._publisher.replace(/[^a-zA-Z0-9]+/, '-').toLocaleLowerCase(),
																l = this._checkStatusServer + k + '.xml?r=' + new Date().getTime(),
																m = new f(l, e.GET),
																n = new g();
															n.addEventListener(d.SUCCESS, b, this),
																n.addEventListener(d.ERROR, c, this),
																this._logger.debug(j, '#_onClockCheckStatusTick() > Get new settings from: ' + l),
																n.load(m);
														}),
														(c.prototype._updateRequestProtocol = function(a, b) {
															var c = a;
															return (
																0 === c.indexOf('http://')
																	? (c = c.slice(7))
																	: 0 === c.indexOf('https://') && (c = c.slice(8)),
																b ? 'https://' + c : 'http://' + c
															);
														}),
														(c.prototype._installEventListeners = function() {
															this._channel.on(r, this._onApiConfig, this),
																this._channel.on(s, this._onUpdateVisitorOptOut, this),
																this._channel.on(t, this._onFilterReportAvailable, this),
																this._channel.on(u, this._onClockCheckStatusTick, this);
														}),
														(c.prototype._uninstallEventListeners = function() {
															this._channel.off(null, null, this);
														});
													var j = 'ah::Network',
														k = 'tracking_server',
														l = 'check_status_server',
														m = 'publisher',
														n = 'quiet_mode',
														o = 'ssl',
														p = 'report',
														q = 'visitor_opt_out',
														r = 'api:config',
														s = 'api:update_visitor_optout',
														t = 'filter:data_available',
														u = 'clock:check_status.tick',
														v = 'net:check_status_complete';
													b.network.Network = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b) {
														if (!a) throw new Error('Reference to the channel object cannot be NULL');
														if (((this._channel = a), !b))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = b),
															(this._isDestroyed = !1),
															(this._isBufferingInProgress = !1),
															(this._reportBuffer = {}),
															(this._tsHistory = {}),
															(this._workQueue = new i()),
															this._installEventListeners();
													}

													function d(a) {
														var b = [];
														return (
															a &&
																a.forEach(function(a) {
																	a.eventData.type() == k.EVENT_TYPE_PAUSE || a.eventData.type() == k.EVENT_TYPE_STALL
																		? (!a.filterReport || a.eventData.duration() > u) && b.push(a)
																		: b.push(a);
																}),
															b
														);
													}

													function e(a) {
														var b = -1,
															c = -1,
															d = [];
														return (
															a.forEach(function(a) {
																a.eventData.type() == k.EVENT_TYPE_START
																	? a.assetData.type() == l.TYPE_MAIN_CONTENT
																		? -1 == b
																			? (b = d.push(a) - 1)
																			: (a.eventData.prevTs(-1), (d[b] = a))
																		: -1 == c
																		? (c = d.push(a) - 1)
																		: (a.eventData.prevTs(-1), (d[c] = a))
																	: d.push(a);
															}),
															d
														);
													}

													function f(a) {
														var b = [];
														return (
															a.forEach(function(c) {
																if (c.eventData.type() == k.EVENT_TYPE_PLAY) {
																	if (c.eventData.duration() > t) b.push(c);
																	else if (0 == c.eventData.duration() && c.assetData.type() == l.TYPE_MAIN_CONTENT) {
																		var d = g(a);
																		d.indexOf(c) == d.length - 1 && b.push(c);
																	}
																} else b.push(c);
															}),
															b
														);
													}

													function g(a) {
														var b = [];
														return (
															a.forEach(function(a) {
																(a.eventData.type() != k.EVENT_TYPE_PLAY &&
																	a.eventData.type() != k.EVENT_TYPE_BUFFER &&
																	a.eventData.type() != k.EVENT_TYPE_START) ||
																	b.push(a);
															}),
															b
														);
													}
													var h = a.radio.Command,
														i = a.radio.CommandQueue,
														j = a.Event,
														k = b.model.EventDao,
														l = b.model.AssetDao;
													(c.prototype.destroy = function() {
														this._isDestroyed ||
															((this._isDestroyed = !0),
															this._logger.debug(w, '#destroy()'),
															this._uninstallEventListeners(),
															this.clear());
													}),
														(c.prototype.clear = function() {
															this._logger.debug(w, '#clear()'),
																this._workQueue.cancelAllCommands(),
																(this._reportBuffer = {}),
																(this._tsHistory = {}),
																(this._isBufferingInProgress = !1);
														}),
														(c.prototype.flush = function() {
															this._workQueue.addCommand(new h(this._flushBufferReport, this));
														}),
														(c.prototype._bufferReport = function(a) {
															if (!this._isDestroyed) {
																var b = a[q];
																if (b) {
																	var c = b.sessionData.sessionId();
																	(this._reportBuffer[c] = this._reportBuffer[c] || []), this._reportBuffer[c].push(b);
																}
																if (!this._isBufferingInProgress) {
																	this._isBufferingInProgress = !0;
																	var d = {};
																	(d[p] = !0), (d[r] = 1), this._channel.command(s, d);
																}
															}
														}),
														(c.prototype._flushBufferReport = function() {
															function a(a) {
																if (a)
																	for (var c = 0; c < a.length; c++) {
																		var d = a[c],
																			e = d.sessionData.sessionId();
																		b._tsHistory[e] = b._tsHistory[e] || {};
																		var f =
																			d.eventData.type() +
																			'.' +
																			(d.assetData.type() == l.TYPE_AD
																				? d.assetData.adData().adId()
																				: d.assetData.videoId());
																		b._tsHistory[e].hasOwnProperty(f) && d.eventData.prevTs(b._tsHistory[e][f]),
																			(b._tsHistory[e][f] = d.eventData.ts());
																	}
															}
															if (!this._isDestroyed) {
																var b = this;
																for (var c in this._reportBuffer)
																	if (this._reportBuffer.hasOwnProperty(c)) {
																		var g = f(e(d(this._reportBuffer[c])));
																		a(g);
																		for (var h = 0; h < g.length; h++) {
																			var i = g[h],
																				k = {};
																			(k[q] = i), this._channel.trigger(new j(n, k));
																		}
																	}
																this._reportBuffer = {};
																var m = this._channel.request(v),
																	o = this._tsHistory[m] || {};
																(this._tsHistory = {}), (this._tsHistory[m] = o), (this._isBufferingInProgress = !1);
															}
														}),
														(c.prototype._onContextReportAvailable = function(a) {
															var b = a.data;
															this._workQueue.addCommand(new h(this._bufferReport, this, [b]));
														}),
														(c.prototype._onClockFlushFilterTick = function(a) {
															this.flush();
														}),
														(c.prototype._installEventListeners = function() {
															this._channel.on(m, this._onContextReportAvailable, this),
																this._channel.on(o, this._onClockFlushFilterTick, this);
														}),
														(c.prototype._uninstallEventListeners = function() {
															this._channel.off(null, null, this);
														});
													var m = 'context:report_available',
														n = 'filter:data_available',
														o = 'clock:flush_filter.tick',
														p = 'reset',
														q = 'report',
														r = 'repeat_count',
														s = 'clock:flush_filter.resume',
														t = 250,
														u = 250,
														v = 'session_id',
														w = 'ah::ReportFilter';
													b.filter.ReportFilter = c;
												})(a.ADB.core, b),
												(function(a, b) {
													'use strict';

													function c(a, b) {
														this._onFail = {
															fn: a,
															ctx: b
														};
													}
													var d = a.ErrorInfo;
													(c.prototype.validateFields = function(a, b) {
														if (!a) return this._fail('Data cannot be null');
														if (b)
															for (var c = 0; c < b.length; c++) {
																var d = b[c];
																switch (d) {
																	case 'videoId':
																		if (!a.hasOwnProperty('videoId'))
																			return this._fail('The ID for the main video must be specified.');
																		if ('string' != typeof a.videoId)
																			return this._fail('The ID for the main video must be a String.');
																		if ('' === a.videoId)
																			return this._fail('The ID for the main video cannot be an empty string.');
																		break;
																	case 'streamType':
																		if (!a.hasOwnProperty('streamType'))
																			return this._fail('The stream type for the main video must be specified.');
																		if ('string' != typeof a.streamType)
																			return this._fail('The stream type for the main video must be a String.');
																		if ('' === a.streamType)
																			return this._fail(
																				'The stream type for the main video cannot be an empty string.'
																			);
																		break;
																	case 'videoLength':
																		if (!a.hasOwnProperty('videoLength'))
																			return this._fail('The length of the main video must be specified.');
																		if ('number' != typeof a.videoLength)
																			return this._fail('The length of the main video must be a Number.');
																		if (isNaN(a.videoLength))
																			return this._fail('The length of the main video cannot be NaN.');
																		break;
																	case 'playhead':
																		if (!a.hasOwnProperty('playhead'))
																			return this._fail('The playhead for the main video must be specified.');
																		if ('number' != typeof a.playhead)
																			return this._fail('The playhead for the main video must be a Number.');
																		if (isNaN(a.playhead))
																			return this._fail('The playhead for the main video cannot be NaN.');
																		break;
																	case 'playerName':
																		if (!a.hasOwnProperty('playerName'))
																			return this._fail('The player name for the main video must be specified.');
																		if ('string' != typeof a.playerName)
																			return this._fail('The player name for the main video must be a String.');
																		if ('' === a.playerName)
																			return this._fail(
																				'The player name for the main video cannot be an empty string.'
																			);
																		break;
																	case 'rsid':
																		if (!a.hasOwnProperty('rsid'))
																			return this._fail(
																				'account (rsid) is required and has to be set in the AppMeasurement instance.'
																			);
																		if ('string' != typeof a.rsid)
																			return this._fail(
																				'account (rsid) of the AppMeasurement instance must be a String.'
																			);
																		if ('' === a.rsid)
																			return this._fail(
																				'account (rsid) of the AppMeasurement instance  cannot be an empty string.'
																			);
																		break;
																	case 'trackingServer':
																		if (!a.hasOwnProperty('trackingServer'))
																			return this._fail(
																				'trackingServer is required and has to be set in the AppMeasurement instance.'
																			);
																		if ('string' != typeof a.trackingServer)
																			return this._fail(
																				'trackingServer of the AppMeasurement instance must be a String.'
																			);
																		if ('' === a.trackingServer)
																			return this._fail(
																				'trackingServer of the AppMeasurement instance cannot be an empty string.'
																			);
																		break;
																	case 'podPlayerName':
																		if (!a.hasOwnProperty('podPlayerName'))
																			return this._fail('The player name for the ad-break must be specified.');
																		if ('string' != typeof a.podPlayerName)
																			return this._fail('The player name for the ad-break must be a String.');
																		if ('' === a.podPlayerName)
																			return this._fail('The player name for the ad-break cannot be an empty string.');
																		break;
																	case 'podPosition':
																		if (!a.hasOwnProperty('podPosition'))
																			return this._fail('Position (index) of the ad-break must be specified.');
																		if ('number' != typeof a.podPosition)
																			return this._fail('Position (index) of the ad-break must be a Number.');
																		if (isNaN(a.podPosition))
																			return this._fail('Position (index) of the ad-break cannot be NaN.');
																		break;
																	case 'adId':
																		if (!a.hasOwnProperty('adId')) return this._fail('The ad ID must be specified.');
																		if ('string' != typeof a.adId) return this._fail('The ad ID must be a String.');
																		if ('' === a.adId) return this._fail('The ad ID cannot be an empty string.');
																		break;
																	case 'adPosition':
																		if (!a.hasOwnProperty('adPosition'))
																			return this._fail('Position (index) of the ad must be specified.');
																		if ('number' != typeof a.adPosition)
																			return this._fail('Position (index) of the ad must be a Number.');
																		if (isNaN(a.adPosition))
																			return this._fail('Position (index) of the ad cannot be NaN.');
																		break;
																	case 'chapterPosition':
																		if (!a.hasOwnProperty('chapterPosition'))
																			return this._fail('Position (index) of the chapter must be specified.');
																		if ('number' != typeof a.chapterPosition)
																			return this._fail('Position (index) of the chapter must be a Number.');
																		if (isNaN(a.chapterPosition))
																			return this._fail('Position (index) of the chapter cannot be NaN.');
																		break;
																	case 'chapterOffset':
																		if (!a.hasOwnProperty('chapterOffset'))
																			return this._fail('Chapter start-time (offset) must be specified.');
																		if ('number' != typeof a.chapterOffset)
																			return this._fail('Chapter start-time (offset) must be a Number.');
																		if (isNaN(a.chapterOffset))
																			return this._fail('Chapter start-time (offset) cannot be NaN.');
																		break;
																	case 'chapterLength':
																		if (!a.hasOwnProperty('chapterLength'))
																			return this._fail('The length of the chapter must be specified.');
																		if ('number' != typeof a.chapterLength)
																			return this._fail('The length of the chapter must be a Number.');
																		if (isNaN(a.chapterLength))
																			return this._fail('The length of the chapter cannot be NaN.');
																		break;
																	default:
																		return this._fail('Unable to validate unknown parameter: ' + d);
																}
															}
														return !0;
													}),
														(c.prototype._fail = function(a) {
															var b = new d('Invalid input data', a);
															return this._onFail.fn && this._onFail.fn.call(this._onFail.ctx, b), !1;
														}),
														(b.context.InputDataValidator = c);
												})(a.ADB.va, b),
												(function(a, b) {
													'use strict';

													function c(a, b) {
														if (!b) throw new Error('Reference to the logger object cannot be NULL');
														if (((this._logger = b), !a))
															throw new Error('Reference to the context object cannot be NULL');
														this._context = a;
													}
													var d = b.model.Report;
													c.prototype.createReportForItem = function(a) {
														return (
															this._logger.debug(e, 'Creating report for item: ' + a.eventData.type()),
															new d(
																this._context._adobeAnalyticsData,
																this._context._userData,
																this._context._aamData,
																this._context._serviceProviderData,
																this._context._sessionData,
																a
															)
														);
													};
													var e = 'ah::ReportFactory';
													b.context.ReportFactory = c;
												})(a.ADB.core, b),
												(function(a, b, c, d) {
													'use strict';

													function e(a, b) {
														if (!a) throw new Error('Reference to the channel object cannot be NULL');
														if (((this._channel = a), !b))
															throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = b),
															(this._lastInBandItem = null),
															(this._autoComputedStartupTime = 0),
															(this._reportingInterval = ma),
															(this._assetData = null),
															(this._streamData = null),
															(this._qosData = null),
															(this._sessionData = null),
															(this._cuserData = null),
															(this._adobeAnalyticsData = new j()),
															(this._serviceProviderData = new k()),
															(this._userData = new l()),
															(this._aamData = new m()),
															(this._isTrackingSessionActive = !1),
															(this._isVideoComplete = !1),
															(this._isDestroyed = !1),
															(this._doNotOverrideEventDuration = !1),
															(this._reportFactory = new u(this, this._logger)),
															(this._inputDataValidator = new v(function(a) {
																this._logger.error(w, a.getMessage() + ' | ' + a.getDetails()),
																	this._channel.trigger(new h(y, a));
															}, this)),
															(this._trackExternalErrors = !0),
															this._installEventListeners();
													}
													var f = c.md5,
														g = c.ObjectUtils,
														h = a.Event,
														i = d.model.SessionDao,
														j = d.model.AdobeAnalyticsDao,
														k = d.model.ServiceProviderDao,
														l = d.model.UserDao,
														m = d.model.AudienceManagerDao,
														n = d.model.EventDao,
														o = d.model.AssetDao,
														p = d.model.StreamDao,
														q = d.model.QoSDao,
														r = d.model.AdDao,
														s = d.model.ChapterDao,
														t = d.model.TrackItem,
														u = d.context.ReportFactory,
														v = d.context.InputDataValidator;
													(e.prototype.destroy = function() {
														this._isDestroyed ||
															((this._isDestroyed = !0),
															this._logger.debug(w, '#destroy()'),
															this._uninstallEventListeners());
													}),
														(e.prototype._onApiAnalyticsStart = function(a) {
															this._logger.debug(w, '#_onApiAnalyticsStart()');
															var b = a.data;
															if (
																this._checkCall('_onApiAnalyticsStart') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																this._userData.visitorId(b.vid),
																	this._userData.analyticsVisitorId(b.aid),
																	this._userData.marketingCloudVisitorId(b.mid),
																	this._aamData.audienceManagerBlob(b.blob),
																	this._aamData.audienceManagerLocationHint(b.loc_hint),
																	b.customerIDs && (this._cuserData = b.customerIDs),
																	this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_AA_START, b.playhead, null, b._eventData[E]);
																c.assetData.adData(null),
																	c.assetData.type(o.TYPE_MAIN_CONTENT),
																	(this._cuserData = null),
																	this._sendHit(c);
															}
														}),
														(e.prototype._onApiAnalyticsAdStart = function(a) {
															this._logger.debug(w, '#_onApiAnalyticsAdStart()');
															var b = a.data;
															if (
																this._checkCall('_onApiAnalyticsAdStart') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_AA_AD_START, b.playhead, null, b._eventData[E]);
																this._sendHit(c);
															}
														}),
														(e.prototype._onApiVideoLoad = function(a) {
															var b = a.data;
															this._logger.debug(
																w,
																'#_onApiVideoLoad(rsid=' + b.rsid + ', aa_trackingServer=' + b.trackingServer + ')'
															),
																this._resetInternalState(),
																this._inputDataValidator.validateFields(b, ['rsid', 'trackingServer']) &&
																	(this._sessionData.sessionId(this._generateSessionId()),
																	(this._isTrackingSessionActive = !0));
														}),
														(e.prototype._onApiVideoUnload = function(a) {
															if ((this._logger.debug(w, '#_onApiVideoUnload()'), !this._isTrackingSessionActive))
																return void this._logger.debug(w, '#_onApiVideoUnload() > No active tracking session.');
															this._isTrackingSessionActive = !1;
														}),
														(e.prototype._onApiVideoStart = function(a) {
															var b = a.data;
															if (
																(this._logger.debug(
																	w,
																	'#_onApiVideoStart(id=' +
																		b.videoId +
																		', name=' +
																		b.videoName +
																		', length=' +
																		b.videoLength +
																		', type=' +
																		b.streamType +
																		', playerName=' +
																		b.playerName +
																		')'
																),
																this._checkCall('_onApiVideoStart') &&
																	this._inputDataValidator.validateFields(b, [
																		'videoId',
																		'streamType',
																		'videoLength',
																		'playhead',
																		'playerName'
																	]))
															) {
																(this._lastInBandItem = null),
																	this._adobeAnalyticsData.reportSuiteId(b.rsid),
																	this._adobeAnalyticsData.trackingServer(b.trackingServer),
																	this._adobeAnalyticsData.ssl(Number(b.useSsl)),
																	this._serviceProviderData.ovp(b.ovp),
																	this._serviceProviderData.sdk(b.sdk),
																	this._serviceProviderData.channel(b.channel),
																	this._serviceProviderData.libVersion(b.version),
																	this._serviceProviderData.apiLevel(b.apiLvl),
																	this._serviceProviderData.playerName(b.playerName),
																	this._assetData.adData(null),
																	this._assetData.chapterData(null),
																	this._assetData.videoId(b.videoId),
																	this._assetData.length(b.videoLength),
																	this._assetData.type(o.TYPE_MAIN_CONTENT),
																	this._assetData.publisher(b.publisher),
																	this._assetData.name(b.videoName),
																	this._streamData.type(b.streamType),
																	this._updateQoSInfo(b);
																var c = b.metaNielsen ? g.merge(b.metaVideo, b.metaNielsen) : b.metaVideo,
																	d = new t(this, n.EVENT_TYPE_START, b.playhead, c, b._eventData[E]);
																this._sendHit(d);
															}
														}),
														(e.prototype._onApiVideoResume = function(a) {
															var b = a.data;
															if (
																(this._logger.debug(
																	w,
																	'#_onApiVideoResume(id=' +
																		b.videoId +
																		', name=' +
																		b.videoName +
																		', length=' +
																		b.videoLength +
																		', type=' +
																		b.streamType +
																		', playerName=' +
																		b.playerName +
																		')'
																),
																this._checkCall('_onApiVideoResume') &&
																	this._inputDataValidator.validateFields(b, [
																		'videoId',
																		'streamType',
																		'videoLength',
																		'playhead',
																		'playerName'
																	]))
															) {
																this._assetData.videoId(b.videoId),
																	this._assetData.length(b.videoLength),
																	this._assetData.type(o.TYPE_MAIN_CONTENT),
																	this._assetData.name(b.videoName),
																	this._streamData.type(b.streamType);
																var c = new t(this, n.EVENT_TYPE_RESUME, b.playhead, null, b._eventData[E]);
																this._sendHit(c);
															}
														}),
														(e.prototype._onApiVideoSessionEnd = function(a) {
															this._logger.debug(w, '#_onApiVideoSessionEnd()');
															var b = a.data;
															if (
																this._checkCall('_onApiVideoSessionEnd') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																var c = new t(this, n.EVENT_TYPE_END, b.playhead, null, b._eventData[E]);
																c.assetData.adData(null), c.assetData.type(o.TYPE_MAIN_CONTENT), this._sendHit(c);
															}
														}),
														(e.prototype._onApiVideoComplete = function(a) {
															this._logger.debug(w, '#_onApiVideoComplete()');
															var b = a.data;
															if (this._checkCall('_onApiVideoComplete')) {
																var c = new t(
																	this,
																	n.EVENT_TYPE_COMPLETE,
																	this._assetData.length(),
																	null,
																	b._eventData[E]
																);
																this._sendHit(c), (this._isVideoComplete = !0);
															}
														}),
														(e.prototype._onApiVideoSkip = function(a) {
															this._logger.debug(w, '#_onApiVideoSkip()');
															var b = a.data;
															if (this._checkCall('_onApiVideoSkip')) {
																var c = new t(this, n.EVENT_TYPE_SKIP, b.playhead, null, b._eventData[E]);
																this._sendHit(c), (this._isVideoComplete = !0);
															}
														}),
														(e.prototype._onApiPlay = function(a) {
															this._logger.debug(w, '#_onApiPlay()');
															var b = a.data;
															if (
																this._checkCall('_onApiPlay') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_PLAY, b.playhead, null, b._eventData[E]);
																this._sendHit(c);
															}
														}),
														(e.prototype._onApiPause = function(a) {
															this._logger.debug(w, '#_onApiPause()');
															var b = a.data;
															if (
																this._checkCall('_onApiPause') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																this._updateQoSInfo(b);
																var c = b.playheadStalled ? n.EVENT_TYPE_STALL : n.EVENT_TYPE_PAUSE,
																	d = new t(this, c, b.playhead, null, b._eventData[E]);
																b._eventData.hasOwnProperty(F) && (d.filterReport = b._eventData[F]), this._sendHit(d);
															}
														}),
														(e.prototype._onApiBufferStart = function(a) {
															this._logger.debug(w, '#_onApiBufferStart()');
															var b = a.data;
															if (
																this._checkCall('_onApiBufferStart') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_BUFFER, b.playhead, null, b._eventData[E]);
																this._sendHit(c);
															}
														}),
														(e.prototype._onApiSeekStart = function(a) {
															this._logger.debug(w, '#_onApiSeekStart()');
														}),
														(e.prototype._onApiSeekComplete = function(a) {
															this._logger.debug(w, '#_onApiSeekComplete()');
															var b = a.data;
															if (
																this._checkCall('_onApiSeekComplete') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																var c = this._assetData.adData(),
																	d = this._assetData.chapterData();
																if (b.isInAd) {
																	if (
																		!this._inputDataValidator.validateFields(b, [
																			'adId',
																			'adPosition',
																			'podPosition',
																			'podPlayerName'
																		])
																	)
																		return;
																	var e = f(this._assetData.videoId()) + '_' + b.podPosition;
																	if (!c || c.podId() != e || parseInt(c.podPosition(), 10) != b.adPosition) {
																		var g = new r();
																		g.adId(b.adId),
																			g.adName(b.adName),
																			g.adLength(b.adLength),
																			g.podId(e),
																			g.resolver(b.podPlayerName),
																			g.podPosition(b.adPosition + ''),
																			g.podName(b.podName),
																			g.podOffset(b.podSecond),
																			g.sid(this._generateSessionId()),
																			this._assetData.adData(g);
																	}
																	this._assetData.type(o.TYPE_AD);
																} else this._assetData.adData(null), this._assetData.type(o.TYPE_MAIN_CONTENT);
																if (b.isInChapter) {
																	if (
																		!this._inputDataValidator.validateFields(b, [
																			'chapterPosition',
																			'chapterLength',
																			'chapterOffset'
																		])
																	)
																		return;
																	if (!d || b.chapterPosition != d.position()) {
																		var h = new s();
																		h.id(f(this._assetData.videoId()) + '_' + b.chapterPosition),
																			h.name(b.chapterName),
																			h.length(b.chapterLength),
																			h.position(b.chapterPosition),
																			h.offset(b.chapterOffset),
																			h.sid(this._generateSessionId()),
																			this._assetData.chapterData(h);
																	}
																} else this._assetData.chapterData(null);
															}
														}),
														(e.prototype._onApiAdStart = function(a) {
															var b = a.data;
															if (
																(this._logger.debug(
																	w,
																	'#_onApiAdStart(id=' +
																		b.adId +
																		', player_name=' +
																		b.podPlayerName +
																		', parent_name=' +
																		this._assetData.videoId() +
																		', pod_pos=' +
																		b.adPosition +
																		')'
																),
																this._checkCall('_onApiAdStart') &&
																	this._inputDataValidator.validateFields(b, [
																		'playhead',
																		'podPosition',
																		'podPlayerName',
																		'adId',
																		'adPosition'
																	]))
															) {
																var c = new r();
																c.adId(b.adId),
																	c.adName(b.adName),
																	c.adLength(b.adLength),
																	c.resolver(b.podPlayerName),
																	c.podId(f(this._assetData.videoId()) + '_' + b.podPosition),
																	c.podPosition(b.adPosition + ''),
																	c.podName(b.podName),
																	c.podOffset(b.podSecond),
																	c.sid(this._generateSessionId()),
																	this._assetData.adData(c),
																	this._assetData.type(o.TYPE_AD),
																	this._updateQoSInfo(b);
																var d = g.merge(b.metaVideo, b.metaAd);
																d = b.metaNielsen ? g.merge(d, b.metaNielsen) : d;
																var e = new t(this, n.EVENT_TYPE_START, b.playhead, d, b._eventData[E]);
																this._sendHit(e);
																if (!!b.adGranularTracking) {
																	var h = b.adTrackingInterval ? b.adTrackingInterval : this._reportingInterval;
																	this._updateReportingInterval(h, !0);
																}
															}
														}),
														(e.prototype._onApiAdComplete = function(a) {
															this._logger.debug(w, '#_onApiAdComplete()');
															var b = a.data;
															if (
																this._checkCall('_onApiAdComplete') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																if (this._assetData.type() != o.TYPE_AD)
																	return void this._logger.warn(
																		w,
																		'#_onApiAdComplete() > Ignoring the ad complete event, because we are no longer in an ad.'
																	);
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_COMPLETE, b.playhead, null, b._eventData[E]);
																this._sendHit(c),
																	this._assetData.adData(null),
																	this._assetData.type(o.TYPE_MAIN_CONTENT),
																	this._updateReportingInterval(this._reportingInterval, !1);
															}
														}),
														(e.prototype._onApiAdSkip = function(a) {
															this._logger.debug(w, '#_onApiAdSkip()');
															var b = a.data;
															if (
																this._checkCall('_onApiAdSkip') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																if (this._assetData.type() != o.TYPE_AD)
																	return void this._logger.warn(
																		w,
																		'#_onApiAdSkip() > Ignoring the ad skip event, because we are no longer in an ad.'
																	);
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_SKIP, b.playhead, null, b._eventData[E]);
																this._sendHit(c),
																	this._assetData.adData(null),
																	this._assetData.type(o.TYPE_MAIN_CONTENT),
																	this._updateReportingInterval(this._reportingInterval, !1);
															}
														}),
														(e.prototype._onApiChapterStart = function(a) {
															var b = a.data;
															if (
																(this._logger.debug(
																	w,
																	'#_onApiChapterStart(name=' +
																		b.chapterName +
																		', length=' +
																		b.chapterLength +
																		', position=' +
																		b.chapterPosition +
																		', chapter_offset=' +
																		b.chapterOffset +
																		')'
																),
																this._checkCall('_onApiChapterStart') &&
																	this._inputDataValidator.validateFields(b, [
																		'playhead',
																		'chapterPosition',
																		'chapterOffset',
																		'chapterLength'
																	]))
															) {
																var c = new s();
																c.id(f(this._assetData.videoId()) + '_' + b.chapterPosition),
																	c.name(b.chapterName),
																	c.length(b.chapterLength),
																	c.position(b.chapterPosition),
																	c.offset(b.chapterOffset),
																	c.sid(this._generateSessionId()),
																	this._assetData.chapterData(c),
																	this._updateQoSInfo(b);
																var d = g.merge(b.metaVideo, b.metaChapter),
																	e = new t(this, n.EVENT_TYPE_CHAPTER_START, b.playhead, d, b._eventData[E]);
																e.assetData.adData(null), e.assetData.type(o.TYPE_MAIN_CONTENT), this._sendHit(e);
															}
														}),
														(e.prototype._onApiChapterComplete = function(a) {
															this._logger.debug(w, '#_onApiChapterComplete()');
															var b = a.data;
															if (
																this._checkCall('_onApiChapterComplete') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																if (!this._assetData.chapterData())
																	return void this._logger.warn(
																		w,
																		'#_onApiChapterComplete() > Ignoring the chapter complete event, because we are no longer in a chapter.'
																	);
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_CHAPTER_COMPLETE, b.playhead, null, b._eventData[E]);
																c.assetData.adData(null),
																	c.assetData.type(o.TYPE_MAIN_CONTENT),
																	this._sendHit(c),
																	this._assetData.chapterData(null);
															}
														}),
														(e.prototype._onApiChapterSkip = function(a) {
															this._logger.debug(w, '#_onApiChapterSkip()');
															var b = a.data;
															if (
																this._checkCall('_onApiChapterSkip') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																if (!this._assetData.chapterData())
																	return void this._logger.warn(
																		w,
																		'#_onApiChapterSkip() > Ignoring the chapter skip event, because we are no longer in a chapter.'
																	);
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_CHAPTER_SKIP, b.playhead, null, b._eventData[E]);
																c.assetData.adData(null),
																	c.assetData.type(o.TYPE_MAIN_CONTENT),
																	this._sendHit(c),
																	this._assetData.chapterData(null);
															}
														}),
														(e.prototype._onApiBitrateChange = function(a) {
															this._logger.debug(w, '#_onApiBitrateChange()');
															var b = a.data;
															if (
																this._checkCall('_onApiBitrateChange') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_BITRATE_CHANGE, b.playhead, null, b._eventData[E]);
																this._sendHit(c);
															}
														}),
														(e.prototype._onApiTrackError = function(a) {
															var b = a.data;
															if (
																(this._logger.debug(
																	w,
																	'#_onApiTrackError(source=' +
																		b._eventData.source +
																		', err_id=' +
																		b._eventData.error_id +
																		')'
																),
																!this._isTrackingSessionActive)
															)
																return void this._logger.warn(w, '#_onApiTrackError() > No active tracking session.');
															if (this._trackExternalErrors || b._eventData.source === x) {
																this._updateQoSInfo(b);
																var c = new t(this, n.EVENT_TYPE_ERROR, 0, null, b._eventData[E]);
																c.eventData.id(b._eventData.error_id),
																	c.eventData.source(b._eventData.source),
																	this._sendHit(c);
															}
														}),
														(e.prototype._onApiTrackInternalError = function(a) {
															var b = a.data;
															this._logger.debug(
																w,
																'#_onApiTrackInternalError(source=' + b.source + ', err_id=' + b.error_id + ')'
															),
																this._updateQoSInfo(b);
															var c = new t(this, n.EVENT_TYPE_ERROR, 0);
															c.eventData.id(b.error_id), c.eventData.source(b.source), this._sendHit(c);
														}),
														(e.prototype._onApiQuantumEnd = function(a) {
															this._logger.debug(w, '#_onApiQuantumEnd(interval=' + this._channel.request(B) + ')');
															var b = a.data;
															if (
																this._checkCall('_onApiQuantumEnd') &&
																this._inputDataValidator.validateFields(b, ['playhead'])
															) {
																var c = this._lastInBandItem;
																if (c) {
																	this._updateQoSInfo(b);
																	var d = new t(this, c.eventData.type(), b.playhead, c.meta, c.callback);
																	(d.filterReport = c.filterReport), this._sendHit(d, !0);
																}
															}
														}),
														(e.prototype._onNetworkCheckStatusComplete = function(a) {
															var b = a.data;
															(this._trackExternalErrors = b[I]),
																(this._reportingInterval = b[J]),
																this._reportingInterval || (this._reportingInterval = ma),
																this._logger.debug(
																	w,
																	'#_onNetworkCheckStatusComplete(track_ext_err=' + this._trackExternalErrors + ')'
																);
														}),
														(e.prototype._onResetSessionId = function(a) {
															var b = this._generateSessionId();
															(this._sessionData = new i()),
																this._sessionData.sessionId(b),
																this._logger.debug(w, '#_resetSessionId(new sessionId=' + b + ')');
														}),
														(e.prototype._installEventListeners = function() {
															this._channel.on(L, this._onApiAnalyticsStart, this),
																this._channel.on(M, this._onApiAnalyticsAdStart, this),
																this._channel.on(N, this._onApiVideoLoad, this),
																this._channel.on(O, this._onApiVideoUnload, this),
																this._channel.on(P, this._onApiVideoStart, this),
																this._channel.on(Q, this._onApiVideoComplete, this),
																this._channel.on(R, this._onApiVideoSkip, this),
																this._channel.on(S, this._onApiVideoResume, this),
																this._channel.on(T, this._onApiVideoSessionEnd, this),
																this._channel.on(U, this._onApiAdStart, this),
																this._channel.on(V, this._onApiAdComplete, this),
																this._channel.on(W, this._onApiAdSkip, this),
																this._channel.on(X, this._onApiPlay, this),
																this._channel.on(Y, this._onApiPause, this),
																this._channel.on(Z, this._onApiBufferStart, this),
																this._channel.on($, this._onApiSeekStart, this),
																this._channel.on(_, this._onApiSeekComplete, this),
																this._channel.on(aa, this._onApiChapterStart, this),
																this._channel.on(ba, this._onApiChapterComplete, this),
																this._channel.on(ca, this._onApiChapterSkip, this),
																this._channel.on(fa, this._onApiBitrateChange, this),
																this._channel.on(da, this._onApiTrackError, this),
																this._channel.on(ea, this._onApiTrackInternalError, this),
																this._channel.on(ga, this._onApiQuantumEnd, this),
																this._channel.on(ia, this._onNetworkCheckStatusComplete, this),
																this._channel.on(D, this._onResetSessionId, this),
																this._channel.reply(
																	C,
																	function() {
																		return this._sessionData && this._sessionData.sessionId()
																			? this._sessionData.sessionId()
																			: null;
																	},
																	this
																);
														}),
														(e.prototype._uninstallEventListeners = function() {
															this._channel.off(null, null, this);
														}),
														(e.prototype._resetInternalState = function() {
															this._logger.debug(w, '#_resetInternalState()'),
																(this._isTrackingSessionActive = !1),
																(this._isVideoComplete = !1),
																(this._autoComputedStartupTime = 0),
																(this._lastInBandItem = null),
																(this._streamData = new p()),
																(this._qosData = new q()),
																(this._sessionData = new i()),
																(this._assetData = new o()),
																(this._cuserData = null);
														}),
														(e.prototype._generateSessionId = function() {
															return '' + new Date().getTime() + Math.floor(1e9 * Math.random());
														}),
														(e.prototype._updateQoSInfo = function(a) {
															this._qosData.bitrate(a.bitrate || 0),
																this._qosData.fps(a.fps || 0),
																this._qosData.droppedFrames(a.droppedFrames || 0),
																null == a.startupTime || isNaN(a.startupTime)
																	? (this._qosData.startupTime(this._autoComputedStartupTime),
																	  (this._qosData.isStartupTimeOverridden = !1))
																	: (this._qosData.startupTime(a.startupTime),
																	  (this._qosData.isStartupTimeOverridden = !0));
														}),
														(e.prototype._checkCall = function(a) {
															return this._isTrackingSessionActive
																? !this._isVideoComplete ||
																		'_onApiVideoSessionEnd' === a ||
																		(this._logger.warn(w, '#' + a + '() > The video content already completed.'), !1)
																: (this._logger.warn(w, '#' + a + '() > No active tracking session.'), !1);
														}),
														(e.prototype._updateReportingInterval = function(a, b) {
															var c = {};
															(c[K] = !!b), (c[J] = a), this._channel.trigger(new h(ja, c));
														}),
														(e.prototype._updateLastInBandItem = function(a) {
															var b = this._lastInBandItem,
																c = new Date().getTime(),
																d = b.assetData.type() === o.TYPE_AD || a.assetData.type() === o.TYPE_AD,
																e = 1e3 * Math.abs(a.eventData.playhead() - b.eventData.playhead()),
																f = Math.abs(c - b.eventData.ts()),
																g = Math.abs(e - f),
																h = f;
															h > ka
																? (this._logger.warn(
																		w,
																		' Resetting duration in lastInBandItem[' +
																			b.assetData.type() +
																			':' +
																			b.eventData.type() +
																			'] call to 0 as calculated duration (' +
																			h +
																			')exceeds 10mins'
																  ),
																  (h = 0))
																: b.eventData.type() == n.EVENT_TYPE_PLAY &&
																  !d &&
																  !this._doNotOverrideEventDuration &&
																  g > la &&
																  ((h = Math.min(e, f)),
																  this._logger.warn(
																		w,
																		' Resetting duration in lastInBandItem[' +
																			b.assetData.type() +
																			':' +
																			b.eventData.type() +
																			'] call to ' +
																			h +
																			' as calculated error delta (' +
																			g +
																			')exceeds 2sec'
																  )),
																(this._doNotOverrideEventDuration = !1),
																b.eventData.duration(h),
																b.eventData.ts(c),
																b.eventData.playhead(a.eventData.playhead()),
																b.qosData.startupTime(a.qosData.startupTime()),
																(b.qosData.isStartupTimeOverridden = a.qosData.isStartupTimeOverridden);
														}),
														(e.prototype._createAndSendReport = function(a) {
															var b = this._reportFactory.createReportForItem(a);
															b.qosData.isStartupTimeOverridden || b.qosData.startupTime(this._autoComputedStartupTime);
															var c = {};
															if (
																((c[G] = b),
																this._channel.trigger(new h(ha, c)),
																b.eventData.type() == n.EVENT_TYPE_START ||
																	b.eventData.type() == n.EVENT_TYPE_PLAY ||
																	b.eventData.type() == n.EVENT_TYPE_PAUSE ||
																	b.eventData.type() == n.EVENT_TYPE_STALL ||
																	b.eventData.type() == n.EVENT_TYPE_BUFFER)
															) {
																var d = {};
																(d[H] = !0), this._channel.command(z, d);
															}
														}),
														(e.prototype._sendHit = function(a, b) {
															switch (a.eventData.type()) {
																case n.EVENT_TYPE_START:
																case n.EVENT_TYPE_PLAY:
																case n.EVENT_TYPE_PAUSE:
																case n.EVENT_TYPE_STALL:
																case n.EVENT_TYPE_BUFFER:
																	this._lastInBandItem
																		? (this._updateLastInBandItem(a),
																		  this._lastInBandItem.eventData.type() == n.EVENT_TYPE_START &&
																				this._lastInBandItem.assetData.type() == o.TYPE_MAIN_CONTENT &&
																				(this._autoComputedStartupTime += this._lastInBandItem.eventData.duration()),
																		  this._createAndSendReport(this._lastInBandItem),
																		  (b && this._lastInBandItem.eventData.type() == a.eventData.type()) ||
																				this._createAndSendReport(a))
																		: this._createAndSendReport(a),
																		(this._lastInBandItem = a);
																	break;
																case n.EVENT_TYPE_COMPLETE:
																case n.EVENT_TYPE_SKIP:
																	if (
																		(this._lastInBandItem &&
																			(this._updateLastInBandItem(a), this._createAndSendReport(this._lastInBandItem)),
																		a.eventData.type() !== n.EVENT_TYPE_SKIP && this._createAndSendReport(a),
																		a.assetData.type() == o.TYPE_MAIN_CONTENT)
																	) {
																		this._lastInBandItem = null;
																		var c = {};
																		(c[H] = !0), this._channel.command(A, c);
																	} else
																		a.assetData.type() == o.TYPE_AD &&
																			(this._lastInBandItem.assetData.adData(null),
																			this._lastInBandItem.assetData.type(o.TYPE_MAIN_CONTENT),
																			(this._doNotOverrideEventDuration = !0));
																	break;
																case n.EVENT_TYPE_CHAPTER_START:
																case n.EVENT_TYPE_CHAPTER_COMPLETE:
																case n.EVENT_TYPE_CHAPTER_SKIP:
																	this._lastInBandItem &&
																		(this._updateLastInBandItem(a), this._createAndSendReport(this._lastInBandItem)),
																		a.eventData.type() !== n.EVENT_TYPE_CHAPTER_SKIP && this._createAndSendReport(a),
																		this._lastInBandItem &&
																			(this._lastInBandItem.assetData.chapterData(
																				a.eventData.type() == n.EVENT_TYPE_CHAPTER_START
																					? new s(a.assetData.chapterData())
																					: null
																			),
																			this._lastInBandItem.eventData.duration(0),
																			this._createAndSendReport(this._lastInBandItem));
																	break;
																default:
																	this._createAndSendReport(a);
															}
														});
													var w = 'ah::Context',
														x = 'sourceErrorSDK',
														y = 'error',
														z = 'clock:reporting.resume',
														A = 'clock:reporting.pause',
														B = 'reporting_interval',
														C = 'session_id',
														D = 'reset_session_id',
														E = 'callback',
														F = 'filter_report',
														G = 'report',
														H = 'reset',
														I = 'track_external_errors',
														J = 'reporting_interval',
														K = 'do_not_override_interval',
														L = 'api:aa_start',
														M = 'api:aa_ad_start',
														N = 'api:video_load',
														O = 'api:video_unload',
														P = 'api:video_start',
														Q = 'api:video_complete',
														R = 'api:video_skip',
														S = 'api:video_resume',
														T = 'api:video_session_end',
														U = 'api:ad_start',
														V = 'api:ad_complete',
														W = 'api:ad_skip',
														X = 'api:play',
														Y = 'api:pause',
														Z = 'api:buffer_start',
														$ = 'api:seek_start',
														_ = 'api:seek_complete',
														aa = 'api:chapter_start',
														ba = 'api:chapter_complete',
														ca = 'api:chapter_skip',
														da = 'api:track_error',
														ea = 'api:track_internal_error',
														fa = 'api:bitrate_change',
														ga = 'api:quantum_end',
														ha = 'context:report_available',
														ia = 'net:check_status_complete',
														ja = 'reporting:update_interval',
														ka = 6e5,
														la = 2e3,
														ma = 10;
													d.context.Context = e;
												})(a.ADB.core, a.ADB.va, a.ADB.va.utils, b),
												(function(a) {
													'use strict';

													function b(a, b) {
														(this.trackingServer = a),
															(this.publisher = b),
															(this.ssl = !1),
															(this.ovp = c),
															(this.sdk = c),
															(this.quietMode = !1),
															(this.debugLogging = !1),
															(this.__isPrimetime = !1),
															(this.__psdkVersion = null);
													}
													var c = 'unknown';
													a.AdobeHeartbeatPluginConfig = b;
												})(b),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.onError = function(a) {}), (a.AdobeHeartbeatPluginDelegate = b);
												})(b),
												(function(a, b, c) {
													'use strict';

													function d(a) {
														d.__super__.constructor.call(this, q),
															(this._radio = new i(this._logger)),
															(this._channel = this._radio.channel(y)),
															(this._delegate = a),
															(this._context = new l(this._channel, this._logger)),
															(this._filter = new m(this._channel, this._logger)),
															(this._network = new n(this._channel, this._logger)),
															this._setupDataResolver();
													}
													var e = a.Event,
														f = a.Trigger,
														g = a.plugin.BasePlugin,
														h = a.plugin.ParamMapping,
														i = a.radio.Radio,
														j = b.ErrorInfo,
														k = b.Version,
														l = c.context.Context,
														m = c.filter.ReportFilter,
														n = c.network.Network,
														o = c.clock.Clock,
														p = c.AdobeHeartbeatPluginConfig;
													a.extend(d, g),
														(d.prototype.configure = function(a) {
															if (!a) throw new Error('Reference to the configuration data cannot be NULL.');
															if (!(a instanceof p))
																throw new Error('Expected config data to be instance of AdobeHeartbeatPluginConfig.');
															(this._config = a),
																this._config.debugLogging ? this._logger.enable() : this._logger.disable(),
																this._logger.debug(
																	this._logTag,
																	'#configure({trackingServer=' +
																		this._config.trackingServer +
																		', publisher=' +
																		this._config.publisher +
																		', quietMode=' +
																		this._config.quietMode +
																		', ssl=' +
																		this._config.ssl +
																		'})'
																);
															var b = this._config.trackingServer + '/settings/',
																c = {};
															(c[ga] = this._config.trackingServer),
																(c[ha] = b),
																(c[ia] = this._config.publisher),
																(c[ja] = this._config.quietMode),
																(c[ka] = this._config.ssl),
																this._channel.trigger(new e(oa, c)),
																(this._isConfigured = !0);
														}),
														(d.prototype.bootstrap = function(a) {
															d.__super__.bootstrap.call(this, a),
																this._channel.on(z, this._onError, this),
																(this._clock = new o(this._pluginManager, this._channel, this._logger)),
																this._channel.command(Na),
																this._channel.trigger(new e(Ua)),
																this._registerCommands(),
																this._registerBehaviours();
														}),
														(d.prototype._teardown = function() {
															this._logger.debug(this._logTag, '#_teardown()'),
																this._radio.shutdown(),
																this._context.destroy(),
																this._clock.destroy(),
																this._filter.destroy(),
																this._network.destroy();
														}),
														(d.prototype._canProcess = function() {
															return this._isConfigured
																? this._errorInfo
																	? (this._logger.error(this._logTag, '_canProcess() > Plugin in ERROR state.'), !1)
																	: d.__super__._canProcess.call(this)
																: (this._logger.error(this._logTag, '_canProcess() > Plugin not configured.'), !1);
														}),
														(d.prototype._cmdAnalyticsError = function(a) {
															this._errorInfo ||
																((this._errorInfo = new j('Internal error', 'AdobeAnalyticsPlugin is in ERROR state.')),
																this._trigger(z, this._errorInfo),
																this._delegate && this._delegate.onError(this._errorInfo));
														}),
														(d.prototype._cmdAnalyticsStart = function(a) {
															if (this._canProcess()) {
																var b = {};
																(b[la] = a.visitorOptedOut),
																	this._channel.trigger(new e(pa, b)),
																	this._channel.trigger(new e(ma, a));
															}
														}),
														(d.prototype._cmdAnalyticsAdStart = function(a) {
															this._canProcess() && this._channel.trigger(new e(na, a));
														}),
														(d.prototype._cmdVideoLoad = function(a) {
															(this._errorInfo = null),
																this._canProcess() &&
																	(this._isTrackingSessionActive && this._channel.trigger(new e(ra, a)),
																	(this._isTrackingSessionActive = !1),
																	(this._isPaused = !0),
																	(this._isSeeking = !1),
																	(this._isBuffering = !1),
																	(this._isVideoIdle = !1),
																	this._filter.clear(),
																	this._channel.trigger(new e(qa, a)),
																	(this._isTrackingSessionActive = !0));
														}),
														(d.prototype._cmdVideoUnload = function(a) {
															(this._errorInfo = null),
																this._canProcess() &&
																	(this._channel.trigger(new e(ra, a)),
																	this._filter.flush(),
																	this._runReportingTimer(!1),
																	this._runFlushFilterTimer(!1),
																	this._runIdleTimer(!1),
																	(this._isTrackingSessionActive = !1));
														}),
														(d.prototype._cmdVideoSessionEnd = function(a) {
															this._canProcess() && this._channel.trigger(new e(wa, a));
														}),
														(d.prototype._cmdVideoStart = function(a) {
															this._canProcess() && (this._channel.trigger(new e(sa, a)), this._filter.flush());
														}),
														(d.prototype._cmdVideoComplete = function(a) {
															this._canProcess() && this._channel.trigger(new e(ta, a));
														}),
														(d.prototype._cmdVideoSkip = function(a) {
															this._canProcess() && this._channel.trigger(new e(ua, a));
														}),
														(d.prototype._cmdVideoResume = function(a) {
															this._canProcess() && this._channel.trigger(new e(va, a));
														}),
														(d.prototype._cmdPlay = function(a) {
															this._canProcess() && ((this._isPaused = !1), this._resumePlaybackIfPossible(a));
														}),
														(d.prototype._cmdPause = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(Ba, a)), (this._isPaused = !0), this._runIdleTimer(!0));
														}),
														(d.prototype._cmdAdStart = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(xa, a)), this._resumePlaybackIfPossible(a));
														}),
														(d.prototype._cmdAdComplete = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(ya, a)),
																a.isInAdBreak || this._resumePlaybackIfPossible(a));
														}),
														(d.prototype._cmdAdSkip = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(za, a)),
																a.isInAdBreak || this._resumePlaybackIfPossible(a));
														}),
														(d.prototype._cmdBufferStart = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(Ca, a)), (this._isBuffering = !0), this._runIdleTimer(!0));
														}),
														(d.prototype._cmdBufferComplete = function(a) {
															this._canProcess() &&
																((this._isBuffering = !1),
																this._isPaused
																	? this._channel.trigger(new e(Ba, a))
																	: this._resumePlaybackIfPossible(a));
														}),
														(d.prototype._cmdSeekStart = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(Da, a)),
																this._channel.trigger(new e(Ba, a)),
																(this._isSeeking = !0),
																this._runIdleTimer(!0));
														}),
														(d.prototype._cmdSeekComplete = function(a) {
															this._canProcess() &&
																(this._channel.trigger(new e(Ea, a)),
																(this._isSeeking = !1),
																this._resumePlaybackIfPossible(a));
														}),
														(d.prototype._cmdChapterStart = function(a) {
															this._canProcess() && this._channel.trigger(new e(Fa, a));
														}),
														(d.prototype._cmdChapterComplete = function(a) {
															this._canProcess() && this._channel.trigger(new e(Ga, a));
														}),
														(d.prototype._cmdChapterSkip = function(a) {
															this._canProcess() && this._channel.trigger(new e(Ha, a));
														}),
														(d.prototype._cmdBitrateChange = function(a) {
															this._canProcess() && this._channel.trigger(new e(Ka, a));
														}),
														(d.prototype._cmdTrackError = function(a) {
															this._canProcess() && this._channel.trigger(new e(Ia, a));
														}),
														(d.prototype._cmdClockReportingTick = function(a) {
															this._canProcess() && this._channel.trigger(new e(La, a));
														}),
														(d.prototype._cmdIdleTick = function(a) {
															this._canProcess() &&
																((this._isVideoIdle = !0),
																this._trigger($),
																this._channel.trigger(new e(wa, a)),
																this._filter.flush(),
																this._runReportingTimer(!1),
																this._runFlushFilterTimer(!1),
																this._runIdleTimer(!1),
																this._trigger(Y));
														}),
														(d.prototype._onError = function(a) {
															this._errorInfo = a.data;
															var b = {};
															(b[ea] = Ma),
																(b[fa] = this._errorInfo.getMessage() + '|' + this._errorInfo.getDetails()),
																this._channel.trigger(new e(Ja, b)),
																this._runReportingTimer(!1),
																this._trigger(z, this._errorInfo),
																this._delegate && this._delegate.onError(this._errorInfo);
														}),
														(d.prototype._runIdleTimer = function(a) {
															var b = {};
															(b[da] = !0), a ? this._channel.command(Sa, b) : this._channel.command(Ta, b);
														}),
														(d.prototype._runFlushFilterTimer = function(a) {
															var b = {};
															(b[da] = !0), a ? this._channel.command(Qa, b) : this._channel.command(Ra, b);
														}),
														(d.prototype._runReportingTimer = function(a) {
															var b = {};
															(b[da] = !0), a ? this._channel.command(Oa, b) : this._channel.command(Pa, b);
														}),
														(d.prototype._registerCommands = function() {
															this._pluginManager.comply(this, 'handleAnalyticsError', this._cmdAnalyticsError),
																this._pluginManager.comply(this, 'handleAnalyticsStart', this._cmdAnalyticsStart),
																this._pluginManager.comply(this, 'handleAnalyticsAdStart', this._cmdAnalyticsAdStart),
																this._pluginManager.comply(this, 'handleVideoLoad', this._cmdVideoLoad),
																this._pluginManager.comply(this, 'handleVideoUnload', this._cmdVideoUnload),
																this._pluginManager.comply(this, 'handleVideoSessionEnd', this._cmdVideoSessionEnd),
																this._pluginManager.comply(this, 'handleVideoStart', this._cmdVideoStart),
																this._pluginManager.comply(this, 'handleVideoComplete', this._cmdVideoComplete),
																this._pluginManager.comply(this, 'handleVideoSkip', this._cmdVideoSkip),
																this._pluginManager.comply(this, 'handleVideoResume', this._cmdVideoResume),
																this._pluginManager.comply(this, 'handlePlay', this._cmdPlay),
																this._pluginManager.comply(this, 'handlePause', this._cmdPause),
																this._pluginManager.comply(this, 'handleAdStart', this._cmdAdStart),
																this._pluginManager.comply(this, 'handleAdComplete', this._cmdAdComplete),
																this._pluginManager.comply(this, 'handleAdSkip', this._cmdAdSkip),
																this._pluginManager.comply(this, 'handleBufferStart', this._cmdBufferStart),
																this._pluginManager.comply(this, 'handleBufferComplete', this._cmdBufferComplete),
																this._pluginManager.comply(this, 'handleSeekStart', this._cmdSeekStart),
																this._pluginManager.comply(this, 'handleSeekComplete', this._cmdSeekComplete),
																this._pluginManager.comply(this, 'handleChapterStart', this._cmdChapterStart),
																this._pluginManager.comply(this, 'handleChapterComplete', this._cmdChapterComplete),
																this._pluginManager.comply(this, 'handleChapterSkip', this._cmdChapterSkip),
																this._pluginManager.comply(this, 'handleBitrateChange', this._cmdBitrateChange),
																this._pluginManager.comply(this, 'handleTrackError', this._cmdTrackError),
																this._pluginManager.comply(
																	this,
																	'handleClockReportingTick',
																	this._cmdClockReportingTick
																),
																this._pluginManager.comply(this, 'handleIdleTick', this._cmdIdleTick);
														}),
														(d.prototype._registerBehaviours = function() {
															this._pluginManager.registerBehaviour(new f(t, C), this, 'handleVideoLoad', [
																new h(s, 'rsid', 'rsid'),
																new h(s, 'tracking_server', 'trackingServer')
															]),
																this._pluginManager.registerBehaviour(new f(t, D), this, 'handleVideoUnload'),
																this._pluginManager.registerBehaviour(new f(t, E), this, 'handleVideoSessionEnd', [
																	new h(t, 'video.playhead', 'playhead')
																]),
																this._pluginManager.registerBehaviour(new f(t, F), this, 'handleVideoStart', [
																	new h(t, 'video.id', 'videoId'),
																	new h(t, 'video.name', 'videoName'),
																	new h(t, 'video.length', 'videoLength'),
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'video.playerName', 'playerName'),
																	new h(t, 'video.streamType', 'streamType'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime'),
																	new h(s, 'rsid', 'rsid'),
																	new h(s, 'tracking_server', 'trackingServer'),
																	new h(s, 'channel', 'channel'),
																	new h(s, 'meta.video.*', 'metaVideo'),
																	new h(s, 'ssl', 'useSsl'),
																	new h(u, 'meta', 'metaNielsen'),
																	new h(r, 'publisher', 'publisher'),
																	new h(r, 'sdk', 'sdk'),
																	new h(r, 'ovp', 'ovp'),
																	new h(r, 'version', 'version'),
																	new h(r, 'api_level', 'apiLvl')
																]),
																this._pluginManager.registerBehaviour(new f(t, H), this, 'handleVideoComplete', [
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, I), this, 'handleVideoSkip', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, G), this, 'handleVideoResume', [
																	new h(t, 'video.id', 'videoId'),
																	new h(t, 'video.name', 'videoName'),
																	new h(t, 'video.length', 'videoLength'),
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'video.playerName', 'playerName'),
																	new h(t, 'video.streamType', 'streamType')
																]),
																this._pluginManager.registerBehaviour(new f(t, J), this, 'handlePlay', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, K), this, 'handlePause', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'video.playheadStalled', 'playheadStalled'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, M), this, 'handleAdStart', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'ad.id', 'adId'),
																	new h(t, 'ad.name', 'adName'),
																	new h(t, 'ad.length', 'adLength'),
																	new h(t, 'ad.position', 'adPosition'),
																	new h(t, 'ad.granularTracking', 'adGranularTracking'),
																	new h(t, 'ad.trackingInterval', 'adTrackingInterval'),
																	new h(t, 'pod.name', 'podName'),
																	new h(t, 'pod.playerName', 'podPlayerName'),
																	new h(t, 'pod.position', 'podPosition'),
																	new h(t, 'pod.startTime', 'podSecond'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime'),
																	new h(s, 'meta.video.*', 'metaVideo'),
																	new h(s, 'meta.ad.*', 'metaAd'),
																	new h(u, 'meta', 'metaNielsen')
																]),
																this._pluginManager.registerBehaviour(new f(t, N), this, 'handleAdComplete', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'ad.isInAdBreak', 'isInAdBreak'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, O), this, 'handleAdSkip', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'ad.isInAdBreak', 'isInAdBreak'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, P), this, 'handleBufferStart', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, Q), this, 'handleBufferComplete', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'video.playheadStalled', 'playheadStalled'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, R), this, 'handleSeekStart', [
																	new h(t, 'video.playhead', 'playhead')
																]),
																this._pluginManager.registerBehaviour(new f(t, S), this, 'handleSeekComplete', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'ad.isInAd', 'isInAd'),
																	new h(t, 'ad.id', 'adId'),
																	new h(t, 'ad.position', 'adPosition'),
																	new h(t, 'pod.playerName', 'podPlayerName'),
																	new h(t, 'pod.position', 'podPosition'),
																	new h(t, 'chapter.isInChapter', 'isInChapter'),
																	new h(t, 'chapter.position', 'chapterPosition'),
																	new h(t, 'chapter.name', 'chapterName'),
																	new h(t, 'chapter.length', 'chapterLength'),
																	new h(t, 'chapter.startTime', 'chapterOffset'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, T), this, 'handleChapterStart', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'chapter.position', 'chapterPosition'),
																	new h(t, 'chapter.name', 'chapterName'),
																	new h(t, 'chapter.length', 'chapterLength'),
																	new h(t, 'chapter.startTime', 'chapterOffset'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime'),
																	new h(s, 'meta.video.*', 'metaVideo'),
																	new h(s, 'meta.chapter.*', 'metaChapter'),
																	new h(u, 'meta', 'metaNielsen')
																]),
																this._pluginManager.registerBehaviour(new f(t, U), this, 'handleChapterComplete', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, V), this, 'handleChapterSkip', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, W), this, 'handleBitrateChange', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, X), this, 'handleTrackError'),
																this._pluginManager.registerBehaviour(new f(v, aa), this, 'handleClockReportingTick', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(t, L), this, 'handleClockReportingTick', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(v, ca), this, 'handleIdleTick', [
																	new h(t, 'video.playhead', 'playhead')
																]),
																this._pluginManager.registerBehaviour(new f(r, $), this, 'handleClockReportingTick', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(s, z), this, 'handleAnalyticsError'),
																this._pluginManager.registerBehaviour(new f(s, A), this, 'handleAnalyticsStart', [
																	new h(s, 'vid', 'vid'),
																	new h(s, 'aid', 'aid'),
																	new h(s, 'mid', 'mid'),
																	new h(s, 'customerIDs', 'customerIDs'),
																	new h(s, 'visitorOptedOut', 'visitorOptedOut'),
																	new h(s, 'blob', 'blob'),
																	new h(s, 'loc_hint', 'loc_hint'),
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]),
																this._pluginManager.registerBehaviour(new f(s, B), this, 'handleAnalyticsAdStart', [
																	new h(t, 'video.playhead', 'playhead'),
																	new h(t, 'qos.fps', 'fps'),
																	new h(t, 'qos.droppedFrames', 'droppedFrames'),
																	new h(t, 'qos.bitrate', 'bitrate'),
																	new h(t, 'qos.startupTime', 'startupTime')
																]);
														}),
														(d.prototype._setupDataResolver = function() {
															var a = {},
																b = this;
															(a.version = function() {
																return k.getVersion();
															}),
																(a.api_level = function() {
																	return k.getApiLevel();
																}),
																(a.tracking_server = function() {
																	return b._config ? b._config.trackingServer : null;
																}),
																(a.publisher = function() {
																	return b._config ? b._config.publisher : null;
																}),
																(a.quiet_mode = function() {
																	return !!b._config && b._config.quietMode;
																}),
																(a.ovp = function() {
																	return b._config ? b._config.ovp : null;
																}),
																(a.sdk = function() {
																	return b._config ? b._config.sdk : null;
																}),
																(a.is_primetime = function() {
																	return !!b._config && b._config.__isPrimetime;
																}),
																(a.psdk_version = function() {
																	return b._config ? b._config.__psdkVersion : null;
																}),
																(a.session_id = function() {
																	return b._channel.request(w);
																}),
																(this._dataResolver = function(b) {
																	if (!b || 0 == b.length) return null;
																	for (var c = null, d = 0; d < b.length; d++) {
																		var e = b[d];
																		(c = c || {}), (c[e] = a.hasOwnProperty(e) ? a[e].call(this) : null);
																	}
																	return c;
																});
														}),
														(d.prototype._resumePlaybackIfPossible = function(a) {
															this._errorInfo ||
																this._isPaused ||
																this._isSeeking ||
																this._isBuffering ||
																(this._isVideoIdle && ((this._isVideoIdle = !1), this._resumePlaybackFromIdle()),
																this._runIdleTimer(!1),
																this._channel.trigger(new e(Aa, a)));
														}),
														(d.prototype._resumePlaybackFromIdle = function() {
															this._trigger($),
																this._filter.clear(),
																this._channel.trigger(new e(x)),
																this._trigger(Z),
																this._runReportingTimer(!0),
																this._runFlushFilterTimer(!0);
														});
													var q = 'adobe-heartbeat',
														r = q,
														s = 'adobe-analytics',
														t = 'player',
														u = 'nielsen',
														v = 'service.clock',
														w = 'session_id',
														x = 'reset_session_id',
														y = 'heartbeat-channel',
														z = 'error',
														A = 'aa_start',
														B = 'sc_ad_start',
														C = 'video_load',
														D = 'video_unload',
														E = 'video_session_end',
														F = 'video_start',
														G = 'video_resume',
														H = 'video_complete',
														I = 'video_skip',
														J = 'play',
														K = 'pause',
														L = 'content_start',
														M = 'ad_start',
														N = 'ad_complete',
														O = 'ad_skip',
														P = 'buffer_start',
														Q = 'buffer_complete',
														R = 'seek_start',
														S = 'seek_complete',
														T = 'chapter_start',
														U = 'chapter_complete',
														V = 'chapter_skip',
														W = 'bitrate_change',
														X = 'track_error',
														Y = 'video_idle_start',
														Z = 'video_idle_resume',
														$ = 'quantum_close',
														_ = 'heartbeat.reporting',
														aa = _ + '.tick',
														ba = 'heartbeat.idle',
														ca = ba + '.tick',
														da = 'reset',
														ea = 'source',
														fa = 'error_id',
														ga = 'tracking_server',
														ha = 'check_status_server',
														ia = 'publisher',
														ja = 'quiet_mode',
														ka = 'ssl',
														la = 'visitor_opt_out',
														ma = 'api:aa_start',
														na = 'api:aa_ad_start',
														oa = 'api:config',
														pa = 'api:update_visitor_optout',
														qa = 'api:video_load',
														ra = 'api:video_unload',
														sa = 'api:video_start',
														ta = 'api:video_complete',
														ua = 'api:video_skip',
														va = 'api:video_resume',
														wa = 'api:video_session_end',
														xa = 'api:ad_start',
														ya = 'api:ad_complete',
														za = 'api:ad_skip',
														Aa = 'api:play',
														Ba = 'api:pause',
														Ca = 'api:buffer_start',
														Da = 'api:seek_start',
														Ea = 'api:seek_complete',
														Fa = 'api:chapter_start',
														Ga = 'api:chapter_complete',
														Ha = 'api:chapter_skip',
														Ia = 'api:track_error',
														Ja = 'api:track_internal_error',
														Ka = 'api:bitrate_change',
														La = 'api:quantum_end',
														Ma = 'sourceErrorHeartbeat',
														Na = 'clock:check_status.resume',
														Oa = 'clock:reporting.resume',
														Pa = 'clock:reporting.pause',
														Qa = 'clock:flush_filter.resume',
														Ra = 'clock:flush_filter.pause',
														Sa = 'clock:idle.resume',
														Ta = 'clock:idle.pause',
														Ua = 'clock:check_status.get_settings';
													c.AdobeHeartbeatPlugin = d;
												})(a.ADB.core, a.ADB.va, b),
												a.ADB.va.plugins.ah || (a.ADB.va.plugins.ah = b);
										})(this);

										// AdobeAnalyticsPlugin
										!(function(a) {
											if (void 0 === b) var b = {};
											!(function(a, b) {
												'use strict';

												function c(a, b) {
													this._onFail = {
														fn: a,
														ctx: b
													};
												}
												var d = a.ErrorInfo;
												(c.prototype.validateFields = function(a, b) {
													if (!a) return this._fail('Data cannot be null');
													if (b)
														for (var c = 0; c < b.length; c++) {
															var d = b[c];
															switch (d) {
																case 'videoId':
																	if (!a.hasOwnProperty('videoId'))
																		return this._fail('The ID for the main video must be specified.');
																	if ('string' != typeof a.videoId)
																		return this._fail('The ID for the main video must be a String.');
																	if ('' === a.videoId)
																		return this._fail('The ID for the main video cannot be an empty string.');
																	break;
																case 'streamType':
																	if (!a.hasOwnProperty('streamType'))
																		return this._fail('The stream type for the main video must be specified.');
																	if ('string' != typeof a.streamType)
																		return this._fail('The stream type for the main video must be a String.');
																	if ('' === a.streamType)
																		return this._fail('The stream type for the main video cannot be an empty string.');
																	break;
																case 'playerName':
																	if (!a.hasOwnProperty('playerName'))
																		return this._fail('The player name for the main video must be specified.');
																	if ('string' != typeof a.playerName)
																		return this._fail('The player name for the main video must be a String.');
																	if ('' === a.playerName)
																		return this._fail('The player name for the main video cannot be an empty string.');
																	break;
																case 'videoLength':
																	if (!a.hasOwnProperty('videoLength'))
																		return this._fail('The length of the main video must be specified.');
																	if ('number' != typeof a.videoLength)
																		return this._fail('The length of the main video must be a Number.');
																	if (isNaN(a.videoLength))
																		return this._fail('The length of the main video cannot be NaN.');
																	break;
																case 'podPlayerName':
																	if (!a.hasOwnProperty('podPlayerName'))
																		return this._fail('The player name for the ad-break must be specified.');
																	if ('string' != typeof a.podPlayerName)
																		return this._fail('The player name for the ad-break must be a String.');
																	if ('' === a.podPlayerName)
																		return this._fail('The player name for the ad-break cannot be an empty string.');
																	break;
																case 'podPosition':
																	if (!a.hasOwnProperty('podPosition'))
																		return this._fail('Position (index) of the ad-break must be specified.');
																	if ('number' != typeof a.podPosition)
																		return this._fail('Position (index) of the ad-break must be a Number.');
																	if (isNaN(a.podPosition))
																		return this._fail('Position (index) of the ad-break cannot be NaN.');
																	break;
																case 'adId':
																	if (!a.hasOwnProperty('adId')) return this._fail('The ad ID must be specified.');
																	if ('string' != typeof a.adId) return this._fail('The ad ID must be a String.');
																	if ('' === a.adId) return this._fail('The ad ID cannot be an empty string.');
																	break;
																case 'adPosition':
																	if (!a.hasOwnProperty('adPosition'))
																		return this._fail('Position (index) of the ad must be specified.');
																	if ('number' != typeof a.adPosition)
																		return this._fail('Position (index) of the ad must be a Number.');
																	if (isNaN(a.adPosition))
																		return this._fail('Position (index) of the ad cannot be NaN.');
																	break;
																case 'adLength':
																	if (!a.hasOwnProperty('adLength'))
																		return this._fail('The length of the ad must be specified.');
																	if ('number' != typeof a.adLength)
																		return this._fail('The length of the ad must be a Number.');
																	if (isNaN(a.adLength)) return this._fail('The length of the ad cannot be NaN.');
																	break;
																default:
																	return this._fail('Unable to validate unknown parameter: ' + d);
															}
														}
													return !0;
												}),
													(c.prototype._fail = function(a) {
														var b = new d('Invalid input data', a);
														return this._onFail.fn && this._onFail.fn.call(this._onFail.ctx, b), !1;
													}),
													(b.InputDataValidator = c);
											})(a.ADB.va, b),
												(function(a) {
													'use strict';

													function b() {
														(this.channel = c), (this.debugLogging = !1);
													}
													var c = '';
													a.AdobeAnalyticsPluginConfig = b;
												})(b),
												(function(a) {
													'use strict';

													function b() {}
													(b.prototype.onError = function(a) {}), (a.AdobeAnalyticsPluginDelegate = b);
												})(b),
												(function(a, b, c, d) {
													'use strict';

													function e(a, b) {
														if ((e.__super__.constructor.call(this, r), !a))
															throw new Error('The reference to the AppMeasurement object cannot be NULL.');
														if (a.unsupportedBrowser)
															throw new Error('AppMeasurement is not supported in current browser.');
														(this._appMeasurement = a),
															(this._delegate = b),
															(this._videoMetadata = {}),
															(this._adMetadata = {}),
															(this._chapterMetadata = {}),
															(this._errorInfo = null),
															(this._workQueue = new k(!0, w)),
															(this._inputDataValidator = new q(function(a) {
																(this._errorInfo = a),
																	this._logger.error(this._logTag, a.getMessage() + ' | ' + a.getDetails());
																var b = this;
																setTimeout(function() {
																	b._trigger(x, a), b._delegate && b._delegate.onError(b._errorInfo);
																}, 0);
															}, this)),
															this._appMeasurement.isReadyToTrack(),
															this._setupDataResolver();
													}
													var f = a.Trigger,
														g = a.plugin.BasePlugin,
														h = a.plugin.ParamMapping,
														i = a.radio.Channel,
														j = a.radio.Command,
														k = a.radio.CommandQueue,
														l = b.ErrorInfo,
														m = c.md5,
														n = c.StringUtils,
														o = c.ObjectUtils,
														p = d.AdobeAnalyticsPluginConfig,
														q = d.InputDataValidator;
													a.extend(e, g),
														(e.prototype.configure = function(a) {
															if (!a) throw new Error('Reference to the configuration data cannot be NULL.');
															if (!(a instanceof p))
																throw new Error('Expected config data to be instance of AdobeAnalyticsPluginConfig.');
															(this._config = a),
																this._config.debugLogging ? this._logger.enable() : this._logger.disable(),
																this._logger.debug(
																	this._logTag,
																	'#configure({trackingServer=' +
																		this._config.debugLogging +
																		', channel=' +
																		this._config.channel +
																		', ssl=' +
																		this._appMeasurement.ssl +
																		'})'
																);
														}),
														(e.prototype.bootstrap = function(a) {
															e.__super__.bootstrap.call(this, a), this._registerCommands(), this._registerBehaviours();
														}),
														(e.prototype.setup = function() {
															this._appMeasurement.isReadyToTrack()
																? this._onAppMeasurementReady()
																: this._appMeasurement.callbackWhenReadyToTrack(this, this._onAppMeasurementReady, []),
																e.__super__.setup.call(this);
														}),
														(e.prototype.setVideoMetadata = function(a) {
															this._videoMetadata = o.clone(a);
														}),
														(e.prototype.setAdMetadata = function(a) {
															this._adMetadata = o.clone(a);
														}),
														(e.prototype.setChapterMetadata = function(a) {
															this._chapterMetadata = o.clone(a);
														}),
														(e.prototype._canProcess = function() {
															return this._errorInfo
																? (this._logger.error(this._logTag, '#_canProcess() > In ERROR state.'), !1)
																: e.__super__._canProcess.call(this);
														}),
														(e.prototype._cmdVideoLoad = function(a) {
															this._errorInfo = null;
														}),
														(e.prototype._cmdVideoStart = function(a) {
															this._logger.debug(this._logTag, '#_cmdVideoStart()'),
																this._canProcess() && this._workQueue.addCommand(new j(this._executeOpen, this, [a]));
														}),
														(e.prototype._cmdAdStart = function(a) {
															this._logger.debug(this._logTag, '#_cmdAdStart()'),
																this._canProcess() && this._workQueue.addCommand(new j(this._executeOpenAd, this, [a]));
														}),
														(e.prototype._cmdHeartbeatPluginError = function(a) {
															this._errorInfo ||
																((this._errorInfo = new l('Internal error', 'HeartbeatPlugin is in ERROR state.')),
																this._trigger(x, this._errorInfo),
																this._delegate && this._delegate.onError(this._errorInfo));
														}),
														(e.prototype._track = function(a) {
															if (!this._appMeasurement.visitorOptedOut) {
																var b = this._appMeasurement.linkTrackVars;
																(this._appMeasurement.linkTrackVars = ''),
																	this._appMeasurement.track(a),
																	(this._appMeasurement.linkTrackVars = b);
															}
														}),
														(e.prototype._executeOpen = function(a) {
															if (
																(this._logger.debug(
																	this._logTag,
																	'#_executeOpen(id=' +
																		a.videoId +
																		', videoName=' +
																		a.videoName +
																		', streamType=' +
																		a.streamType +
																		', length=' +
																		a.videoLength +
																		', playerName=' +
																		a.playerName +
																		', channel=' +
																		a.channel +
																		', isPrimetime=' +
																		a.isPrimetime +
																		', sessionId=' +
																		a.sessionId +
																		')'
																),
																this._canProcess() &&
																	this._inputDataValidator.validateFields(a, [
																		'videoId',
																		'streamType',
																		'videoLength',
																		'playerName'
																	]))
															) {
																var b = {};
																for (var c in a.metaVideo) a.metaVideo.hasOwnProperty(c) && (b[c] = a.metaVideo[c]);
																if (a.metaNielsen)
																	for (var c in a.metaNielsen)
																		a.metaNielsen.hasOwnProperty(c) && (b[c] = a.metaNielsen[c]);
																(b['a.contentType'] = a.streamType),
																	(b['a.media.name'] = a.videoId),
																	(b['a.media.friendlyName'] = a.videoName || ''),
																	(b['a.media.length'] = Math.floor(a.videoLength) || '0.0'),
																	(b['a.media.playerName'] = a.playerName),
																	(b['a.media.channel'] = a.channel || ''),
																	(b['a.media.view'] = !0),
																	(b['a.media.vsid'] = a.sessionId);
																var d = {};
																(d.contextData = b), (d.pev3 = y), (d.pe = a.isPrimetime ? B : A), this._track(d);
																var e = this;
																setTimeout(function() {
																	e._trigger(E, a);
																}, 0);
															}
														}),
														(e.prototype._executeOpenAd = function(a) {
															var b = m(a.videoId) + '_' + a.podPosition;
															if (
																(this._logger.debug(
																	this._logTag,
																	'#_executeOpenAd(id=' +
																		a.adId +
																		', streamType=' +
																		a.streamType +
																		', length=' +
																		a.adLength +
																		', podPlayerName=' +
																		a.podPlayerName +
																		', parentId=' +
																		a.videoId +
																		', podId=' +
																		b +
																		', parentPodPosition=' +
																		a.adPosition +
																		', podSecond=' +
																		a.podSecond +
																		')'
																),
																this._canProcess() &&
																	this._inputDataValidator.validateFields(a, [
																		'videoId',
																		'streamType',
																		'playerName',
																		'adId',
																		'adLength',
																		'podPlayerName',
																		'adPosition'
																	]))
															) {
																a.podSecond = null == a.podSecond || isNaN(a.podSecond) ? a.playhead : a.podSecond;
																var c,
																	d = {};
																for (c in a.metaVideo) a.metaVideo.hasOwnProperty(c) && (d[c] = a.metaVideo[c]);
																for (c in a.metaAd) a.metaAd.hasOwnProperty(c) && (d[c] = a.metaAd[c]);
																if (a.metaNielsen)
																	for (var c in a.metaNielsen)
																		a.metaNielsen.hasOwnProperty(c) && (d[c] = a.metaNielsen[c]);
																(d['a.contentType'] = a.streamType),
																	(d['a.media.name'] = a.videoId),
																	(d['a.media.playerName'] = a.playerName),
																	(d['a.media.channel'] = a.channel || ''),
																	(d['a.media.vsid'] = a.sessionId),
																	(d['a.media.friendlyName'] = a.videoName || ''),
																	(d['a.media.length'] = Math.floor(a.videoLength) || '0.0'),
																	(d['a.media.ad.name'] = a.adId),
																	(d['a.media.ad.friendlyName'] = a.adName || ''),
																	(d['a.media.ad.podFriendlyName'] = a.podName || ''),
																	(d['a.media.ad.length'] = Math.floor(a.adLength) || '0.0'),
																	(d['a.media.ad.playerName'] = a.podPlayerName),
																	(d['a.media.ad.pod'] = b),
																	(d['a.media.ad.podPosition'] = Math.floor(a.adPosition) || '0.0'),
																	(d['a.media.ad.podSecond'] = Math.floor(a.podSecond) || '0.0'),
																	(d['a.media.ad.view'] = !0);
																var e = {};
																(e.contextData = d), (e.pev3 = z), (e.pe = a.isPrimetime ? D : C), this._track(e);
																var f = this;
																setTimeout(function() {
																	f._trigger(F, a);
																}, 0);
															}
														}),
														(e.prototype._setupDataResolver = function() {
															var a = {},
																b = this;
															(a.rsid = function() {
																return b._appMeasurement.account;
															}),
																(a.tracking_server = function() {
																	return b._appMeasurement.ssl && b._appMeasurement.trackingServerSecure
																		? b._appMeasurement.trackingServerSecure
																		: b._appMeasurement.trackingServer;
																}),
																(a.ssl = function() {
																	return b._appMeasurement.ssl;
																}),
																(a.vid = function() {
																	return b._appMeasurement.visitorID;
																}),
																(a.aid = function() {
																	return b._appMeasurement.analyticsVisitorID;
																}),
																(a.mid = function() {
																	return b._appMeasurement.marketingCloudVisitorID;
																}),
																(a.blob = function() {
																	return b._appMeasurement.audienceManagerBlob;
																}),
																(a.loc_hint = function() {
																	return b._appMeasurement.audienceManagerLocationHint
																		? parseInt(b._appMeasurement.audienceManagerLocationHint)
																		: '';
																}),
																(a.customerIDs = function() {
																	var a = {},
																		c = b._appMeasurement.visitor.getCustomerIDs();
																	for (var d in c)
																		if (c.hasOwnProperty(d)) {
																			var e = c[d];
																			if ('object' == typeof e) {
																				for (var f in e)
																					e.hasOwnProperty(f) &&
																						('authState' == f ? (a[d + '.as'] = e[f]) : (a[d + '.' + f] = e[f]));
																				a[d + '.as'] || (a[d + '.as'] = '0');
																			}
																		}
																	return a;
																}),
																(a.visitorOptedOut = function() {
																	return !!b._appMeasurement.visitorOptedOut;
																}),
																(a.channel = function() {
																	return b._config ? b._config.channel : null;
																}),
																(a.meta = function(a) {
																	var c = a.split('.');
																	if (c.length < 2) return null;
																	var d = c.shift();
																	switch (((a = c.join('.')), d)) {
																		case 'video':
																			return a == i.WILDCARD ? b._videoMetadata : b._videoMetadata[a];
																		case 'ad':
																			return a == i.WILDCARD ? b._adMetadata : b._adMetadata[a];
																		case 'chapter':
																			return a == i.WILDCARD ? b._chapterMetadata : b._chapterMetadata[a];
																		default:
																			return null;
																	}
																}),
																(this._dataResolver = function(b) {
																	if (!b || 0 == b.length) return null;
																	for (var c = null, d = 0; d < b.length; d++) {
																		var e = b[d];
																		(c = c || {}),
																			n.startsWith(e, 'meta.')
																				? (c[e] = a.meta(e.split('meta.')[1]))
																				: (c[e] = a.hasOwnProperty(e) ? a[e].call(this) : null);
																	}
																	return c;
																});
														}),
														(e.prototype._registerCommands = function() {
															this._pluginManager.comply(this, 'handleVideoLoad', this._cmdVideoLoad),
																this._pluginManager.comply(this, 'handleVideoStart', this._cmdVideoStart),
																this._pluginManager.comply(this, 'handleAdStart', this._cmdAdStart),
																this._pluginManager.comply(
																	this,
																	'handleHeartbeatPluginError',
																	this._cmdHeartbeatPluginError
																);
														}),
														(e.prototype._registerBehaviours = function() {
															this._pluginManager.registerBehaviour(new f(u, G), this, 'handleVideoLoad'),
																this._pluginManager.registerBehaviour(new f(u, H), this, 'handleVideoStart', [
																	new h(u, 'video.id', 'videoId'),
																	new h(u, 'video.streamType', 'streamType'),
																	new h(u, 'video.name', 'videoName'),
																	new h(u, 'video.length', 'videoLength'),
																	new h(u, 'video.playerName', 'playerName'),
																	new h(u, 'video.streamType', 'streamType'),
																	new h(v, 'is_primetime', 'isPrimetime'),
																	new h(v, 'session_id', 'sessionId'),
																	new h(s, 'channel', 'channel'),
																	new h(s, 'meta.video.*', 'metaVideo'),
																	new h(t, 'meta', 'metaNielsen')
																]),
																this._pluginManager.registerBehaviour(new f(u, I), this, 'handleAdStart', [
																	new h(u, 'video.id', 'videoId'),
																	new h(u, 'video.streamType', 'streamType'),
																	new h(u, 'video.playhead', 'playhead'),
																	new h(u, 'video.playerName', 'playerName'),
																	new h(u, 'video.name', 'videoName'),
																	new h(u, 'video.length', 'videoLength'),
																	new h(u, 'ad.id', 'adId'),
																	new h(u, 'ad.length', 'adLength'),
																	new h(u, 'ad.position', 'adPosition'),
																	new h(u, 'ad.name', 'adName'),
																	new h(u, 'pod.name', 'podName'),
																	new h(u, 'pod.position', 'podPosition'),
																	new h(u, 'pod.playerName', 'podPlayerName'),
																	new h(u, 'pod.startTime', 'podSecond'),
																	new h(v, 'is_primetime', 'isPrimetime'),
																	new h(v, 'session_id', 'sessionId'),
																	new h(s, 'channel', 'channel'),
																	new h(s, 'meta.video.*', 'metaVideo'),
																	new h(s, 'meta.ad.*', 'metaAd'),
																	new h(t, 'meta', 'metaNielsen')
																]),
																this._pluginManager.registerBehaviour(new f(v, x), this, 'handleHeartbeatPluginError');
														}),
														(e.prototype._onAppMeasurementReady = function() {
															this._logger.debug(this._logTag, '[Init] #_onAppMeasurementReady'),
																this._workQueue.resume();
														});
													var r = 'adobe-analytics',
														s = r,
														t = 'nielsen',
														u = 'player',
														v = 'adobe-heartbeat',
														w = 2e3,
														x = 'error',
														y = 'video',
														z = 'videoAd',
														A = 'ms_s',
														B = 'msp_s',
														C = 'msa_s',
														D = 'mspa_s',
														E = 'aa_start',
														F = 'sc_ad_start',
														G = 'video_load',
														H = 'video_start',
														I = 'ad_start';
													d.AdobeAnalyticsPlugin = e;
												})(a.ADB.core, a.ADB.va, a.ADB.va.utils, b),
												(function(a) {
													'use strict';
													var b = {
															SHOW: 'a.media.show',
															SEASON: 'a.media.season',
															EPISODE: 'a.media.episode',
															ASSET_ID: 'a.media.asset',
															GENRE: 'a.media.genre',
															FIRST_AIR_DATE: 'a.media.airDate',
															FIRST_DIGITAL_DATE: 'a.media.digitalDate',
															RATING: 'a.media.rating',
															ORIGINATOR: 'a.media.originator',
															NETWORK: 'a.media.network',
															SHOW_TYPE: 'a.media.type',
															AD_LOAD: 'a.media.adLoad',
															MVPD: 'a.media.pass.mvpd',
															AUTHORIZED: 'a.media.pass.auth',
															DAY_PART: 'a.media.dayPart',
															FEED: 'a.media.feed',
															STREAM_FORMAT: 'a.media.format'
														},
														c = {
															ADVERTISER: 'a.media.ad.advertiser',
															CAMPAIGN_ID: 'a.media.ad.campaign',
															CREATIVE_ID: 'a.media.ad.creative',
															PLACEMENT_ID: 'a.media.ad.placement',
															SITE_ID: 'a.media.ad.site',
															CREATIVE_URL: 'a.media.ad.creativeURL'
														};
													(a.VideoMetadataKeys = b), (a.AdMetadataKeys = c);
												})(b),
												a.ADB.va.plugins.aa || (a.ADB.va.plugins.aa = b);
										})(this);

										// MediaHeartbeat
										!(function(a) {
											!(function(a, b) {
												'use strict';

												function c() {
													(this._processAction = !0), (this._store = {});
												}

												function d(a) {
													if (!a) throw new Error('Reference to the logger object cannot be NULL');
													(this._logger = a), (this._rules = []);
												}
												(c.prototype.setRuleName = function(a) {
													this._ruleName = a;
												}),
													(c.prototype.getRuleName = function(a, b) {
														return this._ruleName;
													}),
													(c.prototype.setData = function(a, b) {
														this._store[a] = b;
													}),
													(c.prototype.getData = function(a) {
														return this._store[a];
													}),
													(c.prototype.shouldProcessAction = function() {
														return this._processAction;
													}),
													(c.prototype.stopProcessingAction = function() {
														this._processAction = !1;
													}),
													(c.prototype.startProcessingAction = function() {
														this._processAction = !0;
													}),
													(d.createContext = function() {
														return new c();
													}),
													(d.createPredicate = function(a, b, c) {
														return {
															fn: a,
															expectedValue: b,
															msg: c
														};
													}),
													(d.prototype.registerRule = function(a, b, c, d, e) {
														this._rules.push({
															name: a,
															desc: b,
															preconditions: c,
															actions: d,
															scope: e
														});
													}),
													(d.prototype.registerEnterExitAction = function(a, b) {
														(this._enterAction = a), (this._exitAction = b);
													}),
													(d.prototype._handleFailure = function(a, b) {
														this._logger.error(e, a.desc + ' -  ' + b.msg);
													}),
													(d.prototype._getRule = function(a) {
														for (var b = 0; b < this._rules.length; ++b)
															if (this._rules[b].name === a) return this._rules[b];
														return null;
													}),
													(d.prototype.processRule = function(a, b) {
														var c = !0,
															f = this._getRule(a);
														if (f) {
															var g = f.scope;
															b || (b = d.createContext()), b.setRuleName(a);
															for (var h = !1, i = 0; i < f.preconditions.length; ++i) {
																var j = f.preconditions[i];
																if ((h = !!j.fn.call(g, b) !== j.expectedValue)) {
																	this._handleFailure(f, j);
																	break;
																}
															}
															if (h) c = !1;
															else {
																b.startProcessingAction(), this._enterAction && this._enterAction.call(g, b);
																for (var i = 0; i < f.actions.length; ++i) {
																	var k = f.actions[i];
																	if (!b.shouldProcessAction()) {
																		this._logger.info(e, 'Stopping actions for ' + f.desc);
																		break;
																	}
																	k.call(g, b);
																}
																this._exitAction && b.shouldProcessAction() && this._exitAction.call(g, b);
															}
														} else this._logger.warn(e, 'No registered event found for ruleName ' + a), (c = !1);
														return c;
													});
												var e = 'RuleEngine';
												b._RuleEngine = d;
											})(a.ADB.core, a.ADB.va),
												(function(a, b) {
													'use strict';

													function c(a, b, c) {
														(this.taskFn = a), (this.scope = b), (this.interval = c), (this.remainingInterval = c);
													}

													function d(a) {
														if (!a) throw new Error('Reference to the logger object cannot be NULL');
														(this._logger = a), (this._tasks = []), (this._pausedTasks = []);
													}
													(c.prototype.elapsedTime = function(a) {
														this.remainingInterval -= a;
													}),
														(c.prototype.shouldExecute = function() {
															return this.remainingInterval <= 0;
														}),
														(c.prototype.execute = function() {
															this.taskFn.call(this.scope);
														}),
														(d.prototype._getCurrentTimeInMS = function() {
															return new Date().getTime();
														}),
														(d.prototype._runTasksForTime = function(a) {
															var b = [],
																c = a - this._lastTickTime;
															this._lastTickTime = a;
															for (var d = 0; d < this._tasks.length; ) {
																var e = this._tasks[d];
																e.elapsedTime(c), e.shouldExecute() ? (b.push(e), this._tasks.splice(d, 1)) : ++d;
															}
															this._checkStopTimer();
															for (var d = 0; d < b.length; ++d) b[d].execute();
														}),
														(d.prototype._onTick = function() {
															var a = this._getCurrentTimeInMS();
															this._runTasksForTime(a);
														}),
														(d.prototype._startTimer = function() {
															var a = this;
															this._timer ||
																(this._logger.info(e, '#startTimer()'),
																(a._lastTickTime = this._getCurrentTimeInMS()),
																(this._timer = window.setInterval(function() {
																	a._onTick();
																}, f)));
														}),
														(d.prototype._stopTimer = function() {
															this._timer &&
																(this._logger.info(e, '#stopTimer()'),
																window.clearInterval(this._timer),
																(this._timer = null));
														}),
														(d.prototype._checkStartTimer = function() {
															this._tasks.length > 0 && this._startTimer();
														}),
														(d.prototype._checkStopTimer = function() {
															0 === this._tasks.length && this._stopTimer();
														}),
														(d.prototype._removeTask = function(a, b) {
															for (var c = 0; c < a.length; ++c) if (a[c] === b) return a.splice(c, 1), !0;
															return !1;
														}),
														(d.prototype.scheduleTask = function(a, b, d) {
															if ((this._logger.info(e, '#scheduleTask()'), !a))
																throw new Error('Reference to the taskFn cannot be NULL');
															var f = new c(a, b, d);
															return this._tasks.push(f), this._checkStartTimer(), f;
														}),
														(d.prototype.cancelTask = function(a) {
															this._logger.info(e, '#cancelTask()'),
																this._removeTask(this._tasks, a),
																this._checkStopTimer();
														}),
														(d.prototype.pauseTask = function(a) {
															this._logger.info(e, '#pauseTask()'),
																this._removeTask(this._tasks, a) && this._pausedTasks.push(a),
																this._checkStopTimer();
														}),
														(d.prototype.resumeTask = function(a) {
															this._logger.info(e, '#resumeTask()'),
																this._removeTask(this._pausedTasks, a) && this._tasks.push(a),
																this._checkStartTimer();
														}),
														(d.prototype.clearTasks = function() {
															this._stopTimer(), (this._tasks = []), (this._pausedTasks = []);
														});
													var e = 'TaskScheduler',
														f = 250;
													b._TaskScheduler = d;
												})(a.ADB.core, a.ADB.va),
												(function(a) {
													'use strict';

													function b() {
														(this.trackingServer = void 0),
															(this.channel = void 0),
															(this.ovp = void 0),
															(this.appVersion = void 0),
															(this.playerName = void 0),
															(this.ssl = !1),
															(this.debugLogging = !1);
													}
													(a.MediaHeartbeatConfig = b), (a.MediaHeartbeatConfig.sharedInstance = new b());
												})(a.ADB.va),
												(function(a) {
													'use strict';

													function b() {
														this.data = {};
													}
													var c = a.plugins.videoplayer.VideoInfo,
														d = a.plugins.videoplayer.AdBreakInfo,
														e = a.plugins.videoplayer.AdInfo,
														f = a.plugins.videoplayer.ChapterInfo,
														g = a.plugins.videoplayer.QoSInfo;
													(b.MEDIAINFO_KEY_NAME = 'a.name'),
														(b.MEDIAINFO_KEY_VIDEOID = 'a.videoId'),
														(b.MEDIAINFO_KEY_ADID = 'a.adId'),
														(b.MEDIAINFO_KEY_LENGTH = 'a.length'),
														(b.MEDIAINFO_KEY_PLAYHEAD = 'a.playhead'),
														(b.MEDIAINFO_KEY_STREAMTYPE = 'a.streamType'),
														(b.MEDIAINFO_KEY_POSITION = 'a.position'),
														(b.MEDIAINFO_KEY_STARTTIME = 'a.startTime'),
														(b.MEDIAINFO_KEY_BITRATE = 'a.bitrate'),
														(b.MEDIAINFO_KEY_FPS = 'a.fps'),
														(b.MEDIAINFO_KEY_DROPPEDFRAMES = 'a.droppedFrames'),
														(b.MEDIAINFO_KEY_STARTUPTIME = 'a.startupTime'),
														(b.MEDIAINFO_KEY_TIMEDMETADATA = 'a.timedMetadata'),
														(b.prototype.setValue = function(a, b) {
															this.data[a] = b;
														}),
														(b.prototype.getValue = function(a) {
															return this.data.hasOwnProperty(a) ? this.data[a] : null;
														}),
														(b.prototype.createVideoInfo = function() {
															var a = new c();
															return (
																(a.id =
																	null != this.getValue(b.MEDIAINFO_KEY_VIDEOID)
																		? this.getValue(b.MEDIAINFO_KEY_VIDEOID)
																		: ''),
																(a.name =
																	null != this.getValue(b.MEDIAINFO_KEY_NAME)
																		? this.getValue(b.MEDIAINFO_KEY_NAME)
																		: ''),
																(a.length =
																	null != this.getValue(b.MEDIAINFO_KEY_LENGTH)
																		? this.getValue(b.MEDIAINFO_KEY_LENGTH)
																		: 0),
																(a.playhead =
																	null != this.getValue(b.MEDIAINFO_KEY_PLAYHEAD)
																		? this.getValue(b.MEDIAINFO_KEY_PLAYHEAD)
																		: 0),
																(a.streamType =
																	null != this.getValue(b.MEDIAINFO_KEY_STREAMTYPE)
																		? this.getValue(b.MEDIAINFO_KEY_STREAMTYPE)
																		: ''),
																a
															);
														}),
														(b.prototype.createAdBreakInfo = function() {
															var a = new d();
															return (
																(a.name =
																	null != this.getValue(b.MEDIAINFO_KEY_NAME)
																		? this.getValue(b.MEDIAINFO_KEY_NAME)
																		: ''),
																(a.position =
																	null != this.getValue(b.MEDIAINFO_KEY_POSITION)
																		? this.getValue(b.MEDIAINFO_KEY_POSITION)
																		: 0),
																(a.startTime =
																	null != this.getValue(b.MEDIAINFO_KEY_STARTTIME)
																		? this.getValue(b.MEDIAINFO_KEY_STARTTIME)
																		: 0),
																a
															);
														}),
														(b.prototype.createAdInfo = function() {
															var a = new e();
															return (
																(a.id =
																	null != this.getValue(b.MEDIAINFO_KEY_ADID)
																		? this.getValue(b.MEDIAINFO_KEY_ADID)
																		: ''),
																(a.name =
																	null != this.getValue(b.MEDIAINFO_KEY_NAME)
																		? this.getValue(b.MEDIAINFO_KEY_NAME)
																		: ''),
																(a.length =
																	null != this.getValue(b.MEDIAINFO_KEY_LENGTH)
																		? this.getValue(b.MEDIAINFO_KEY_LENGTH)
																		: 0),
																(a.position =
																	null != this.getValue(b.MEDIAINFO_KEY_POSITION)
																		? this.getValue(b.MEDIAINFO_KEY_POSITION)
																		: 0),
																a
															);
														}),
														(b.prototype.createChapterInfo = function() {
															var a = new f();
															return (
																(a.name =
																	null != this.getValue(b.MEDIAINFO_KEY_NAME)
																		? this.getValue(b.MEDIAINFO_KEY_NAME)
																		: ''),
																(a.length =
																	null != this.getValue(b.MEDIAINFO_KEY_LENGTH)
																		? this.getValue(b.MEDIAINFO_KEY_LENGTH)
																		: 0),
																(a.startTime =
																	null != this.getValue(b.MEDIAINFO_KEY_STARTTIME)
																		? this.getValue(b.MEDIAINFO_KEY_STARTTIME)
																		: 0),
																(a.position =
																	null != this.getValue(b.MEDIAINFO_KEY_POSITION)
																		? this.getValue(b.MEDIAINFO_KEY_POSITION)
																		: 0),
																a
															);
														}),
														(b.prototype.createQoSInfo = function() {
															var a = new g();
															return (
																(a.bitrate =
																	null != this.getValue(b.MEDIAINFO_KEY_BITRATE)
																		? this.getValue(b.MEDIAINFO_KEY_BITRATE)
																		: 0),
																(a.fps =
																	null != this.getValue(b.MEDIAINFO_KEY_FPS) ? this.getValue(b.MEDIAINFO_KEY_FPS) : 0),
																(a.droppedFrames =
																	null != this.getValue(b.MEDIAINFO_KEY_DROPPEDFRAMES)
																		? this.getValue(b.MEDIAINFO_KEY_DROPPEDFRAMES)
																		: 0),
																(a.startupTime =
																	null != this.getValue(b.MEDIAINFO_KEY_STARTUPTIME)
																		? this.getValue(b.MEDIAINFO_KEY_STARTUPTIME)
																		: 0),
																a
															);
														}),
														(b.prototype.isEqual = function(a) {
															if (this === a) return !0;
															if (!a || 'object' != typeof a || 'function' != typeof a.getValue) return !1;
															for (
																var c = [
																		b.MEDIAINFO_KEY_NAME,
																		b.MEDIAINFO_KEY_VIDEOID,
																		b.MEDIAINFO_KEY_ADID,
																		b.MEDIAINFO_KEY_LENGTH,
																		b.MEDIAINFO_KEY_PLAYHEAD,
																		b.MEDIAINFO_KEY_STREAMTYPE,
																		b.MEDIAINFO_KEY_POSITION,
																		b.MEDIAINFO_KEY_STARTTIME,
																		b.MEDIAINFO_KEY_BITRATE,
																		b.MEDIAINFO_KEY_FPS,
																		b.MEDIAINFO_KEY_DROPPEDFRAMES,
																		b.MEDIAINFO_KEY_STARTUPTIME,
																		b.MEDIAINFO_KEY_TIMEDMETADATA
																	],
																	d = 0;
																d < c.length;
																++d
															) {
																var e = c[d];
																if (this.getValue(e) !== a.getValue(e)) return !1;
															}
															return !0;
														}),
														(a.MediaObject = b);
												})(a.ADB.va),
												(function(a, b) {
													'use strict';

													function c(a) {
														c.__super__.constructor.call(this), (this._heartbeat = a);
													}

													function d(a) {
														d.__super__.constructor.call(this), (this._heartbeat = a);
													}

													function e(a) {
														e.__super__.constructor.call(this), (this._heartbeat = a);
													}

													function f(a) {
														f.__super__.constructor.call(this), (this._heartbeat = a);
													}
													a.extend(c, b.plugins.aa.AdobeAnalyticsPluginDelegate),
														(c.prototype.onError = function(a) {
															this._heartbeat && this._heartbeat._onDelegateError(a);
														}),
														a.extend(d, b.plugins.ah.AdobeHeartbeatPluginDelegate),
														(d.prototype.onError = function(a) {
															this._heartbeat && this._heartbeat._onDelegateError(a);
														}),
														a.extend(e, b.HeartbeatDelegate),
														(e.prototype.onError = function(a) {
															this._heartbeat && this._heartbeat._onDelegateError(a);
														}),
														a.extend(f, b.plugins.videoplayer.VideoPlayerPluginDelegate),
														(f.prototype.getVideoInfo = function() {
															return this._heartbeat && this._heartbeat._videoInfo
																? (this._heartbeat._delegate &&
																		(this._heartbeat._videoInfo.playhead = this._heartbeat._delegate.getCurrentPlaybackTime()),
																  this._heartbeat._videoInfo)
																: null;
														}),
														(f.prototype.getAdBreakInfo = function() {
															return this._heartbeat && this._heartbeat._adBreakInfo
																? this._heartbeat._adBreakInfo
																: null;
														}),
														(f.prototype.getAdInfo = function() {
															return this._heartbeat && this._heartbeat._adInfo ? this._heartbeat._adInfo : null;
														}),
														(f.prototype.getChapterInfo = function() {
															return this._heartbeat && this._heartbeat._chapterInfo
																? this._heartbeat._chapterInfo
																: null;
														}),
														(f.prototype.getQoSInfo = function() {
															if (
																this._heartbeat &&
																this._heartbeat._delegate &&
																this._heartbeat._delegate.getQoSObject()
															) {
																var a = this._heartbeat._delegate.getQoSObject();
																if (a && 'object' == typeof a && a.setValue) return a.createQoSInfo();
															}
															return null;
														}),
														(b._MediaAnalyticsPluginDelegate = c),
														(b._MediaHeartbeatPluginDelegate = d),
														(b._ADBMediaHeartbeatDelegate = e),
														(b._MediaHeartbeatVideoPlayerPluginDelegate = f);
												})(a.ADB.core, a.ADB.va),
												(function(a, b) {
													'use strict';

													function c() {}

													function d(a) {
														d.__super__.constructor.call(this), (this._heartbeat = a);
													}
													var e = b.MediaHeartbeatConfig;
													b.plugins.nielsen &&
														((c.MEDIAHEARTBEAT_NIELSEN_CONTENT_METADATA = 'media_nielsen_content_metadata'),
														(c.MEDIAHEARTBEAT_NIELSEN_AD_METADATA = 'media_nielsen_ad_metadata'),
														(c.MEDIAHEARTBEAT_NIELSEN_CHANNEL_METADATA = 'media_nielsen_channel_metadata'),
														(e.prototype.nielsenConfigKey = void 0),
														(e.prototype.nielsenAppInfo = void 0),
														a.extend(d, b.plugins.nielsen.NielsenPluginDelegate),
														(d.prototype.getMetadataInfo = function() {
															if (this._heartbeat && this._heartbeat._currentMediaObject) {
																var a = this._heartbeat._currentMediaObject.getValue(
																	c.MEDIAHEARTBEAT_NIELSEN_CONTENT_METADATA
																);
																if ('object' == typeof a) return a;
															}
															return null;
														}),
														(d.prototype.getAdMetadataInfo = function() {
															if (this._heartbeat && this._heartbeat._currentAdObject) {
																var a = this._heartbeat._currentAdObject.getValue(c.MEDIAHEARTBEAT_NIELSEN_AD_METADATA);
																if ('object' == typeof a) return a;
															}
															return null;
														}),
														(d.prototype.getChannelInfo = function() {
															if (this._heartbeat && this._heartbeat._currentMediaObject) {
																var a = this._heartbeat._currentMediaObject.getValue(
																	c.MEDIAHEARTBEAT_NIELSEN_CHANNEL_METADATA
																);
																if ('object' == typeof a) return a;
															}
															return null;
														}),
														(d.prototype.onError = function(a) {
															this._heartbeat && this._heartbeat._onDelegateError(a);
														}),
														(b._MediaHeartbeatNielsen = c),
														(b._MediaHeartbeatNielsenPluginDelegate = d));
												})(a.ADB.core, a.ADB.va),
												(function(b, c) {
													'use strict';

													function d() {}

													function e(b, d, e) {
														if (((this._appMeasurement = e || a.s), !this._appMeasurement))
															throw new Error('MediaHeartbeat needs a valid AppMeasurement instance.');
														if (!this._appMeasurement.visitor || !this._appMeasurement.visitor.marketingCloudOrgID)
															throw new Error(
																'MediaHeartbeat needs a valid visitor instance with marketingCloudOrgId set.'
															);
														if (!b) throw new Error('MediaHeartbeat needs a valid delegate object.');
														if (!d || 'object' != typeof d || !d.trackingServer)
															throw new Error('MediaHeartbeat needs a valid config object with trackingServer set.');
														(this._config = d),
															(this._delegate = b),
															(this._debugLogging = c.MediaHeartbeat._debugLogging || this._config.debugLogging),
															(this._logger = new f()),
															this._debugLogging ? this._logger.enable() : this._logger.disable(),
															(this._ruleEngine = new u(this._logger)),
															(this._taskScheduler = new v(this._logger)),
															this._resetState(),
															this._setupRules();
													}
													var f = b.Logger,
														g = c.plugins.videoplayer.AssetType,
														h = c.MediaObject,
														i = c.Heartbeat,
														j = c.HeartbeatConfig,
														k = c._ADBMediaHeartbeatDelegate,
														l = c.plugins.videoplayer.VideoPlayerPlugin,
														m = c.plugins.videoplayer.VideoPlayerPluginConfig,
														n = c._MediaHeartbeatVideoPlayerPluginDelegate,
														o = c.plugins.aa.AdobeAnalyticsPlugin,
														p = c.plugins.aa.AdobeAnalyticsPluginConfig,
														q = c._MediaAnalyticsPluginDelegate,
														r = c.plugins.ah.AdobeHeartbeatPlugin,
														s = c.plugins.ah.AdobeHeartbeatPluginConfig,
														t = c._MediaHeartbeatPluginDelegate,
														u = c._RuleEngine,
														v = c._TaskScheduler,
														w = c.utils.ObjectUtils;
													if (
														((d.prototype.getCurrentPlaybackTime = function() {
															return null;
														}),
														(d.prototype.getQoSObject = function() {
															return null;
														}),
														(e.Event = {
															AdBreakStart: 'adBreakStart',
															AdBreakComplete: 'adBreakComplete',
															AdStart: 'adStart',
															AdComplete: 'adComplete',
															AdSkip: 'adSkip',
															ChapterStart: 'chapterStart',
															ChapterComplete: 'chapterComplete',
															ChapterSkip: 'chapterSkip',
															SeekStart: 'seekStart',
															SeekComplete: 'seekComplete',
															BufferStart: 'bufferStart',
															BufferComplete: 'bufferComplete',
															BitrateChange: 'bitrateChange',
															TimedMetadataUpdate: 'timedMetadataUpdate'
														}),
														(e.StreamType = {
															VOD: 'vod',
															LIVE: 'live',
															LINEAR: 'linear'
														}),
														(e.MediaObjectKey = {
															StandardVideoMetadata: 'media_standard_content_metadata',
															StandardAdMetadata: 'media_standard_ad_metadata',
															VideoResumed: 'resumed',
															PrerollTrackingWaitingTime: 'preroll_tracking_waiting_time'
														}),
														(e.VideoMetadataKeys = c.plugins.aa.VideoMetadataKeys),
														(e.AdMetadataKeys = c.plugins.aa.AdMetadataKeys),
														(e.createMediaObject = function(a, b, c, d) {
															var e = new h();
															e.setValue(h.MEDIAINFO_KEY_VIDEOID, b),
																e.setValue(h.MEDIAINFO_KEY_NAME, a),
																e.setValue(h.MEDIAINFO_KEY_LENGTH, c),
																e.setValue(h.MEDIAINFO_KEY_PLAYHEAD, 0);
															var f = d || g.ASSET_TYPE_VOD;
															return e.setValue(h.MEDIAINFO_KEY_STREAMTYPE, f), e;
														}),
														(e.createAdBreakObject = function(a, b, c) {
															var d = new h();
															return (
																d.setValue(h.MEDIAINFO_KEY_NAME, a),
																d.setValue(h.MEDIAINFO_KEY_POSITION, b),
																d.setValue(h.MEDIAINFO_KEY_STARTTIME, c),
																d
															);
														}),
														(e.createAdObject = function(a, b, c, d) {
															var e = new h();
															return (
																e.setValue(h.MEDIAINFO_KEY_NAME, a),
																e.setValue(h.MEDIAINFO_KEY_ADID, b),
																e.setValue(h.MEDIAINFO_KEY_POSITION, c),
																e.setValue(h.MEDIAINFO_KEY_LENGTH, d),
																e
															);
														}),
														(e.createChapterObject = function(a, b, c, d) {
															var e = new h();
															return (
																e.setValue(h.MEDIAINFO_KEY_NAME, a),
																e.setValue(h.MEDIAINFO_KEY_POSITION, b),
																e.setValue(h.MEDIAINFO_KEY_LENGTH, c),
																e.setValue(h.MEDIAINFO_KEY_STARTTIME, d),
																e
															);
														}),
														(e.createQoSObject = function(a, b, c, d) {
															var e = new h();
															return (
																e.setValue(h.MEDIAINFO_KEY_BITRATE, a),
																e.setValue(h.MEDIAINFO_KEY_FPS, c),
																e.setValue(h.MEDIAINFO_KEY_DROPPEDFRAMES, d),
																e.setValue(h.MEDIAINFO_KEY_STARTUPTIME, b),
																e
															);
														}),
														(e.createTimedMetadataObject = function(a) {
															var b = new h();
															return b.setValue(h.MEDIAINFO_KEY_TIMEDMETADATA, a), b;
														}),
														(e.version = function() {
															return c.Version.getVersion();
														}),
														(e.prototype.trackSessionStart = function(a, b) {
															this._logger.info(B, '#::trackSessionStart()');
															var c = u.createContext();
															c.setData(C, a),
																c.setData(H, this._cleanContextData(b)),
																this._processRule(z.SessionStart, c);
														}),
														(e.prototype.trackPlay = function() {
															this._logger.info(B, '#::trackPlay()'), this._processRule(z.Play);
														}),
														(e.prototype.trackPause = function() {
															this._logger.info(B, '#::trackPause()'), this._processRule(z.Pause);
														}),
														(e.prototype.trackComplete = function() {
															this._logger.info(B, '#::trackComplete()'), this._processRule(z.VideoComplete);
														}),
														(e.prototype.trackSessionEnd = function() {
															this._logger.info(B, '#::trackSessionEnd()'), this._processRule(z.SessionEnd);
														}),
														(e.prototype.trackError = function(a) {
															this._logger.info(B, '#::trackError()');
															var b = u.createContext();
															b.setData(I, a), this._processRule(z.Error, b);
														}),
														(e.prototype.trackEvent = function(a, b, c) {
															this._logger.info(B, '#::trackEvent() - ' + a);
															var d,
																f = u.createContext();
															switch (a) {
																case e.Event.AdBreakStart:
																	f.setData(D, b), f.setData(H, this._cleanContextData(c)), (d = z.AdBreakStart);
																	break;
																case e.Event.AdBreakComplete:
																	d = z.AdBreakComplete;
																	break;
																case e.Event.AdStart:
																	f.setData(E, b), f.setData(H, this._cleanContextData(c)), (d = z.AdStart);
																	break;
																case e.Event.AdComplete:
																	d = z.AdComplete;
																	break;
																case e.Event.AdSkip:
																	d = z.AdSkip;
																	break;
																case e.Event.SeekStart:
																	d = z.SeekStart;
																	break;
																case e.Event.SeekComplete:
																	d = z.SeekComplete;
																	break;
																case e.Event.ChapterStart:
																	f.setData(F, b), f.setData(H, this._cleanContextData(c)), (d = z.ChapterStart);
																	break;
																case e.Event.ChapterComplete:
																	d = z.ChapterComplete;
																	break;
																case e.Event.ChapterSkip:
																	d = z.ChapterSkip;
																	break;
																case e.Event.BufferStart:
																	d = z.BufferStart;
																	break;
																case e.Event.BufferComplete:
																	d = z.BufferComplete;
																	break;
																case e.Event.BitrateChange:
																	d = z.BitrateChange;
																	break;
																case e.Event.TimedMetadataUpdate:
																	(d = z.TimedMetadataUpdate), f.setData(G, b);
																	break;
																default:
																	return void this._logger.error(B, 'Incorrect event name.');
															}
															this._processRule(d, f);
														}),
														c.plugins.nielsen)
													) {
														var x = c._MediaHeartbeatNielsen;
														(e.MediaObjectKey.NielsenContentMetadata = x.MEDIAHEARTBEAT_NIELSEN_CONTENT_METADATA),
															(e.MediaObjectKey.NielsenAdMetadata = x.MEDIAHEARTBEAT_NIELSEN_AD_METADATA),
															(e.MediaObjectKey.NielsenChannelMetadata = x.MEDIAHEARTBEAT_NIELSEN_CHANNEL_METADATA),
															(e.prototype.nielsenLoadMetadata = function(a) {
																this._nielsenPlugin && this._nielsenPlugin.loadMetadata(a);
															});
													}
													(e.prototype._setState = function(a, b) {
														this._mediaState[a] = b;
													}),
														(e.prototype._isInState = function(a) {
															return this._mediaState[a];
														}),
														(e.prototype._isInSession = function(a) {
															return this._isInState(y.Session);
														}),
														(e.prototype._isInMedia = function(a) {
															return this._isInState(y.Media);
														}),
														(e.prototype._isInAd = function(a) {
															return this._isInState(y.Ad);
														}),
														(e.prototype._isInAdBreak = function(a) {
															return this._isInState(y.AdBreak);
														}),
														(e.prototype._isInChapter = function(a) {
															return this._isInState(y.Chapter);
														}),
														(e.prototype._isInPlay = function(a) {
															return this._isInState(y.PlayPause);
														}),
														(e.prototype._isInPause = function(a) {
															return !this._isInState(y.PlayPause);
														}),
														(e.prototype._isInBuffer = function(a) {
															return this._isInState(y.Buffer);
														}),
														(e.prototype._isInSeek = function(a) {
															return this._isInState(y.Seek);
														}),
														(e.prototype._isPlatformTrackingSupported = function(a) {
															return !this._appMeasurement.unsupportedBrowser;
														}),
														(e.prototype._isValidMediaObject = function(a) {
															var b = a.getData(C);
															if (b && b instanceof h) {
																var c = b.getValue(e.MediaObjectKey.VideoResumed);
																null != c &&
																	'boolean' != typeof c &&
																	this._logger.warn(
																		B,
																		'Ignoring value set for MediaHeartbeat.MediaObjectKey.VideoResumed in MediaObject as we expect a boolean value'
																	);
																var d = b.getValue(e.MediaObjectKey.PrerollTrackingWaitingTime);
																if (null != d) {
																	(('string' == typeof d || 'number' == typeof d) && !isNaN(d)) ||
																		this._logger.warn(
																			B,
																			'Ignoring value set for MediaHeartbeat.MediaObjectKey.PrerollTrackingWaitingTime in MediaObject as we expect a valid duration as number in milliseconds.'
																		);
																}
																var f = b.getValue(e.MediaObjectKey.StandardVideoMetadata);
																return (
																	null != f &&
																		'object' != typeof f &&
																		this._logger.warn(
																			B,
																			'Ignoring value set for MediaHeartbeat.MediaObjectKey.StandardVideoMetadata in MediaObject as we expect a valid object with kv pairs.'
																		),
																	!0
																);
															}
															return !1;
														}),
														(e.prototype._isValidAdBreakObject = function(a) {
															var b = a.getData(D);
															return b && b instanceof h;
														}),
														(e.prototype._isDifferentAdBreakObject = function(a) {
															var b = a.getData(D);
															return !(this._currentAdBreakObject && this._currentAdBreakObject.isEqual(b));
														}),
														(e.prototype._isValidAdObject = function(a) {
															var b = a.getData(E);
															if (b && b instanceof h) {
																var c = b.getValue(K);
																null != c &&
																	'boolean' != typeof c &&
																	this._logger.warn(
																		B,
																		'Ignoring value set for MediaHeartbeat.MediaObjectKey.GranularAdTracking in AdObject as we expect a boolean value.'
																	);
																var d = b.getValue(e.MediaObjectKey.StandardAdMetadata);
																return (
																	null != d &&
																		'object' != typeof d &&
																		this._logger.warn(
																			B,
																			'Ignoring value set for MediaHeartbeat.MediaObjectKey.StandardAdMetadata in AdObject as we expect a valid object with kv pairs.'
																		),
																	!0
																);
															}
															return !1;
														}),
														(e.prototype._isDifferentAdObject = function(a) {
															var b = a.getData(E);
															return !(this._currentAdObject && this._currentAdObject.isEqual(b));
														}),
														(e.prototype._isValidChapterObject = function(a) {
															var b = a.getData(F);
															return b && b instanceof h;
														}),
														(e.prototype._isDifferentChapterObject = function(a) {
															var b = a.getData(F);
															return !(this._currentChapterObject && this._currentChapterObject.isEqual(b));
														}),
														(e.prototype._isValidTimedMetadataObject = function(a) {
															var b = a.getData(G);
															if (b && b instanceof h) {
																var c = b.getValue(h.MEDIAINFO_KEY_TIMEDMETADATA);
																return c && 'string' == typeof c;
															}
															return !1;
														}),
														(e.prototype._deferredTrackPlay = function() {
															this._prerollWaitEnabled &&
																(this._logger.info(B, 'Executing deferred API:trackPlay.'),
																(this._prerollWaitEnabled = !1),
																(this._playTaskHandle = null),
																this._processRule(z.Play));
														}),
														(e.prototype._cmdEnterAction = function(a) {
															var b = a.getRuleName();
															if (this._prerollWaitEnabled)
																if (this._playReceived)
																	switch (b) {
																		case z.SeekStart:
																		case z.BufferStart:
																			this._logger.info(
																				B,
																				'Cancelling scheduled API:trackPlay because of SeekStart/BufferStart event'
																			),
																				this._taskScheduler.cancelTask(this._playTaskHandle),
																				(this._playTaskHandle = null);
																			break;
																		case z.SeekComplete:
																		case z.BufferComplete:
																			this._logger.info(
																				B,
																				'Rescheduled API:trackPlay after SeekComplete/BufferComplete event'
																			),
																				(this._playTaskHandle = this._taskScheduler.scheduleTask(
																					this._deferredTrackPlay,
																					this,
																					this._prerollWaitTime
																				));
																			break;
																		case z.Play:
																			this._logger.info(
																				B,
																				'Dropping API:trackPlay as we already have a API:trackPlay scheduled.'
																			),
																				a.stopProcessingAction();
																			break;
																		case z.Pause:
																			this._logger.info(
																				B,
																				'Cancelling scheduled API:trackPlay because of API:trackPause call.'
																			),
																				this._taskScheduler.cancelTask(this._playTaskHandle),
																				(this._playTaskHandle = null),
																				(this._prerollWaitEnabled = !1);
																			break;
																		case z.AdBreakStart:
																			this._logger.info(
																				B,
																				'Received API:trackEvent(AdBreakStart) within ' +
																					this._prerollWaitTime +
																					' ms after API:trackPlay. We will track this as preroll AdBreak.'
																			),
																				this._taskScheduler.cancelTask(this._playTaskHandle),
																				(this._playTaskHandle = null),
																				(this._prerollWaitEnabled = !1),
																				(this._playAfterAdStart = !0);
																	}
																else
																	switch (b) {
																		case z.Play:
																			this._logger.info(
																				B,
																				'Deferring API:trackPlay for ' + this._prerollWaitTime + ' ms.'
																			),
																				(this._playReceived = !0),
																				(this._playTaskHandle = this._taskScheduler.scheduleTask(
																					this._deferredTrackPlay,
																					this,
																					this._prerollWaitTime
																				)),
																				a.stopProcessingAction();
																			break;
																		case z.AdBreakStart:
																			this._logger.info(B, 'Received trackEvent(AdBreakStart) before first trackPlay.'),
																				(this._prerollWaitEnabled = !1);
																	}
														}),
														(e.prototype._cmdExitAction = function(a) {
															var b = a.getRuleName();
															this._playAfterAdStart &&
																(b === z.AdStart
																	? (this._cmdPlay(a), (this._playAfterAdStart = !1))
																	: b === z.AdBreakComplete && (this._playAfterAdStart = !1)),
																b !== z.AdStart || this._isInState(y.FPlayPause) || this._cmdPlay(a);
														}),
														(e.prototype._cmdConfigure = function(a) {
															this._resetState(),
																this._configureAdobeAnalyticsPlugin(),
																this._configureAdobeHearbeatPlugin(),
																this._configureVideoPlayerPlugin(),
																this._configureOtherPlugins(),
																this._configureHeartbeat();
														}),
														(e.prototype._cmdSessionStart = function(a) {
															var b = a.getData(C),
																c = a.getData(H);
															(this._currentMediaObject = b),
																(this._videoInfo = b.createVideoInfo()),
																(this._videoInfo.playerName = this._config.playerName ? this._config.playerName : '');
															var d = b.getValue(e.MediaObjectKey.StandardVideoMetadata);
															d && 'object' == typeof d && (c || (c = {}), w.append(c, this._cleanContextData(d)));
															var f = b.getValue(e.MediaObjectKey.VideoResumed);
															'boolean' == typeof f && (this._videoInfo.resumed = f);
															var g = b.getValue(e.MediaObjectKey.PrerollTrackingWaitingTime);
															('string' != typeof g && 'number' != typeof g) ||
																isNaN(g) ||
																((this._prerollWaitTime = Number(g)),
																this._prerollWaitTime <= 0 && (this._prerollWaitEnabled = !1)),
																this._aaPlugin.setVideoMetadata(c),
																this._playerPlugin.trackVideoLoad(),
																this._playerPlugin.trackSessionStart(),
																this._setState(y.Session, !0),
																this._setState(y.Media, !0);
														}),
														(e.prototype._cmdVideoEnd = function(a) {
															var b = a.getRuleName() === z.VideoComplete;
															if (this._isInState(y.Media)) {
																var c = this._heartbeat,
																	d = this._playerPlugin;
																this._playerPlugin.trackComplete(function() {
																	d && d.trackVideoUnload(), c && c.destroy();
																}, b);
															}
															this._setState(y.Media, !1);
														}),
														(e.prototype._cmdHandleMediaComplete = function(a) {
															this._isInMedia(a) ||
																(this._logger.info(B, 'API:trackComplete has already cleaned up Heartbeat instance.'),
																this._cmdSessionEnd(a),
																a.stopProcessingAction());
														}),
														(e.prototype._cmdSessionEnd = function(a) {
															this._setState(y.Session, !1), this._resetState();
														}),
														(e.prototype._cmdBufferStart = function(a) {
															this._playerPlugin.trackBufferStart(), this._setState(y.Buffer, !0);
														}),
														(e.prototype._cmdBufferComplete = function(a) {
															this._isInState(y.Buffer) && this._playerPlugin.trackBufferComplete(),
																this._setState(y.Buffer, !1);
														}),
														(e.prototype._cmdSeekStart = function(a) {
															this._playerPlugin.trackSeekStart(), this._setState(y.Seek, !0);
														}),
														(e.prototype._cmdSeekComplete = function(a) {
															this._isInState(y.Seek) && this._playerPlugin.trackSeekComplete(),
																this._setState(y.Seek, !1);
														}),
														(e.prototype._cmdPlay = function(a) {
															this._playerPlugin.trackPlay(),
																this._setState(y.PlayPause, !0),
																this._setState(y.FPlayPause, !0);
														}),
														(e.prototype._cmdPause = function(a) {
															this._playerPlugin.trackPause(),
																this._setState(y.PlayPause, !1),
																this._setState(y.FPlayPause, !0);
														}),
														(e.prototype._cmdAdBreakStart = function(a) {
															var b = a.getData(D);
															(this._currentAdBreakObject = b),
																(this._adBreakInfo = b.createAdBreakInfo()),
																(this._adBreakInfo.playerName = this._config.playerName ? this._config.playerName : ''),
																this._setState(y.AdBreak, !0);
														}),
														(e.prototype._cmdAdBreakComplete = function(a) {
															(this._currentAdBreakObject = null),
																(this._adBreakInfo = null),
																this._setState(y.AdBreak, !1);
														}),
														(e.prototype._cmdAdStart = function(a) {
															var b = a.getData(E),
																c = a.getData(H);
															(this._currentAdObject = b), (this._adInfo = b.createAdInfo());
															var d = b.getValue(K);
															'boolean' == typeof d && (this._adInfo.granularTracking = d);
															var f = b.getValue(e.MediaObjectKey.StandardAdMetadata);
															f && 'object' == typeof f && (c || (c = {}), w.append(c, this._cleanContextData(f))),
																this._aaPlugin.setAdMetadata(c),
																this._playerPlugin.trackAdStart(),
																this._setState(y.Ad, !0);
														}),
														(e.prototype._cmdAdComplete = function(a) {
															(this._currentAdObject = null),
																(this._adInfo = null),
																this._isInState(y.Ad) && this._playerPlugin.trackAdComplete(),
																this._setState(y.Ad, !1);
														}),
														(e.prototype._cmdAdSkip = function(a) {
															(this._currentAdObject = null),
																(this._adInfo = null),
																this._isInState(y.Ad) && this._playerPlugin.trackAdSkip(),
																this._setState(y.Ad, !1);
														}),
														(e.prototype._cmdChapterStart = function(a) {
															var b = a.getData(F),
																c = a.getData(H);
															(this._currentChapterObject = b),
																(this._chapterInfo = b.createChapterInfo()),
																this._aaPlugin.setChapterMetadata(c),
																this._playerPlugin.trackChapterStart(),
																this._setState(y.Chapter, !0);
														}),
														(e.prototype._cmdChapterComplete = function(a) {
															(this._currentChapterObject = null),
																(this._chapterInfo = null),
																this._isInState(y.Chapter) && this._playerPlugin.trackChapterComplete(),
																this._setState(y.Chapter, !1);
														}),
														(e.prototype._cmdChapterSkip = function(a) {
															(this._currentChapterObject = null),
																(this._chapterInfo = null),
																this._isInState(y.Chapter) && this._playerPlugin.trackChapterSkip(),
																this._setState(y.Chapter, !1);
														}),
														(e.prototype._cmdError = function(a) {
															var b = a.getData(I);
															b || (b = 'unknown_error_id'), this._playerPlugin.trackVideoPlayerError(b);
														}),
														(e.prototype._cmdBitrate = function(a) {
															this._playerPlugin.trackBitrateChange();
														}),
														(e.prototype._cmdTimedMetadataUpdate = function(a) {
															var b = a.getData(G),
																c = b.getValue(h.MEDIAINFO_KEY_TIMEDMETADATA);
															this._playerPlugin.trackTimedMetadata(c);
														}),
														(e.prototype._processRule = function(a, b) {
															return this._ruleEngine.processRule(a, b);
														}),
														(e.prototype._setupRules = function() {
															this._ruleEngine.registerEnterExitAction(this._cmdEnterAction, this._cmdExitAction),
																this._ruleEngine.registerRule(
																	z.SessionStart,
																	'API:trackSessionStart',
																	[
																		u.createPredicate(this._isPlatformTrackingSupported, !0, A.ErrUnSupportedPlatform),
																		u.createPredicate(this._isInSession, !1, A.ErrInSession),
																		u.createPredicate(this._isValidMediaObject, !0, A.ErrInvalidMediaObject)
																	],
																	[this._cmdConfigure, this._cmdSessionStart],
																	this
																),
																this._ruleEngine.registerRule(
																	z.SessionEnd,
																	'API:trackSessionEnd',
																	[u.createPredicate(this._isInSession, !0, A.ErrNotInSession)],
																	[
																		this._cmdHandleMediaComplete,
																		this._cmdAdSkip,
																		this._cmdAdBreakComplete,
																		this._cmdChapterSkip,
																		this._cmdVideoEnd,
																		this._cmdSessionEnd
																	],
																	this
																),
																this._ruleEngine.registerRule(
																	z.VideoComplete,
																	'API:trackComplete',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia)
																	],
																	[this._cmdAdSkip, this._cmdAdBreakComplete, this._cmdChapterSkip, this._cmdVideoEnd],
																	this
																),
																this._ruleEngine.registerRule(
																	z.Error,
																	'API:trackError',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia)
																	],
																	[this._cmdError],
																	this
																),
																this._ruleEngine.registerRule(
																	z.Play,
																	'API:trackPlay',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia)
																	],
																	[this._cmdSeekComplete, this._cmdBufferComplete, this._cmdPlay],
																	this
																),
																this._ruleEngine.registerRule(
																	z.Pause,
																	'API:trackPause',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInBuffer, !1, A.ErrInBuffer),
																		u.createPredicate(this._isInSeek, !1, A.ErrInSeek)
																	],
																	[this._cmdPause],
																	this
																),
																this._ruleEngine.registerRule(
																	z.BufferStart,
																	'API:trackEvent(BufferStart)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInBuffer, !1, A.ErrInBuffer),
																		u.createPredicate(this._isInSeek, !1, A.ErrInSeek)
																	],
																	[this._cmdBufferStart],
																	this
																),
																this._ruleEngine.registerRule(
																	z.BufferComplete,
																	'API:trackEvent(BufferComplete)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInBuffer, !0, A.ErrNotInBuffer)
																	],
																	[this._cmdBufferComplete],
																	this
																),
																this._ruleEngine.registerRule(
																	z.SeekStart,
																	'API:trackEvent(SeekStart)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInSeek, !1, A.ErrInSeek),
																		u.createPredicate(this._isInBuffer, !1, A.ErrInBuffer)
																	],
																	[this._cmdSeekStart],
																	this
																),
																this._ruleEngine.registerRule(
																	z.SeekComplete,
																	'API:trackEvent(SeekComplete)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInSeek, !0, A.ErrNotInSeek)
																	],
																	[this._cmdSeekComplete],
																	this
																),
																this._ruleEngine.registerRule(
																	z.AdBreakStart,
																	'API:trackEvent(AdBreakStart)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isValidAdBreakObject, !0, A.ErrInvalidAdBreakObject),
																		u.createPredicate(this._isDifferentAdBreakObject, !0, A.ErrDuplicateAdBreakObject)
																	],
																	[this._cmdAdSkip, this._cmdAdBreakComplete, this._cmdAdBreakStart],
																	this
																),
																this._ruleEngine.registerRule(
																	z.AdBreakComplete,
																	'API:trackEvent(AdBreakComplete)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInAdBreak, !0, A.ErrNotInAdBreak)
																	],
																	[this._cmdAdSkip, this._cmdAdBreakComplete],
																	this
																),
																this._ruleEngine.registerRule(
																	z.AdStart,
																	'API:trackEvent(AdStart)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInAdBreak, !0, A.ErrNotInAdBreak),
																		u.createPredicate(this._isValidAdObject, !0, A.ErrInvalidAdObject),
																		u.createPredicate(this._isDifferentAdObject, !0, A.ErrDuplicateAdObject)
																	],
																	[this._cmdAdSkip, this._cmdAdStart],
																	this
																),
																this._ruleEngine.registerRule(
																	z.AdComplete,
																	'API:trackEvent(AdComplete)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInAdBreak, !0, A.ErrNotInAdBreak),
																		u.createPredicate(this._isInAd, !0, A.ErrNotInAd)
																	],
																	[this._cmdAdComplete],
																	this
																),
																this._ruleEngine.registerRule(
																	z.AdSkip,
																	'API:trackEvent(AdSkip)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInAdBreak, !0, A.ErrNotInAdBreak),
																		u.createPredicate(this._isInAd, !0, A.ErrNotInAd)
																	],
																	[this._cmdAdSkip],
																	this
																),
																this._ruleEngine.registerRule(
																	z.ChapterStart,
																	'API:trackEvent(ChapterStart)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isValidChapterObject, !0, A.ErrInvalidChapterObject),
																		u.createPredicate(this._isDifferentChapterObject, !0, A.ErrDuplicateChapterObject)
																	],
																	[this._cmdChapterSkip, this._cmdChapterStart],
																	this
																),
																this._ruleEngine.registerRule(
																	z.ChapterComplete,
																	'API:trackEvent(ChapterComplete)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInChapter, !0, A.ErrNotInChapter)
																	],
																	[this._cmdChapterComplete],
																	this
																),
																this._ruleEngine.registerRule(
																	z.ChapterSkip,
																	'API:trackEvent(ChapterSkip)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(this._isInChapter, !0, A.ErrNotInChapter)
																	],
																	[this._cmdChapterSkip],
																	this
																),
																this._ruleEngine.registerRule(
																	z.BitrateChange,
																	'API:trackEvent(BitrateChange)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia)
																	],
																	[this._cmdBitrate],
																	this
																),
																this._ruleEngine.registerRule(
																	z.TimedMetadataUpdate,
																	'API:trackEvent(TimedMetadataUpdate)',
																	[
																		u.createPredicate(this._isInSession, !0, A.ErrNotInSession),
																		u.createPredicate(this._isInMedia, !0, A.ErrNotInMedia),
																		u.createPredicate(
																			this._isValidTimedMetadataObject,
																			!0,
																			A.ErrInvalidTimedMetadataObject
																		)
																	],
																	[this._cmdTimedMetadataUpdate],
																	this
																);
														}),
														(e.prototype._configureAdobeAnalyticsPlugin = function() {
															this._aaPlugin = new o(this._appMeasurement, new q(this));
															var a = new p();
															(a.channel = this._config.channel ? this._config.channel : ''),
																(a.debugLogging = c.MediaHeartbeat._debugLogging || this._config.debugLogging),
																this._aaPlugin.configure(a),
																this._plugins.push(this._aaPlugin);
														}),
														(e.prototype._configureAdobeHearbeatPlugin = function() {
															var a = this._appMeasurement.visitor
																? this._appMeasurement.visitor.marketingCloudOrgID
																: '';
															this._ahPlugin = new r(new t(this));
															var b = new s(this._config.trackingServer, a);
															(b.debugLogging = c.MediaHeartbeat._debugLogging || this._config.debugLogging),
																(b.ovp = this._config.ovp ? this._config.ovp : ''),
																(b.ssl = this._config.ssl),
																(b.sdk = this._config.appVersion ? this._config.appVersion : '');
															var d = this._primetimeTVSDKVersion();
															d && d.length > 0 && ((b.__primetime = !0), (b.__psdkVersion = d)),
																this._ahPlugin.configure(b),
																this._plugins.push(this._ahPlugin);
														}),
														(e.prototype._configureVideoPlayerPlugin = function() {
															this._playerPlugin = new l(new n(this));
															var a = new m();
															(a.debugLogging = c.MediaHeartbeat._debugLogging || this._config.debugLogging),
																this._playerPlugin.configure(a),
																this._plugins.push(this._playerPlugin);
														}),
														(e.prototype._configureOtherPlugins = function() {
															if (c.plugins.nielsen && this._config.nielsenConfigKey && this._config.nielsenAppInfo) {
																this._nielsenPlugin = new c.plugins.nielsen.NielsenPlugin(
																	new c._MediaHeartbeatNielsenPluginDelegate(this)
																);
																var a = new c.plugins.nielsen.NielsenPluginConfig();
																(a.debugLogging = c.MediaHeartbeat._debugLogging || this._config.debugLogging),
																	(a.appInfo = this._config.nielsenAppInfo),
																	(a.configKey = this._config.nielsenConfigKey),
																	this._nielsenPlugin.configure(a),
																	this._plugins.push(this._nielsenPlugin);
															}
														}),
														(e.prototype._configureHeartbeat = function() {
															var a = new j();
															(a.debugLogging = c.MediaHeartbeat._debugLogging || this._config.debugLogging),
																(this._heartbeat = new i(new k(this), this._plugins)),
																this._heartbeat.configure(a);
														}),
														(e.prototype._resetState = function() {
															this._taskScheduler.clearTasks(),
																(this._mediaState = {}),
																(this._plugins = []),
																(this._playerPlugin = null),
																(this._aaPlugin = null),
																(this._ahPlugin = null),
																(this._nielsenPlugin = null),
																(this._heartbeat = null),
																(this._currentMediaObject = null),
																(this._currentAdBreakObject = null),
																(this._currentAdObject = null),
																(this._currentChapterObject = null),
																(this._videoInfo = null),
																(this._adBreakInfo = null),
																(this._adInfo = null),
																(this._chapterInfo = null),
																(this._prerollWaitEnabled = !0),
																(this._prerollWaitTime = L),
																(this._playReceived = !1),
																(this._playTaskHandle = null),
																(this._playAfterAdStart = !1);
														}),
														(e.prototype._primetimeTVSDKVersion = function() {
															return this._currentMediaObject ? this._currentMediaObject.getValue(J) : null;
														}),
														(e.prototype._cleanContextData = function(a) {
															if (null == a || 'object' != typeof a) return null;
															var b = {};
															for (var c in a)
																if (a.hasOwnProperty(c)) {
																	var d = a[c];
																	('number' != typeof d && 'string' != typeof d && 'boolean' != typeof d) || (b[c] = d);
																}
															return b;
														}),
														(e.prototype._onDelegateError = function(a) {
															this._logger.error(B, a.getMessage() + ' | ' + a.getDetails());
														});
													var y = {
															Session: 0,
															Media: 1,
															AdBreak: 2,
															Ad: 3,
															Chapter: 4,
															PlayPause: 5,
															Buffer: 6,
															Seek: 7,
															FPlayPause: 8
														},
														z = {
															SessionStart: 0,
															SessionEnd: 1,
															VideoComplete: 2,
															Play: 3,
															Pause: 4,
															Error: 5,
															AdBreakStart: 6,
															AdBreakComplete: 7,
															AdStart: 8,
															AdComplete: 9,
															AdSkip: 10,
															ChapterStart: 11,
															ChapterComplete: 12,
															ChapterSkip: 13,
															SeekStart: 14,
															SeekComplete: 15,
															BufferStart: 16,
															BufferComplete: 17,
															BitrateChange: 18,
															TimedMetadataUpdate: 19
														},
														A = {
															ErrUnSupportedPlatform:
																'MediaHeartbeat does not support tracking due to AppMeasurement or VisitorAPI not supporting the browser.',
															ErrNotInSession:
																'MediaHeartbeat is not in active tracking session, call "API:trackSessionStart" to begin a new tracking session.',
															ErrInSession:
																'MediaHeartbeat is in active tracking session, call "API:trackSessionEnd" to end current tracking session.',
															ErrNotInMedia:
																'MediaHeartbeat has completed tracking session, call "API:trackSessionEnd" first to end current session and then begin a new tracking session.',
															ErrInBuffer:
																'MediaHeartbeat is tracking buffer events, call "API:trackEvent(BufferComplete)" first to stop tracking buffer events.',
															ErrNotInBuffer:
																'MediaHeartbeat is not tracking buffer events, call "API:trackEvent(BufferStart)" before "API:trackEvent(BufferComplete)".',
															ErrInSeek:
																'MediaHeartbeat is tracking seek events, call "API:trackEvent(SeekComplete)" first to stop tracking seek events.',
															ErrNotInSeek:
																'MediaHeartbeat is not tracking seek events, call "API:trackEvent(SeekStart)" before "API:trackEvent(SeekComplete)".',
															ErrNotInAdBreak:
																'MediaHeartbeat is not tracking any AdBreak, call "API:trackEvent(AdBreakStart)" to begin tracking AdBreak',
															ErrNotInAd:
																'MediaHeartbeat is not tracking any Ad, call "API:trackEvent(AdStart)" to begin tracking Ad',
															ErrNotInChapter:
																'MediaHeartbeat is not tracking any Chapter, call "API:trackEvent(ChapterStart)" to begin tracking Chapter',
															ErrInvalidMediaObject: 'MediaInfo passed into "API:trackSessionStart" is invalid.',
															ErrInvalidAdBreakObject:
																'AdBreakInfo passed into "API:trackEvent(AdBreakStart)" is invalid.',
															ErrDuplicateAdBreakObject:
																'MediaHeartbeat is currently tracking the AdBreak passed into "API:trackEvent(AdBreakStart)".',
															ErrInvalidAdObject: 'AdInfo passed into "API:trackEvent(AdStart)" is invalid.',
															ErrDuplicateAdObject:
																'MediaHeartbeat is currently tracking the Ad passed into "API:trackEvent(AdStart)".',
															ErrInvalidChapterObject:
																'ChapterInfo passed into "API:trackEvent(ChapterStart)" is invalid.',
															ErrDuplicateChapterObject:
																'MediaHeartbeat is currently tracking the Chapter passed into "API:trackEvent(ChapterStart)".',
															ErrInvalidTimedMetadataObject:
																'TimedMetadata passed into "API:trackEvent(TimedMetadataUpdate)" is invalid.'
														},
														B = 'MediaHeartbeat',
														C = 'key_media_object',
														D = 'key_adbreak_object',
														E = 'key_ad_object',
														F = 'key_chapter_object',
														G = 'key_timed_metadata_object',
														H = 'key_custom_metadata',
														I = 'key_error_id',
														J = 'a.__pttvsdkVersion',
														K = 'granular_ad_tracking',
														L = 250;
													(c._MediaHeartbeatErrorMessage = A),
														(c.MediaHeartbeatDelegate = d),
														(c.MediaHeartbeat = e),
														(c.MediaHeartbeat._debugLogging = !1);
												})(a.ADB.core, a.ADB.va),
												a.ADB || (a.ADB = {}),
												a.ADB.core || (a.ADB.core = core),
												a.ADB.va || (a.ADB.va = va),
												a.ADB.va.plugins || (a.ADB.va.plugins = {});
										})(this);
									}.call(exports));
									return exports.ADB;
								});

								/* Plugin Config */
								s.usePlugins = true;
								s.linkInternalFilters =
									(s.linkInternalFilters ? s.linkInternalFilters + ',' : '') + document.location.hostname;
								window.s_doPlugins = function(s) {
									// to expire cookies
									s.expDate = new Date();
									s.expDate.setDate(s.expDate.getDate() - 1);

									if (!s.pageLoaded) {
										s.pvCount = s.Util.cookieRead('pvv') || '0';
										if (isNaN(s.pvCount)) {
											s.pvCount = 0;
										} else {
											s.pvCount = parseInt(s.pvCount);
										}
										s.Util.cookieWrite('pvv', (s.pvCount + 1).toString());

										if (s.prop58 && s.prop58.indexOf(s.version) == -1) {
											s.prop58 += ':' + s.version;
										}
									}

									if (!s.linkName) {
										// page view
										if (s.prop1) {
											s.prop1 = s.eVar1 = s.getValOnce(s.prop1, 'c1');
										}
									}

									s.events = s.getEvents();

									if (!s.pageLoaded) {
										if (s.Util.cookieRead('c72')) {
											s.prop72 = s.Util.cookieRead('c72');
											s.Util.cookieWrite('c72', '', s.expDate);
										}

										// campaign bounce rate
										s.clickPast(s.campaign, 'event117', 'event118');
									}

									if (s.events && s.events.match(/event3(,|$)/) !== null) {
										s.eVar53 = s.eVar54 = 'D=c69';
										s.eVar55 = s.eVar14 ? 'choose provider' : 'site membership';

										if (s.Util.cookieRead('v13')) {
											s.eVar13 = s.Util.cookieRead('v13');
											s.Util.cookieWrite('v13', '', s.expDate);
										}
									}

									if (s.linkType && s.linkType == 'e') {
										s.prop67 = 'D=pev1';
										s.linkTrackVars = s.apl(s.linkTrackVars, 'prop67', ',', 2);
									}

									s.linkTrackVars = s.apl(s.linkTrackVars, 'channel', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'prop42', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'prop58', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar6', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar42', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar53', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar54', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar58', ',', 2);
									s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar91', ',', 2);
									if (s.contextData) {
										if (s.contextData['a.media.show'] || s.contextData['a.media.season']) {
											s.contextData['a.media.showPlusSeason'] =
												(s.contextData['a.media.show'] || 'not available') +
												':' +
												(s.contextData['a.media.season'] || 'not available');
										}
										for (var x in s.contextData) {
											s.linkTrackVars = s.apl(s.linkTrackVars, 'contextData.' + x, ',', 2);
										}
									}
								};
								s.doPlugins = window.s_doPlugins;

								s.getEvents = function() {
									var s = this;

									var evts = [];
									if (s.linkName) {
										if (s.linkName == 'authentication success') {
											evts.push('event3');
										} else if (s.linkName == 'change profile language') {
											evts.push('event16');
										} else if (s.linkName == 'change playback language') {
											evts.push('event17');
										} else if (s.linkName == 'add to favourites') {
											evts.push('event20');
										} else if (s.linkName == 'remove from favourites') {
											evts.push('event54');
										} else if (s.linkName == 'episode list click') {
											evts.push('event55');
										} else if (s.linkName == 'registration success') {
											evts.push('event63');
										} else if (s.linkName == 'login problems click') {
											evts.push('event65');
										} else if (s.linkName == 'password problems click') {
											evts.push('event66');
										} else if (s.linkName == 'subscription purchase') {
											evts.push('event69');
											evts.push('event' + (s.eVar12 == 'logged in' ? '81' : '78'));
										} else if (s.linkName == 'gift redemption success') {
											evts.push('event75');
										} else if (s.linkName == 'authentication error') {
											evts.push('event109');
										}
									} else {
										if (s.pageName == 'crave:login' || s.pageName == 'crave:login:choose method') {
											evts.push('event32');
										}
										if (s.prop1) {
											evts.push('event59');
										}
										if (s.prop21) {
											evts.push('event115');
										}

										if (!s.pvCount && s.eVar11) {
											evts.push('event4');
										}

										if (
											window.digitalData &&
											digitalData.eventData &&
											digitalData.eventData.name &&
											digitalData.eventData.name == 'authentication success' &&
											window.savedUserData
										) {
											evts.push('event3');
										}
									}

									if (s.linkName) {
										for (var i = 0; i < evts.length; i++) {
											s.linkTrackEvents = s.apl(s.linkTrackEvents, evts[i], ',', 2);
										}
										s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
									}

									return evts.join(',');
								};

								/*
								 * Plugin Utility: apl v1.1 (modified for AppMeasurement library)
								 */
								s.apl = new Function(
									'l',
									'v',
									'd',
									'u',
									'' +
										"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a." +
										'length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas' +
										'e()));}}if(!m)l=l?l+d+v:v;return l'
								);

								/*
								 * Plugin: getValOnce v1.0
								 */
								s.getValOnce = new Function(
									'v',
									'c',
									'e',
									'' +
										"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c" +
										');if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return' +
										" v==k?'':v"
								);

								/*
								 * Plugin: getPreviousValue_v1.0 - return previous value of designated
								 *   variable (requires split utility)
								 */
								s.getPreviousValue = new Function(
									'v',
									'c',
									'el',
									'' +
										"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
										"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
										'){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)' +
										":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" +
										"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
								);

								/*
								 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
								 */
								s.split = new Function(
									'l',
									'd',
									'' +
										'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
										'++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
								);

								/*
								 * Function p_fo(x,y): Ensures the plugin code is fired only on the
								 *      first call of do_plugins
								 */
								s.p_fo = new Function(
									'n',
									'' +
										'var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=' +
										'new Object;return 1;}else {return 0;}'
								);

								/*
								 * s.join: 1.0 - s.join(v,p)
								 *  v - Array (may also be array of array)
								 *  p - formatting parameters (front, back, delim, wrap)
								 */
								s.join = new Function(
									'v',
									'p',
									'' +
										"var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" +
										":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" +
										";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" +
										'se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;'
								);

								/*
								 * Plugin: clickPast - version 1.0
								 */
								s.clickPast = new Function(
									'scp',
									'ct_ev',
									'cp_ev',
									'cpc',
									'' +
										'var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)' +
										"{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev" +
										';s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc' +
										',0,0);}}}'
								);
							}
						}
					},
					libraryCode: {
						type: 'managed',
						company: 'bellme0',
						accounts: {
							staging: ['bellmediacravedev'],
							production: ['bellmediacravedev'],
							development: ['bellmediacravedev']
						},
						scopeTrackerGlobally: true
					},
					trackerProperties: {
						charSet: 'UTF-8',
						currencyCode: 'USD',
						trackingServer: 'bellmedia.sc.omtrdc.net',
						trackInlineStats: true,
						trackDownloadLinks: true,
						trackExternalLinks: true,
						linkInternalFilters: ['bellmedia.ca', 'cravetv.ca', 'crave.ca'],
						linkDownloadFileTypes: [
							'doc',
							'docx',
							'eps',
							'jpg',
							'png',
							'svg',
							'xls',
							'ppt',
							'pptx',
							'pdf',
							'xlsx',
							'tab',
							'csv',
							'zip',
							'txt',
							'vsd',
							'vxd',
							'xml',
							'js',
							'css',
							'rar',
							'exe',
							'wma',
							'mov',
							'avi',
							'wmv',
							'mp3',
							'wav',
							'm4v'
						]
					}
				},
				hostedLibFilesBaseUrl: '/launch/28200064b0a4/hostedLibFiles/EP5e9ec493dfa0465eaa797b523b09d3f7/'
			},
			core: {
				displayName: 'Core',
				modules: {
					'core/src/lib/dataElements/javascriptVariable.js': {
						name: 'javascript-variable',
						displayName: 'JavaScript Variable',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';
							var getObjectProperty = require('../helpers/getObjectProperty.js');

							/**
							 * The variable data element.
							 * @param {Object} settings The data element settings object.
							 * @param {string} settings.path The global path to the variable holding the data element value.
							 * @returns {string}
							 */
							module.exports = function(settings) {
								return getObjectProperty(window, settings.path);
							};
						}
					},
					'core/src/lib/dataElements/customCode.js': {
						name: 'custom-code',
						displayName: 'Custom Code',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							/**
							 * The custom data element.
							 * @param {Object} settings The data element settings object.
							 * @param {string} settings.source The function that should be called which will return a value.
							 * @param {string} event The event (if any) that triggered the evaluation of the data element.
							 * @returns {string}
							 */
							module.exports = function(settings, event) {
								return settings.source(event);
							};
						}
					},
					'core/src/lib/dataElements/queryStringParameter.js': {
						name: 'query-string-parameter',
						displayName: 'Query String Parameter',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var window = require('@adobe/reactor-window');
							var queryString = require('@adobe/reactor-query-string');

							/**
							 * The query string parameter data element.
							 * @param {Object} settings The data element settings object.
							 * @param {string} settings.name The query string parameter name.
							 * @param {string} [settings.caseInsensitive] Whether casing should be ignored.
							 * @returns {string}
							 */
							module.exports = function(settings) {
								var queryParams = queryString.parse(window.location.search);

								if (settings.caseInsensitive) {
									var lowerCaseName = settings.name.toLowerCase();
									var keys = Object.keys(queryParams);
									for (var i = 0; i < keys.length; i++) {
										var key = keys[i];
										if (key.toLowerCase() === lowerCaseName) {
											return queryParams[key];
										}
									}
								} else {
									return queryParams[settings.name];
								}
							};
						}
					},
					'core/src/lib/dataElements/pageInfo.js': {
						name: 'page-info',
						displayName: 'Page Info',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var document = require('@adobe/reactor-document');

							/**
							 * The page info data element.
							 * @param {Object} settings The data element settings object.
							 * @param {string} settings.attribute The attribute that should be returned.
							 * @returns {string}
							 */
							module.exports = function(settings) {
								switch (settings.attribute) {
									case 'url':
										return document.location.href;
									case 'hostname':
										return document.location.hostname;
									case 'pathname':
										return document.location.pathname;
									case 'protocol':
										return document.location.protocol;
									case 'referrer':
										return document.referrer;
									case 'title':
										return document.title;
								}
							};
						}
					},
					'core/src/lib/events/directCall.js': {
						name: 'direct-call',
						displayName: 'Direct Call',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							/**
							 * Object where the key is the call name and the value is an array of all rule trigger functions
							 * for that call name.
							 * @type {Object}
							 */
							var triggersByIdentifier = {};

							window._satellite = window._satellite || {};

							/**
							 * Public function intended to be called by the user.
							 * @param {string} identifier The identifier passed to _satellite.track().
							 * @param {*} [detail] Any detail that should be passed along to conditions and actions.
							 */
							window._satellite.track = function(identifier, detail) {
								identifier = identifier.trim();
								var triggers = triggersByIdentifier[identifier];
								if (triggers) {
									var syntheticEvent = {
										identifier: identifier,
										detail: detail
									};

									triggers.forEach(function(trigger) {
										trigger(syntheticEvent);
									});

									var logMessage =
										'Rules using the direct call event type with identifier "' +
										identifier +
										'" have been triggered' +
										(detail ? ' with additional detail:' : '.');
									var logArgs = [logMessage];

									if (detail) {
										logArgs.push(detail);
									}

									turbine.logger.log.apply(turbine.logger, logArgs);
								} else {
									turbine.logger.log('"' + identifier + '" does not match any direct call identifiers.');
								}
							};

							/**
							 * Direct call event. This event occurs as soon as the user calls _satellite.track().
							 * @param {Object} settings The event settings object.
							 * @param {string} settings.identifier The identifier passed to _satellite.track().
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								var triggers = triggersByIdentifier[settings.identifier];

								if (!triggers) {
									triggers = triggersByIdentifier[settings.identifier] = [];
								}

								triggers.push(trigger);
							};
						}
					},
					'core/src/lib/events/customEvent.js': {
						name: 'custom-event',
						displayName: 'Custom Event',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';
							var bubbly = require('./helpers/createBubbly')();

							var typesWatched = [];

							/**
							 * The custom event. When an event is seen with the specified type, the rule will be executed.
							 * @param {Object} settings The event settings object.
							 * @param {string} settings.type The custom event type.
							 * @param {string} [settings.elementSelector] The CSS selector the element must match in order for
							 * the rule to fire.
							 * @param {Object[]} [settings.elementProperties] Property values the element must have in order
							 * for the rule to fire.
							 * @param {string} settings.elementProperties[].name The property name.
							 * @param {string} settings.elementProperties[].value The property value.
							 * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
							 * on the object instance is intended to be a regular expression.
							 * @param {boolean} [settings.bubbleFireIfParent=true] Whether the rule should fire if
							 * the event originated from a descendant element.
							 * @param {boolean} [settings.bubbleFireIfChildFired=true] Whether the rule should fire
							 * if the same event has already triggered a rule targeting a descendant element.
							 * @param {boolean} [settings.bubbleStop=false] Whether the event should not trigger
							 * rules on ancestor elements.
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								var type = settings.type;

								if (typesWatched.indexOf(type) === -1) {
									typesWatched.push(type);
									window.addEventListener(type, bubbly.evaluateEvent, true);
								}

								bubbly.addListener(settings, function(event) {
									if (event.nativeEvent.type === type) {
										// Copying detail up to the top-level makes it easier for users to consume and
										// makes it backward-compatible with DTM.
										event.detail = event.nativeEvent.detail;
										trigger(event);
									}
								});
							};
						}
					},
					'core/src/lib/conditions/path.js': {
						name: 'path',
						displayName: 'Path Without Query String',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var document = require('@adobe/reactor-document');
							var textMatch = require('../helpers/textMatch');

							/**
							 * Path condition. Determines if the actual path matches at least one acceptable path.
							 * @param {Object} settings Condition settings.
							 * @param {Object[]} settings.paths Acceptable paths.
							 * @param {string} settings.paths[].value An acceptable path value.
							 * @param {boolean} [settings.paths[].valueIsRegex=false] Whether <code>value</code> on the object
							 * instance is intended to be a regular expression.
							 * @returns {boolean}
							 */
							module.exports = function(settings) {
								var path = document.location.pathname;
								return settings.paths.some(function(acceptablePath) {
									var acceptableValue = acceptablePath.valueIsRegex
										? new RegExp(acceptablePath.value, 'i')
										: acceptablePath.value;
									return textMatch(path, acceptableValue);
								});
							};
						}
					},
					'core/src/lib/actions/customCode.js': {
						name: 'custom-code',
						displayName: 'Custom Code',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var document = require('@adobe/reactor-document');
							var decorateCode = require('./helpers/decorateCode');
							var loadCodeSequentially = require('./helpers/loadCodeSequentially');
							var postscribe = require('../../../node_modules/postscribe/dist/postscribe');
							var extensionSettings = turbine.getExtensionSettings();

							var postscribeWrite = (function() {
								var write = function(source) {
									postscribe(document.body, source, {
										beforeWriteToken: function(tag) {
											if (extensionSettings.cspNonce && tag.tagName === 'script') {
												tag.attrs.nonce = extensionSettings.cspNonce;
											}
											return tag;
										},
										error: function(error) {
											turbine.logger.error(error.msg);
										}
									});
								};

								var queue = [];

								// If the Launch library is loaded asynchronously, it may finish loading before document.body
								// is available. This means the custom code action may be running before document.body is
								// available, in which case can't write the custom code to document.body. We could, in this
								// case, write it to document.head since it will for sure be available, but the user's custom
								// code may have something like an img tag for sending a beacon (this use case was seen in DTM).
								// Adding display elements like an img tag to document.head is against HTML spec, though it
								// does seem like an image request is still made. We opted instead to ensure we comply with
								// HTML spec and wait until we see that document.body is available before writing.
								var flushQueue = function() {
									if (document.body) {
										while (queue.length) {
											write(queue.shift());
										}
									} else {
										// 20 is an arbitrarily small amount of time but not too aggressive.
										setTimeout(flushQueue, 20);
									}
								};

								return function(source) {
									queue.push(source);
									flushQueue();
								};
							})();

							var libraryWasLoadedAsynchronously = (function() {
								// document.currentScript is not supported by IE
								if (document.currentScript) {
									return document.currentScript.async;
								} else {
									var scripts = document.querySelectorAll('script');
									for (var i = 0; i < scripts.length; i++) {
										var script = scripts[i];
										// Find the script that loaded our library. Take into account embed scripts migrated
										// from DTM. We'll also consider that they may have added a querystring for cache-busting
										// or whatever.
										if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(script.src)) {
											return script.async;
										}
									}
									// We couldn't find the Launch script, so we'll assume it was loaded asynchronously. This
									// is the safer assumption.
									return true;
								}
							})();

							/**
							 * The custom code action. This loads and executes custom JavaScript or HTML provided by the user.
							 * @param {Object} settings Action settings.
							 * @params {boolean} settings.isExternal When true, <code>settings.source</code> contains the
							 * code itself. When false, <code>settings.source</code> contains a relative path to the file
							 * containing the user's code.
							 * @param {string} settings.source If <code>settings.external</code> is <code>false</code>,
							 * this will be the user's code. Otherwise, it will be a relative path to the file containing
							 * the user's code.
							 * @param {string} settings.language The language of the user's code. Must be either javascript or
							 * html.
							 * @param {Object} event The underlying event object that triggered the rule.
							 * @param {Object} event.element The element that the rule was targeting.
							 * @param {Object} event.target The element on which the event occurred.
							 * <code>javascript</code> or <code>html</code>.
							 */
							module.exports = function(settings, event) {
								var action = {
									settings: settings,
									event: event
								};

								var source = action.settings.source;
								if (!source) {
									return;
								}

								if (action.settings.isExternal) {
									return loadCodeSequentially(source).then(function(source) {
										if (source) {
											postscribeWrite(decorateCode(action, source));
										}
									});
								} else {
									// This area has been modified several times, so here are some helpful details:
									// 1. Custom code will be included into the main launch library if it's for a rule that uses the
									//    Library Loaded or Page Bottom event. isExternal will be false. However, keep in mind that
									//    the same rule may have other events that are not Library Loaded or Page Bottom. This means
									//    we could see isExternal = false on the action when the event that fired the rule is
									//    a click, for example.
									// 2. When users load a library synchronously which has a rule using the Library Loaded
									//    or Page Bottom event with a Custom Code action, they expect the custom code to be written
									//    to the document in a blocking fashion (prevent the parser from continuing until their
									//    custom code is executed). In other words, they expect document.write to be used. When
									//    the library is loaded asynchronously, they do not have this expectation. However, note
									//    that if the Library Loaded event is used and the website does not call
									//    _satellite.pageBottom(), page bottom rules will be run when the DOMContentLoaded event
									//    is fired (at which point we can't use document.write or it will wipe out website content).
									// 3. Calls to document.write will be ignored by the browser if the Launch library is loaded
									//    asynchronously, even if the calls are made before DOMContentLoaded.
									// 4. There's a bug in IE 10 where readyState is sometimes set to "interactive" too
									//    early (before DOMContentLoaded has fired). https://bugs.jquery.com/ticket/12282
									//    This may cause Postscribe to be used sometimes when document.write() could have been
									//    used instead, but we have concluded that IE 10 usage is low enough and the risk small
									//    enough that this behavior is tolerable.
									if (!libraryWasLoadedAsynchronously && document.readyState === 'loading') {
										// Document object in XML files is different from the ones in HTML files. Documents served
										// with the `application/xhtml+xml` MIME type don't have the `document.write` method.
										// More info:
										// https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite
										// https://developer.mozilla.org/en-US/docs/Archive/Web/Writing_JavaScript_for_HTML
										if (document.write) {
											document.write(decorateCode(action, source));
										} else {
											postscribeWrite(decorateCode(action, source));
										}
									} else {
										postscribeWrite(decorateCode(action, source));
									}
								}
							};
						}
					},
					'core/src/lib/events/pageBottom.js': {
						name: 'page-bottom',
						displayName: 'Page Bottom',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

							/**
							 * Page bottom event. This event occurs as soon as the user calls _satellite.pageBottom() (which is
							 * supposed to be at the bottom of the page).
							 * @param {Object} settings The event settings object.
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								pageLifecycleEvents.registerPageBottomTrigger(trigger);
							};
						}
					},
					'core/src/lib/events/mousedown.js': {
						name: 'mousedown',
						displayName: 'Mousedown',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';
							var bubbly = require('./helpers/createBubbly')();

							document.addEventListener('mousedown', bubbly.evaluateEvent, true);

							/**
							 * The mousedown event. This event occurs when a user has moused down on an element.
							 * @param {Object} settings The event settings object.
							 * @param {string} [settings.elementSelector] The CSS selector the element must match in order for
							 * the rule to fire.
							 * @param {Object[]} [settings.elementProperties] Property values the element must have in order
							 * for the rule to fire.
							 * @param {string} settings.elementProperties[].name The property name.
							 * @param {string} settings.elementProperties[].value The property value.
							 * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
							 * on the object instance is intended to be a regular expression.
							 * @param {boolean} [settings.bubbleFireIfParent=true] Whether the rule should fire if
							 * the event originated from a descendant element.
							 * @param {boolean} [settings.bubbleFireIfChildFired=true] Whether the rule should fire
							 * if the same event has already triggered a rule targeting a descendant element.
							 * @param {boolean} [settings.bubbleStop=false] Whether the event should not trigger
							 * rules on ancestor elements.
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								bubbly.addListener(settings, trigger);
							};
						}
					},
					'core/src/lib/events/domReady.js': {
						name: 'dom-ready',
						displayName: 'DOM Ready',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

							/**
							 * DOM ready event. This event occurs as soon as HTML document has been completely loaded and
							 * parsed, without waiting for stylesheets, images, and subframes to finish loading.
							 * @param {Object} settings The event settings object.
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								pageLifecycleEvents.registerDomReadyTrigger(trigger);
							};
						}
					},
					'core/src/lib/events/libraryLoaded.js': {
						name: 'library-loaded',
						displayName: 'Library Loaded (Page Top)',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

							/**
							 * Library loaded event. This event occurs as soon as the runtime library is loaded.
							 * @param {Object} settings The event settings object.
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								pageLifecycleEvents.registerLibraryLoadedTrigger(trigger);
							};
						}
					},
					'core/src/lib/events/windowLoaded.js': {
						name: 'window-loaded',
						displayName: 'Window Loaded',
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

							/**
							 * Window loaded event. This event occurs at the end of the document loading process. At this point,
							 * all of the objects in the document are loaded in the DOM, and all images, scripts, links,
							 * and sub-frames have finished loading.
							 * @param {Object} settings The event settings object.
							 * @param {ruleTrigger} trigger The trigger callback.
							 */
							module.exports = function(settings, trigger) {
								pageLifecycleEvents.registerWindowLoadedTrigger(trigger);
							};
						}
					},
					'core/src/lib/helpers/getObjectProperty.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							/**
							 * Returns the deep property value of an object.
							 * @param obj The object where the property will be searched.
							 * @param property The property name to be returned. It can contain dots. (eg. prop.subprop1)
							 * @returns {*}
							 */
							module.exports = function(obj, property) {
								var propertyChain = property.split('.');
								var currentValue = obj;

								for (var i = 0, len = propertyChain.length; i < len; i++) {
									if (currentValue == null) {
										return undefined;
									}

									currentValue = currentValue[propertyChain[i]];
								}

								return currentValue;
							};
						}
					},
					'core/src/lib/events/helpers/createBubbly.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var WeakMap = require('./weakMap');
							var matchesProperties = require('./matchesProperties');
							var matchesSelector = require('./matchesSelector');

							// Note to developers of other extensions:
							// This module largely exists to support advanced bubbling options
							// that were carried over to Launch from DTM. It is highly unlikely
							// that you need to support these options in your own extension.
							// As such, please only copy this code if you know why you're doing so
							// and feel you have a justifiable reason.

							/**
							 * Handles logic related to bubbling options provided for many event types.
							 */
							module.exports = function() {
								var listeners = [];

								// It's important that a new weak map is created for each instance of bubbly in order to store
								// whether this particular bubbly instance has processed the event. More than one instance of
								// bubbly may process an event. No instance of bubbly should process an event more than once.
								var processedEvents = new WeakMap();

								var bubbly = {
									/**
									 * Register a config object that should be evaluated for an event to determine if a rule
									 * should be executed. If it should be executed, the callback function will be called.
									 * @param {Object} settings The event config object.
									 * @param {string} [settings.elementSelector] The CSS selector the element must match in order
									 * for the rule to fire.
									 * @param {Object[]} [settings.elementProperties] Property values the element must have in order
									 * for the rule to fire.
									 * @param {string} settings.elementProperties[].name The property name.
									 * @param {string} settings.elementProperties[].value The property value.
									 * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
									 * on the object instance is intended to be a regular expression.
									 * @param {boolean} [settings.bubbleFireIfParent=true] Whether the rule should fire if the
									 * event originated from a descendant element.
									 * @param {boolean} [settings.bubbleFireIfChildFired=true] Whether the rule should fire if the
									 * same event has already triggered a rule targeting a descendant element.
									 * @param {boolean} [settings.bubbleStop=false] Whether the event should not trigger rules on
									 * ancestor elements.
									 * @param {Function} callback The function to be called when a matching event is seen. If the
									 * callback does not end up triggering a rule, the callback should explicitly return false.
									 */
									addListener: function(settings, callback) {
										listeners.push({
											settings: settings,
											callback: callback
										});
									},
									/**
									 * Evaluate an event to determine if any rule targeting elements in the event target's DOM
									 * hierarchy should be executed. Note that event.type is not inspected. This assumes that
									 * all registered listeners care about this particular event type.
									 * @param {Event} event The event that has occurred.
									 * @param {HTMLElement} event.target The HTML element where the event originated.
									 * @param {boolean} [eventIsSynthetic] Whether the event passed in is synthetic (instead of
									 * native).
									 */
									evaluateEvent: function(event, eventIsSynthetic) {
										if (!listeners.length) {
											return;
										}

										// When an event is handled it is evaluated a single time but checks out which rules are
										// targeting elements starting at the target node and looking all the way up the element
										// hierarchy. This should only happen once regardless of how many listeners exist for the
										// event.
										if (processedEvents.has(event)) {
											return;
										}

										var node = event.target;
										var childHasTriggeredRule = false;

										// Loop through from the event target up through the hierarchy evaluating each node
										// to see if it matches any rules.
										while (node) {
											var preventEvaluationOnAncestors = false;

											var nodeTriggeredRule = false;

											// Just because this could be processed a lot, we'll use a for loop instead of forEach.
											for (var i = 0; i < listeners.length; i++) {
												var listener = listeners[i];
												var elementSelector = listener.settings.elementSelector;
												var elementProperties = listener.settings.elementProperties;

												// bubbleFireIfChildFired should be considered true by default
												if (listener.settings.bubbleFireIfChildFired === false && childHasTriggeredRule) {
													continue;
												}

												// bubbleFireIfParent should be considered true by default
												if (node !== event.target && listener.settings.bubbleFireIfParent === false) {
													continue;
												}

												// If the user didn't specify elementSelector or elementProperties then they want the
												// rule to run whenever the event occurs on any element. They don't intend for the
												// rule to run for every node in the element hierarchy though.
												if (
													node !== event.target &&
													!elementSelector &&
													(!elementProperties || !Object.keys(elementProperties).length)
												) {
													continue;
												}

												if (elementSelector && !matchesSelector(node, elementSelector)) {
													continue;
												}

												if (elementProperties && !matchesProperties(node, elementProperties)) {
													continue;
												}

												var syntheticEventForCallback = {};

												// We'll attach relevant data depending on whether the passed in event is synthetic
												// or native.
												if (eventIsSynthetic) {
													Object.keys(event).forEach(function(key) {
														syntheticEventForCallback[key] = event[key];
													});
												} else {
													syntheticEventForCallback.nativeEvent = event;
												}

												syntheticEventForCallback.element = node;
												syntheticEventForCallback.target = event.target;

												var callbackResponse = listener.callback(syntheticEventForCallback);

												// The callback should return false if it didn't end up triggering a rule.
												var ruleTriggered = callbackResponse !== false;

												if (ruleTriggered) {
													nodeTriggeredRule = true;

													if (listener.settings.bubbleStop) {
														preventEvaluationOnAncestors = true;
													}
												}
											}

											if (preventEvaluationOnAncestors) {
												break;
											}

											if (nodeTriggeredRule) {
												childHasTriggeredRule = true;
											}

											node = node.parentNode;
										}

										processedEvents.set(event, true);
									}
								};

								/**
								 * @private
								 * Clears all listeners. This should only be used in tests.
								 */
								bubbly.__reset = function() {
									listeners = [];
								};

								return bubbly;
							};
						}
					},
					'core/src/lib/events/helpers/weakMap.js': {
						script: function(module, exports, require, turbine) {
							/**
							 * @license
							 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
							 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
							 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
							 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
							 * Code distributed by Google as part of the polymer project is also
							 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
							 */
							// This is copied from
							// https://github.com/webcomponents/webcomponentsjs/blob/7dc6731eb9c9f9c3fea4419c50c6ee3ca0367544/src/WeakMap/WeakMap.js
							// because there's not an npm package that makes it easy to import only WeakMap. We've also
							// modified it slightly so that it doesn't ever set window.WeakMap.

							'use strict';

							var window = require('@adobe/reactor-window');
							var WeakMap = window.WeakMap;

							if (typeof WeakMap === 'undefined') {
								var defineProperty = Object.defineProperty;
								var counter = Date.now() % 1e9;

								WeakMap = function() {
									this.name = '__st' + ((Math.random() * 1e9) >>> 0) + (counter++ + '__');
								};

								WeakMap.prototype = {
									set: function(key, value) {
										var entry = key[this.name];
										if (entry && entry[0] === key) entry[1] = value;
										else defineProperty(key, this.name, { value: [key, value], writable: true });
										return this;
									},
									get: function(key) {
										var entry;
										return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
									},
									delete: function(key) {
										var entry = key[this.name];
										if (!entry || entry[0] !== key) return false;
										entry[0] = entry[1] = undefined;
										return true;
									},
									has: function(key) {
										var entry = key[this.name];
										if (!entry) return false;
										return entry[0] === key;
									}
								};
							}

							module.exports = WeakMap;
						}
					},
					'core/src/lib/events/helpers/matchesProperties.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var textMatch = require('./../../helpers/textMatch');

							var getElementProperty = function(element, property) {
								if (property === '@text' || property === 'innerText') {
									return element.textContent || element.innerText;
								} else if (property in element) {
									return element[property];
								} else if (element.getAttribute) {
									return element.getAttribute(property);
								}
							};

							/**
							 * Determines whether an element's properties and their values match a set of properties and values.
							 * If the element doesn't have the property, the element's attribute with the same name will be
							 * evaluated if it exists.
							 * @param {HTMLElement} element The element to match against.
							 * @param {Object[]} properties The criteria of properties to match again.
							 * @param {string} properties.name The property name.
							 * @param {string} properties.value The property value.
							 * @param {boolean} [properties.valueIsRegex=false] Whether <code>value</code> on the
							 * object instance is intended to be a regular expression.
							 * @returns {boolean} Whether the element matches the criteria.
							 */
							module.exports = function(element, properties) {
								if (properties) {
									return properties.every(function(property) {
										var actualValue = getElementProperty(element, property.name);
										var criterionValue = property.valueIsRegex ? new RegExp(property.value, 'i') : property.value;
										return textMatch(actualValue, criterionValue);
									});
								}
								return true;
							};
						}
					},
					'core/src/lib/events/helpers/matchesSelector.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							/**
							 * Returns whether an element matches a selector.
							 * @param {HTMLElement} element The HTML element being tested.
							 * @param {string} selector The CSS selector.
							 * @returns {boolean}
							 */
							module.exports = function(element, selector) {
								var matches = element.matches || element.msMatchesSelector;

								if (matches) {
									try {
										return matches.call(element, selector);
									} catch (error) {
										turbine.logger.warn('Matching element failed. ' + selector + ' is not a valid selector.');
										return false;
									}
								}

								return false;
							};
						}
					},
					'core/src/lib/helpers/textMatch.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							/**
							 * Performs a string match based on another string or a regex.
							 * @param {string} str The string to be evaluate.
							 * @param {string|RegExp} pattern The pattern to match against.
							 * @returns {boolean} Whether the string matches the pattern.
							 */
							module.exports = function(str, pattern) {
								if (pattern == null) {
									throw new Error('Illegal Argument: Pattern is not present');
								}
								if (str == null) {
									return false;
								}
								if (typeof pattern === 'string') {
									return str === pattern;
								} else if (pattern instanceof RegExp) {
									return pattern.test(str);
								} else {
									return false;
								}
							};
						}
					},
					'core/src/lib/actions/helpers/decorateCode.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var id = 0;

							var isSourceLoadedFromFile = function(action) {
								return action.settings.isExternal;
							};

							var decorateGlobalJavaScriptCode = function(action, source) {
								// The line break after the source is important in case their last line of code is a comment.
								return '<scr' + 'ipt>\n' + source + '\n</scr' + 'ipt>';
							};

							var decorateNonGlobalJavaScriptCode = function(action, source) {
								var runScriptFnName = '__runScript' + ++id;

								_satellite[runScriptFnName] = function(fn) {
									fn.call(action.event.element, action.event, action.event.target);
									delete _satellite[runScriptFnName];
								};

								// The line break after the source is important in case their last line of code is a comment.
								return (
									'<scr' +
									'ipt>_satellite["' +
									runScriptFnName +
									'"](function(event, target) {\n' +
									source +
									'\n});</scr' +
									'ipt>'
								);
							};

							var decorators = {
								javascript: function(action, source) {
									return action.settings.global
										? decorateGlobalJavaScriptCode(action, source)
										: decorateNonGlobalJavaScriptCode(action, source);
								},
								html: function(action, source) {
									// We need to replace tokens only for sources loaded from external files. The sources from
									// inside the container are automatically taken care by Turbine.
									if (isSourceLoadedFromFile(action)) {
										return turbine.replaceTokens(source, action.event);
									}

									return source;
								}
							};

							module.exports = function(action, source) {
								return decorators[action.settings.language](action, source);
							};
						}
					},
					'core/src/lib/actions/helpers/loadCodeSequentially.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							var Promise = require('@adobe/reactor-promise');
							var getSourceByUrl = require('./getSourceByUrl');

							var previousExecuteCodePromise = Promise.resolve();

							module.exports = function(sourceUrl) {
								var sequentiallyLoadCodePromise = new Promise(function(resolve) {
									var loadCodePromise = getSourceByUrl(sourceUrl);

									Promise.all([loadCodePromise, previousExecuteCodePromise]).then(function(values) {
										var source = values[0];
										resolve(source);
									});
								});

								previousExecuteCodePromise = sequentiallyLoadCodePromise;
								return sequentiallyLoadCodePromise;
							};
						}
					},
					'core/node_modules/postscribe/dist/postscribe.js': {
						script: function(module, exports, require, turbine) {
							/**
							 * @file postscribe
							 * @description Asynchronously write javascript, even with document.write.
							 * @version v2.0.8
							 * @see {@link https://krux.github.io/postscribe}
							 * @license MIT
							 * @author Derek Brans
							 * @copyright 2016 Krux Digital, Inc
							 */
							(function webpackUniversalModuleDefinition(root, factory) {
								if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
								else if (typeof define === 'function' && define.amd) define([], factory);
								else if (typeof exports === 'object') exports['postscribe'] = factory();
								else root['postscribe'] = factory();
							})(this, function() {
								return /******/ (function(modules) {
									// webpackBootstrap
									/******/ // The module cache
									/******/ var installedModules = {}; // The require function
									/******/
									/******/ /******/ function __webpack_require__(moduleId) {
										/******/
										/******/ // Check if module is in cache
										/******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)
										/******/
										/******/ /******/ var module = (installedModules[moduleId] = {
											/******/ exports: {},
											/******/ id: moduleId,
											/******/ loaded: false
											/******/
										}); // Execute the module function
										/******/
										/******/ /******/ modules[moduleId].call(
											module.exports,
											module,
											module.exports,
											__webpack_require__
										); // Flag the module as loaded
										/******/
										/******/ /******/ module.loaded = true; // Return the exports of the module
										/******/
										/******/ /******/ return module.exports;
										/******/
									} // expose the modules object (__webpack_modules__)
									/******/
									/******/
									/******/ /******/ __webpack_require__.m = modules; // expose the module cache
									/******/
									/******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__
									/******/
									/******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
									/******/
									/******/ /******/ return __webpack_require__(0);
									/******/
								})(
									/************************************************************************/
									/******/ [
										/* 0 */
										/***/ function(module, exports, __webpack_require__) {
											'use strict';

											var _postscribe = __webpack_require__(1);

											var _postscribe2 = _interopRequireDefault(_postscribe);

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { default: obj };
											}

											module.exports = _postscribe2['default'];

											/***/
										},
										/* 1 */
										/***/ function(module, exports, __webpack_require__) {
											'use strict';

											exports.__esModule = true;

											var _extends =
												Object.assign ||
												function(target) {
													for (var i = 1; i < arguments.length; i++) {
														var source = arguments[i];
														for (var key in source) {
															if (Object.prototype.hasOwnProperty.call(source, key)) {
																target[key] = source[key];
															}
														}
													}
													return target;
												};

											exports['default'] = postscribe;

											var _writeStream = __webpack_require__(2);

											var _writeStream2 = _interopRequireDefault(_writeStream);

											var _utils = __webpack_require__(4);

											var utils = _interopRequireWildcard(_utils);

											function _interopRequireWildcard(obj) {
												if (obj && obj.__esModule) {
													return obj;
												} else {
													var newObj = {};
													if (obj != null) {
														for (var key in obj) {
															if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
														}
													}
													newObj['default'] = obj;
													return newObj;
												}
											}

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { default: obj };
											}

											/**
											 * A function that intentionally does nothing.
											 */
											function doNothing() {}

											/**
											 * Available options and defaults.
											 *
											 * @type {Object}
											 */
											var OPTIONS = {
												/**
												 * Called when an async script has loaded.
												 */
												afterAsync: doNothing,

												/**
												 * Called immediately before removing from the write queue.
												 */
												afterDequeue: doNothing,

												/**
												 * Called sync after a stream's first thread release.
												 */
												afterStreamStart: doNothing,

												/**
												 * Called after writing buffered document.write calls.
												 */
												afterWrite: doNothing,

												/**
												 * Allows disabling the autoFix feature of prescribe
												 */
												autoFix: true,

												/**
												 * Called immediately before adding to the write queue.
												 */
												beforeEnqueue: doNothing,

												/**
												 * Called before writing a token.
												 *
												 * @param {Object} tok The token
												 */
												beforeWriteToken: function beforeWriteToken(tok) {
													return tok;
												},

												/**
												 * Called before writing buffered document.write calls.
												 *
												 * @param {String} str The string
												 */
												beforeWrite: function beforeWrite(str) {
													return str;
												},

												/**
												 * Called when evaluation is finished.
												 */
												done: doNothing,

												/**
												 * Called when a write results in an error.
												 *
												 * @param {Error} e The error
												 */
												error: function error(e) {
													throw new Error(e.msg);
												},

												/**
												 * Whether to let scripts w/ async attribute set fall out of the queue.
												 */
												releaseAsync: false
											};

											var nextId = 0;
											var queue = [];
											var active = null;

											function nextStream() {
												var args = queue.shift();
												if (args) {
													var options = utils.last(args);

													options.afterDequeue();
													args.stream = runStream.apply(undefined, args);
													options.afterStreamStart();
												}
											}

											function runStream(el, html, options) {
												active = new _writeStream2['default'](el, options);

												// Identify this stream.
												active.id = nextId++;
												active.name = options.name || active.id;
												postscribe.streams[active.name] = active;

												// Override document.write.
												var doc = el.ownerDocument;

												var stash = {
													close: doc.close,
													open: doc.open,
													write: doc.write,
													writeln: doc.writeln
												};

												function _write(str) {
													str = options.beforeWrite(str);
													active.write(str);
													options.afterWrite(str);
												}

												_extends(doc, {
													close: doNothing,
													open: doNothing,
													write: function write() {
														for (var _len = arguments.length, str = Array(_len), _key = 0; _key < _len; _key++) {
															str[_key] = arguments[_key];
														}

														return _write(str.join(''));
													},
													writeln: function writeln() {
														for (var _len2 = arguments.length, str = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
															str[_key2] = arguments[_key2];
														}

														return _write(str.join('') + '\n');
													}
												});

												// Override window.onerror
												var oldOnError = active.win.onerror || doNothing;

												// This works together with the try/catch around WriteStream::insertScript
												// In modern browsers, exceptions in tag scripts go directly to top level
												active.win.onerror = function(msg, url, line) {
													options.error({ msg: msg + ' - ' + url + ': ' + line });
													oldOnError.apply(active.win, [msg, url, line]);
												};

												// Write to the stream
												active.write(html, function() {
													// restore document.write
													_extends(doc, stash);

													// restore window.onerror
													active.win.onerror = oldOnError;

													options.done();
													active = null;
													nextStream();
												});

												return active;
											}

											function postscribe(el, html, options) {
												if (utils.isFunction(options)) {
													options = { done: options };
												} else if (options === 'clear') {
													queue = [];
													active = null;
													nextId = 0;
													return;
												}

												options = utils.defaults(options, OPTIONS);

												// id selector
												if (/^#/.test(el)) {
													el = window.document.getElementById(el.substr(1));
												} else {
													el = el.jquery ? el[0] : el;
												}

												var args = [el, html, options];

												el.postscribe = {
													cancel: function cancel() {
														if (args.stream) {
															args.stream.abort();
														} else {
															args[1] = doNothing;
														}
													}
												};

												options.beforeEnqueue(args);
												queue.push(args);

												if (!active) {
													nextStream();
												}

												return el.postscribe;
											}

											_extends(postscribe, {
												// Streams by name.
												streams: {},
												// Queue of streams.
												queue: queue,
												// Expose internal classes.
												WriteStream: _writeStream2['default']
											});

											/***/
										},
										/* 2 */
										/***/ function(module, exports, __webpack_require__) {
											'use strict';

											exports.__esModule = true;

											var _extends =
												Object.assign ||
												function(target) {
													for (var i = 1; i < arguments.length; i++) {
														var source = arguments[i];
														for (var key in source) {
															if (Object.prototype.hasOwnProperty.call(source, key)) {
																target[key] = source[key];
															}
														}
													}
													return target;
												};

											var _prescribe = __webpack_require__(3);

											var _prescribe2 = _interopRequireDefault(_prescribe);

											var _utils = __webpack_require__(4);

											var utils = _interopRequireWildcard(_utils);

											function _interopRequireWildcard(obj) {
												if (obj && obj.__esModule) {
													return obj;
												} else {
													var newObj = {};
													if (obj != null) {
														for (var key in obj) {
															if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
														}
													}
													newObj['default'] = obj;
													return newObj;
												}
											}

											function _interopRequireDefault(obj) {
												return obj && obj.__esModule ? obj : { default: obj };
											}

											function _classCallCheck(instance, Constructor) {
												if (!(instance instanceof Constructor)) {
													throw new TypeError('Cannot call a class as a function');
												}
											}

											/**
											 * Turn on to debug how each chunk affected the DOM.
											 * @type {boolean}
											 */
											var DEBUG_CHUNK = false;

											/**
											 * Prefix for data attributes on DOM elements.
											 * @type {string}
											 */
											var BASEATTR = 'data-ps-';

											/**
											 * ID for the style proxy
											 * @type {string}
											 */
											var PROXY_STYLE = 'ps-style';

											/**
											 * ID for the script proxy
											 * @type {string}
											 */
											var PROXY_SCRIPT = 'ps-script';

											/**
											 * Get data attributes
											 *
											 * @param {Object} el The DOM element.
											 * @param {String} name The attribute name.
											 * @returns {String}
											 */
											function getData(el, name) {
												var attr = BASEATTR + name;

												var val = el.getAttribute(attr);

												// IE 8 returns a number if it's a number
												return !utils.existy(val) ? val : String(val);
											}

											/**
											 * Set data attributes
											 *
											 * @param {Object} el The DOM element.
											 * @param {String} name The attribute name.
											 * @param {null|*} value The attribute value.
											 */
											function setData(el, name) {
												var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

												var attr = BASEATTR + name;

												if (utils.existy(value) && value !== '') {
													el.setAttribute(attr, value);
												} else {
													el.removeAttribute(attr);
												}
											}

											/**
											 * Stream static html to an element, where "static html" denotes "html
											 * without scripts".
											 *
											 * This class maintains a *history of writes devoid of any attributes* or
											 * "proxy history".
											 *
											 * Injecting the proxy history into a temporary div has no side-effects,
											 * other than to create proxy elements for previously written elements.
											 *
											 * Given the `staticHtml` of a new write, a `tempDiv`'s innerHTML is set to
											 * `proxy_history + staticHtml`.
											 * The *structure* of `tempDiv`'s contents, (i.e., the placement of new nodes
											 * beside or inside of proxy elements), reflects the DOM structure that would
											 * have resulted if all writes had been squashed into a single write.
											 *
											 * For each descendent `node` of `tempDiv` whose parentNode is a *proxy*,
											 * `node` is appended to the corresponding *real* element within the DOM.
											 *
											 * Proxy elements are mapped to *actual* elements in the DOM by injecting a
											 * `data-id` attribute into each start tag in `staticHtml`.
											 *
											 */

											var WriteStream = (function() {
												/**
												 * Constructor.
												 *
												 * @param {Object} root The root element
												 * @param {?Object} options The options
												 */
												function WriteStream(root) {
													var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

													_classCallCheck(this, WriteStream);

													this.root = root;
													this.options = options;
													this.doc = root.ownerDocument;
													this.win = this.doc.defaultView || this.doc.parentWindow;
													this.parser = new _prescribe2['default']('', { autoFix: options.autoFix });

													// Actual elements by id.
													this.actuals = [root];

													// Embodies the "structure" of what's been written so far,
													// devoid of attributes.
													this.proxyHistory = '';

													// Create a proxy of the root element.
													this.proxyRoot = this.doc.createElement(root.nodeName);

													this.scriptStack = [];
													this.writeQueue = [];

													setData(this.proxyRoot, 'proxyof', 0);
												}

												/**
												 * Writes the given strings.
												 *
												 * @param {...String} str The strings to write
												 */

												WriteStream.prototype.write = function write() {
													var _writeQueue;

													(_writeQueue = this.writeQueue).push.apply(_writeQueue, arguments);

													// Process writes
													// When new script gets pushed or pending this will stop
													// because new writeQueue gets pushed
													while (!this.deferredRemote && this.writeQueue.length) {
														var arg = this.writeQueue.shift();

														if (utils.isFunction(arg)) {
															this._callFunction(arg);
														} else {
															this._writeImpl(arg);
														}
													}
												};

												/**
												 * Calls the given function.
												 *
												 * @param {Function} fn The function to call
												 * @private
												 */

												WriteStream.prototype._callFunction = function _callFunction(fn) {
													var tok = { type: 'function', value: fn.name || fn.toString() };
													this._onScriptStart(tok);
													fn.call(this.win, this.doc);
													this._onScriptDone(tok);
												};

												/**
												 * The write implementation
												 *
												 * @param {String} html The HTML to write.
												 * @private
												 */

												WriteStream.prototype._writeImpl = function _writeImpl(html) {
													this.parser.append(html);

													var tok = void 0;
													var script = void 0;
													var style = void 0;
													var tokens = [];

													// stop if we see a script token
													while (
														(tok = this.parser.readToken()) &&
														!(script = utils.isScript(tok)) &&
														!(style = utils.isStyle(tok))
													) {
														tok = this.options.beforeWriteToken(tok);

														if (tok) {
															tokens.push(tok);
														}
													}

													if (tokens.length > 0) {
														this._writeStaticTokens(tokens);
													}

													if (script) {
														this._handleScriptToken(tok);
													}

													if (style) {
														this._handleStyleToken(tok);
													}
												};

												/**
												 * Write contiguous non-script tokens (a chunk)
												 *
												 * @param {Array<Object>} tokens The tokens
												 * @returns {{tokens, raw, actual, proxy}|null}
												 * @private
												 */

												WriteStream.prototype._writeStaticTokens = function _writeStaticTokens(tokens) {
													var chunk = this._buildChunk(tokens);

													if (!chunk.actual) {
														// e.g., no tokens, or a noscript that got ignored
														return null;
													}

													chunk.html = this.proxyHistory + chunk.actual;
													this.proxyHistory += chunk.proxy;
													this.proxyRoot.innerHTML = chunk.html;

													if (DEBUG_CHUNK) {
														chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
													}

													this._walkChunk();

													if (DEBUG_CHUNK) {
														chunk.actualInnerHTML = this.root.innerHTML;
													}

													return chunk;
												};

												/**
												 * Build a chunk.
												 *
												 * @param {Array<Object>} tokens The tokens to use.
												 * @returns {{tokens: *, raw: string, actual: string, proxy: string}}
												 * @private
												 */

												WriteStream.prototype._buildChunk = function _buildChunk(tokens) {
													var nextId = this.actuals.length;

													// The raw html of this chunk.
													var raw = [];

													// The html to create the nodes in the tokens (with id's injected).
													var actual = [];

													// Html that can later be used to proxy the nodes in the tokens.
													var proxy = [];

													var len = tokens.length;
													for (var i = 0; i < len; i++) {
														var tok = tokens[i];
														var tokenRaw = tok.toString();

														raw.push(tokenRaw);

														if (tok.attrs) {
															// tok.attrs <==> startTag or atomicTag or cursor
															// Ignore noscript tags. They are atomic, so we don't have to worry about children.
															if (!/^noscript$/i.test(tok.tagName)) {
																var id = nextId++;

																// Actual: inject id attribute: replace '>' at end of start tag with id attribute + '>'
																actual.push(tokenRaw.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1'));

																// Don't proxy scripts: they have no bearing on DOM structure.
																if (tok.attrs.id !== PROXY_SCRIPT && tok.attrs.id !== PROXY_STYLE) {
																	// Proxy: strip all attributes and inject proxyof attribute
																	proxy.push(
																		// ignore atomic tags (e.g., style): they have no "structural" effect
																		tok.type === 'atomicTag'
																			? ''
																			: '<' + tok.tagName + ' ' + BASEATTR + 'proxyof=' + id + (tok.unary ? ' />' : '>')
																	);
																}
															}
														} else {
															// Visit any other type of token
															// Actual: append.
															actual.push(tokenRaw);

															// Proxy: append endTags. Ignore everything else.
															proxy.push(tok.type === 'endTag' ? tokenRaw : '');
														}
													}

													return {
														tokens: tokens,
														raw: raw.join(''),
														actual: actual.join(''),
														proxy: proxy.join('')
													};
												};

												/**
												 * Walk the chunks.
												 *
												 * @private
												 */

												WriteStream.prototype._walkChunk = function _walkChunk() {
													var node = void 0;
													var stack = [this.proxyRoot];

													// use shift/unshift so that children are walked in document order
													while (utils.existy((node = stack.shift()))) {
														var isElement = node.nodeType === 1;
														var isProxy = isElement && getData(node, 'proxyof');

														// Ignore proxies
														if (!isProxy) {
															if (isElement) {
																// New actual element: register it and remove the the id attr.
																this.actuals[getData(node, 'id')] = node;
																setData(node, 'id');
															}

															// Is node's parent a proxy?
															var parentIsProxyOf = node.parentNode && getData(node.parentNode, 'proxyof');
															if (parentIsProxyOf) {
																// Move node under actual parent.
																this.actuals[parentIsProxyOf].appendChild(node);
															}
														}

														// prepend childNodes to stack
														stack.unshift.apply(stack, utils.toArray(node.childNodes));
													}
												};

												/**
												 * Handles Script tokens
												 *
												 * @param {Object} tok The token
												 */

												WriteStream.prototype._handleScriptToken = function _handleScriptToken(tok) {
													var _this = this;

													var remainder = this.parser.clear();

													if (remainder) {
														// Write remainder immediately behind this script.
														this.writeQueue.unshift(remainder);
													}

													tok.src = tok.attrs.src || tok.attrs.SRC;

													tok = this.options.beforeWriteToken(tok);
													if (!tok) {
														// User has removed this token
														return;
													}

													if (tok.src && this.scriptStack.length) {
														// Defer this script until scriptStack is empty.
														// Assumption 1: This script will not start executing until
														// scriptStack is empty.
														this.deferredRemote = tok;
													} else {
														this._onScriptStart(tok);
													}

													// Put the script node in the DOM.
													this._writeScriptToken(tok, function() {
														_this._onScriptDone(tok);
													});
												};

												/**
												 * Handles style tokens
												 *
												 * @param {Object} tok The token
												 */

												WriteStream.prototype._handleStyleToken = function _handleStyleToken(tok) {
													var remainder = this.parser.clear();

													if (remainder) {
														// Write remainder immediately behind this style.
														this.writeQueue.unshift(remainder);
													}

													tok.type = tok.attrs.type || tok.attrs.TYPE || 'text/css';

													tok = this.options.beforeWriteToken(tok);

													if (tok) {
														// Put the style node in the DOM.
														this._writeStyleToken(tok);
													}

													if (remainder) {
														this.write();
													}
												};

												/**
												 * Build a style and insert it into the DOM.
												 *
												 * @param {Object} tok The token
												 */

												WriteStream.prototype._writeStyleToken = function _writeStyleToken(tok) {
													var el = this._buildStyle(tok);

													this._insertCursor(el, PROXY_STYLE);

													// Set content
													if (tok.content) {
														if (el.styleSheet && !el.sheet) {
															el.styleSheet.cssText = tok.content;
														} else {
															el.appendChild(this.doc.createTextNode(tok.content));
														}
													}
												};

												/**
												 * Build a style element from an atomic style token.
												 *
												 * @param {Object} tok The token
												 * @returns {Element}
												 */

												WriteStream.prototype._buildStyle = function _buildStyle(tok) {
													var el = this.doc.createElement(tok.tagName);

													el.setAttribute('type', tok.type);

													// Set attributes
													utils.eachKey(tok.attrs, function(name, value) {
														el.setAttribute(name, value);
													});

													return el;
												};

												/**
												 * Append a span to the stream. That span will act as a cursor
												 * (i.e. insertion point) for the element.
												 *
												 * @param {Object} el The element
												 * @param {string} which The type of proxy element
												 */

												WriteStream.prototype._insertCursor = function _insertCursor(el, which) {
													this._writeImpl('<span id="' + which + '"/>');

													var cursor = this.doc.getElementById(which);

													if (cursor) {
														cursor.parentNode.replaceChild(el, cursor);
													}
												};

												/**
												 * Called when a script is started.
												 *
												 * @param {Object} tok The token
												 * @private
												 */

												WriteStream.prototype._onScriptStart = function _onScriptStart(tok) {
													tok.outerWrites = this.writeQueue;
													this.writeQueue = [];
													this.scriptStack.unshift(tok);
												};

												/**
												 * Called when a script is done.
												 *
												 * @param {Object} tok The token
												 * @private
												 */

												WriteStream.prototype._onScriptDone = function _onScriptDone(tok) {
													// Pop script and check nesting.
													if (tok !== this.scriptStack[0]) {
														this.options.error({ msg: 'Bad script nesting or script finished twice' });
														return;
													}

													this.scriptStack.shift();

													// Append outer writes to queue and process them.
													this.write.apply(this, tok.outerWrites);

													// Check for pending remote

													// Assumption 2: if remote_script1 writes remote_script2 then
													// the we notice remote_script1 finishes before remote_script2 starts.
													// I think this is equivalent to assumption 1
													if (!this.scriptStack.length && this.deferredRemote) {
														this._onScriptStart(this.deferredRemote);
														this.deferredRemote = null;
													}
												};

												/**
												 * Build a script and insert it into the DOM.
												 * Done is called once script has executed.
												 *
												 * @param {Object} tok The token
												 * @param {Function} done The callback when complete
												 */

												WriteStream.prototype._writeScriptToken = function _writeScriptToken(tok, done) {
													var el = this._buildScript(tok);
													var asyncRelease = this._shouldRelease(el);
													var afterAsync = this.options.afterAsync;

													if (tok.src) {
														// Fix for attribute "SRC" (capitalized). IE does not recognize it.
														el.src = tok.src;
														this._scriptLoadHandler(
															el,
															!asyncRelease
																? function() {
																		done();
																		afterAsync();
																  }
																: afterAsync
														);
													}

													try {
														this._insertCursor(el, PROXY_SCRIPT);
														if (!el.src || asyncRelease) {
															done();
														}
													} catch (e) {
														this.options.error(e);
														done();
													}
												};

												/**
												 * Build a script element from an atomic script token.
												 *
												 * @param {Object} tok The token
												 * @returns {Element}
												 */

												WriteStream.prototype._buildScript = function _buildScript(tok) {
													var el = this.doc.createElement(tok.tagName);

													// Set attributes
													utils.eachKey(tok.attrs, function(name, value) {
														el.setAttribute(name, value);
													});

													// Set content
													if (tok.content) {
														el.text = tok.content;
													}

													return el;
												};

												/**
												 * Setup the script load handler on an element.
												 *
												 * @param {Object} el The element
												 * @param {Function} done The callback
												 * @private
												 */

												WriteStream.prototype._scriptLoadHandler = function _scriptLoadHandler(el, done) {
													function cleanup() {
														el = el.onload = el.onreadystatechange = el.onerror = null;
													}

													var error = this.options.error;

													function success() {
														cleanup();
														if (done != null) {
															done();
														}
														done = null;
													}

													function failure(err) {
														cleanup();
														error(err);
														if (done != null) {
															done();
														}
														done = null;
													}

													function reattachEventListener(el, evt) {
														var handler = el['on' + evt];
														if (handler != null) {
															el['_on' + evt] = handler;
														}
													}

													reattachEventListener(el, 'load');
													reattachEventListener(el, 'error');

													_extends(el, {
														onload: function onload() {
															if (el._onload) {
																try {
																	el._onload.apply(this, Array.prototype.slice.call(arguments, 0));
																} catch (err) {
																	failure({ msg: 'onload handler failed ' + err + ' @ ' + el.src });
																}
															}
															success();
														},
														onerror: function onerror() {
															if (el._onerror) {
																try {
																	el._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
																} catch (err) {
																	failure({ msg: 'onerror handler failed ' + err + ' @ ' + el.src });
																	return;
																}
															}
															failure({ msg: 'remote script failed ' + el.src });
														},
														onreadystatechange: function onreadystatechange() {
															if (/^(loaded|complete)$/.test(el.readyState)) {
																success();
															}
														}
													});
												};

												/**
												 * Determines whether to release.
												 *
												 * @param {Object} el The element
												 * @returns {boolean}
												 * @private
												 */

												WriteStream.prototype._shouldRelease = function _shouldRelease(el) {
													var isScript = /^script$/i.test(el.nodeName);
													return !isScript || !!(this.options.releaseAsync && el.src && el.hasAttribute('async'));
												};

												return WriteStream;
											})();

											exports['default'] = WriteStream;

											/***/
										},
										/* 3 */
										/***/ function(module, exports, __webpack_require__) {
											/**
											 * @file prescribe
											 * @description Tiny, forgiving HTML parser
											 * @version vundefined
											 * @see {@link https://github.com/krux/prescribe/}
											 * @license MIT
											 * @author Derek Brans
											 * @copyright 2016 Krux Digital, Inc
											 */
											(function webpackUniversalModuleDefinition(root, factory) {
												if (true) module.exports = factory();
												else if (typeof define === 'function' && define.amd) define([], factory);
												else if (typeof exports === 'object') exports['Prescribe'] = factory();
												else root['Prescribe'] = factory();
											})(this, function() {
												return /******/ (function(modules) {
													// webpackBootstrap
													/******/ // The module cache
													/******/ var installedModules = {}; // The require function

													/******/ /******/ function __webpack_require__(moduleId) {
														/******/ // Check if module is in cache
														/******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)

														/******/ /******/ var module = (installedModules[moduleId] = {
															/******/ exports: {},
															/******/ id: moduleId,
															/******/ loaded: false
															/******/
														}); // Execute the module function

														/******/ /******/ modules[moduleId].call(
															module.exports,
															module,
															module.exports,
															__webpack_require__
														); // Flag the module as loaded

														/******/ /******/ module.loaded = true; // Return the exports of the module

														/******/ /******/ return module.exports;
														/******/
													} // expose the modules object (__webpack_modules__)

													/******/ /******/ __webpack_require__.m = modules; // expose the module cache

													/******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__

													/******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports

													/******/ /******/ return __webpack_require__(0);
													/******/
												})(
													/************************************************************************/
													/******/ [
														/* 0 */
														/***/ function(module, exports, __webpack_require__) {
															'use strict';

															var _HtmlParser = __webpack_require__(1);

															var _HtmlParser2 = _interopRequireDefault(_HtmlParser);

															function _interopRequireDefault(obj) {
																return obj && obj.__esModule ? obj : { default: obj };
															}

															module.exports = _HtmlParser2['default'];

															/***/
														},
														/* 1 */
														/***/ function(module, exports, __webpack_require__) {
															'use strict';

															exports.__esModule = true;

															var _supports = __webpack_require__(2);

															var supports = _interopRequireWildcard(_supports);

															var _streamReaders = __webpack_require__(3);

															var streamReaders = _interopRequireWildcard(_streamReaders);

															var _fixedReadTokenFactory = __webpack_require__(6);

															var _fixedReadTokenFactory2 = _interopRequireDefault(_fixedReadTokenFactory);

															var _utils = __webpack_require__(5);

															function _interopRequireDefault(obj) {
																return obj && obj.__esModule ? obj : { default: obj };
															}

															function _interopRequireWildcard(obj) {
																if (obj && obj.__esModule) {
																	return obj;
																} else {
																	var newObj = {};
																	if (obj != null) {
																		for (var key in obj) {
																			if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
																		}
																	}
																	newObj['default'] = obj;
																	return newObj;
																}
															}

															function _classCallCheck(instance, Constructor) {
																if (!(instance instanceof Constructor)) {
																	throw new TypeError('Cannot call a class as a function');
																}
															}

															/**
		 * Detection regular expressions.
		 *
		 * Order of detection matters: detection of one can only
		 * succeed if detection of previous didn't

		 * @type {Object}
		 */
															var detect = {
																comment: /^<!--/,
																endTag: /^<\//,
																atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
																startTag: /^</,
																chars: /^[^<]/
															};

															/**
															 * HtmlParser provides the capability to parse HTML and return tokens
															 * representing the tags and content.
															 */

															var HtmlParser = (function() {
																/**
																 * Constructor.
																 *
																 * @param {string} stream The initial parse stream contents.
																 * @param {Object} options The options
																 * @param {boolean} options.autoFix Set to true to automatically fix errors
																 */
																function HtmlParser() {
																	var _this = this;

																	var stream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
																	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

																	_classCallCheck(this, HtmlParser);

																	this.stream = stream;

																	var fix = false;
																	var fixedTokenOptions = {};

																	for (var key in supports) {
																		if (supports.hasOwnProperty(key)) {
																			if (options.autoFix) {
																				fixedTokenOptions[key + 'Fix'] = true; // !supports[key];
																			}
																			fix = fix || fixedTokenOptions[key + 'Fix'];
																		}
																	}

																	if (fix) {
																		this._readToken = (0, _fixedReadTokenFactory2['default'])(
																			this,
																			fixedTokenOptions,
																			function() {
																				return _this._readTokenImpl();
																			}
																		);
																		this._peekToken = (0, _fixedReadTokenFactory2['default'])(
																			this,
																			fixedTokenOptions,
																			function() {
																				return _this._peekTokenImpl();
																			}
																		);
																	} else {
																		this._readToken = this._readTokenImpl;
																		this._peekToken = this._peekTokenImpl;
																	}
																}

																/**
																 * Appends the given string to the parse stream.
																 *
																 * @param {string} str The string to append
																 */

																HtmlParser.prototype.append = function append(str) {
																	this.stream += str;
																};

																/**
																 * Prepends the given string to the parse stream.
																 *
																 * @param {string} str The string to prepend
																 */

																HtmlParser.prototype.prepend = function prepend(str) {
																	this.stream = str + this.stream;
																};

																/**
																 * The implementation of the token reading.
																 *
																 * @private
																 * @returns {?Token}
																 */

																HtmlParser.prototype._readTokenImpl = function _readTokenImpl() {
																	var token = this._peekTokenImpl();
																	if (token) {
																		this.stream = this.stream.slice(token.length);
																		return token;
																	}
																};

																/**
																 * The implementation of token peeking.
																 *
																 * @returns {?Token}
																 */

																HtmlParser.prototype._peekTokenImpl = function _peekTokenImpl() {
																	for (var type in detect) {
																		if (detect.hasOwnProperty(type)) {
																			if (detect[type].test(this.stream)) {
																				var token = streamReaders[type](this.stream);

																				if (token) {
																					if (token.type === 'startTag' && /script|style/i.test(token.tagName)) {
																						return null;
																					} else {
																						token.text = this.stream.substr(0, token.length);
																						return token;
																					}
																				}
																			}
																		}
																	}
																};

																/**
																 * The public token peeking interface.  Delegates to the basic token peeking
																 * or a version that performs fixups depending on the `autoFix` setting in
																 * options.
																 *
																 * @returns {object}
																 */

																HtmlParser.prototype.peekToken = function peekToken() {
																	return this._peekToken();
																};

																/**
																 * The public token reading interface.  Delegates to the basic token reading
																 * or a version that performs fixups depending on the `autoFix` setting in
																 * options.
																 *
																 * @returns {object}
																 */

																HtmlParser.prototype.readToken = function readToken() {
																	return this._readToken();
																};

																/**
																 * Read tokens and hand to the given handlers.
																 *
																 * @param {Object} handlers The handlers to use for the different tokens.
																 */

																HtmlParser.prototype.readTokens = function readTokens(handlers) {
																	var tok = void 0;
																	while ((tok = this.readToken())) {
																		// continue until we get an explicit "false" return
																		if (handlers[tok.type] && handlers[tok.type](tok) === false) {
																			return;
																		}
																	}
																};

																/**
																 * Clears the parse stream.
																 *
																 * @returns {string} The contents of the parse stream before clearing.
																 */

																HtmlParser.prototype.clear = function clear() {
																	var rest = this.stream;
																	this.stream = '';
																	return rest;
																};

																/**
																 * Returns the rest of the parse stream.
																 *
																 * @returns {string} The contents of the parse stream.
																 */

																HtmlParser.prototype.rest = function rest() {
																	return this.stream;
																};

																return HtmlParser;
															})();

															exports['default'] = HtmlParser;

															HtmlParser.tokenToString = function(tok) {
																return tok.toString();
															};

															HtmlParser.escapeAttributes = function(attrs) {
																var escapedAttrs = {};

																for (var name in attrs) {
																	if (attrs.hasOwnProperty(name)) {
																		escapedAttrs[name] = (0, _utils.escapeQuotes)(attrs[name], null);
																	}
																}

																return escapedAttrs;
															};

															HtmlParser.supports = supports;

															for (var key in supports) {
																if (supports.hasOwnProperty(key)) {
																	HtmlParser.browserHasFlaw = HtmlParser.browserHasFlaw || (!supports[key] && key);
																}
															}

															/***/
														},
														/* 2 */
														/***/ function(module, exports) {
															'use strict';

															exports.__esModule = true;
															var tagSoup = false;
															var selfClose = false;

															var work = window.document.createElement('div');

															try {
																var html = '<P><I></P></I>';
																work.innerHTML = html;
																exports.tagSoup = tagSoup = work.innerHTML !== html;
															} catch (e) {
																exports.tagSoup = tagSoup = false;
															}

															try {
																work.innerHTML = '<P><i><P></P></i></P>';
																exports.selfClose = selfClose = work.childNodes.length === 2;
															} catch (e) {
																exports.selfClose = selfClose = false;
															}

															work = null;

															exports.tagSoup = tagSoup;
															exports.selfClose = selfClose;

															/***/
														},
														/* 3 */
														/***/ function(module, exports, __webpack_require__) {
															'use strict';

															exports.__esModule = true;

															var _typeof =
																typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
																	? function(obj) {
																			return typeof obj;
																	  }
																	: function(obj) {
																			return obj &&
																				typeof Symbol === 'function' &&
																				obj.constructor === Symbol &&
																				obj !== Symbol.prototype
																				? 'symbol'
																				: typeof obj;
																	  };

															exports.comment = comment;
															exports.chars = chars;
															exports.startTag = startTag;
															exports.atomicTag = atomicTag;
															exports.endTag = endTag;

															var _tokens = __webpack_require__(4);

															/**
															 * Regular Expressions for parsing tags and attributes
															 *
															 * @type {Object}
															 */
															var REGEXES = {
																startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
																endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
																attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
																fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
															};

															/**
															 * Reads a comment token
															 *
															 * @param {string} stream The input stream
															 * @returns {CommentToken}
															 */
															function comment(stream) {
																var index = stream.indexOf('-->');
																if (index >= 0) {
																	return new _tokens.CommentToken(stream.substr(4, index - 1), index + 3);
																}
															}

															/**
															 * Reads non-tag characters.
															 *
															 * @param {string} stream The input stream
															 * @returns {CharsToken}
															 */
															function chars(stream) {
																var index = stream.indexOf('<');
																return new _tokens.CharsToken(index >= 0 ? index : stream.length);
															}

															/**
															 * Reads start tag token.
															 *
															 * @param {string} stream The input stream
															 * @returns {StartTagToken}
															 */
															function startTag(stream) {
																var endTagIndex = stream.indexOf('>');
																if (endTagIndex !== -1) {
																	var match = stream.match(REGEXES.startTag);
																	if (match) {
																		var _ret = (function() {
																			var attrs = {};
																			var booleanAttrs = {};
																			var rest = match[2];

																			match[2].replace(REGEXES.attr, function(match, name) {
																				if (!(arguments[2] || arguments[3] || arguments[4] || arguments[5])) {
																					attrs[name] = '';
																				} else if (arguments[5]) {
																					attrs[arguments[5]] = '';
																					booleanAttrs[arguments[5]] = true;
																				} else {
																					attrs[name] =
																						arguments[2] ||
																						arguments[3] ||
																						arguments[4] ||
																						(REGEXES.fillAttr.test(name) && name) ||
																						'';
																				}

																				rest = rest.replace(match, '');
																			});

																			return {
																				v: new _tokens.StartTagToken(
																					match[1],
																					match[0].length,
																					attrs,
																					booleanAttrs,
																					!!match[3],
																					rest.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
																				)
																			};
																		})();

																		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object')
																			return _ret.v;
																	}
																}
															}

															/**
															 * Reads atomic tag token.
															 *
															 * @param {string} stream The input stream
															 * @returns {AtomicTagToken}
															 */
															function atomicTag(stream) {
																var start = startTag(stream);
																if (start) {
																	var rest = stream.slice(start.length);
																	// for optimization, we check first just for the end tag
																	if (rest.match(new RegExp('</\\s*' + start.tagName + '\\s*>', 'i'))) {
																		// capturing the content is inefficient, so we do it inside the if
																		var match = rest.match(
																			new RegExp('([\\s\\S]*?)</\\s*' + start.tagName + '\\s*>', 'i')
																		);
																		if (match) {
																			return new _tokens.AtomicTagToken(
																				start.tagName,
																				match[0].length + start.length,
																				start.attrs,
																				start.booleanAttrs,
																				match[1]
																			);
																		}
																	}
																}
															}

															/**
															 * Reads an end tag token.
															 *
															 * @param {string} stream The input stream
															 * @returns {EndTagToken}
															 */
															function endTag(stream) {
																var match = stream.match(REGEXES.endTag);
																if (match) {
																	return new _tokens.EndTagToken(match[1], match[0].length);
																}
															}

															/***/
														},
														/* 4 */
														/***/ function(module, exports, __webpack_require__) {
															'use strict';

															exports.__esModule = true;
															exports.EndTagToken = exports.AtomicTagToken = exports.StartTagToken = exports.TagToken = exports.CharsToken = exports.CommentToken = exports.Token = undefined;

															var _utils = __webpack_require__(5);

															function _classCallCheck(instance, Constructor) {
																if (!(instance instanceof Constructor)) {
																	throw new TypeError('Cannot call a class as a function');
																}
															}

															/**
															 * Token is a base class for all token types parsed.  Note we don't actually
															 * use intheritance due to IE8's non-existent ES5 support.
															 */
															var Token =
																/**
																 * Constructor.
																 *
																 * @param {string} type The type of the Token.
																 * @param {Number} length The length of the Token text.
																 */
																(exports.Token = function Token(type, length) {
																	_classCallCheck(this, Token);

																	this.type = type;
																	this.length = length;
																	this.text = '';
																});

															/**
															 * CommentToken represents comment tags.
															 */

															var CommentToken = (exports.CommentToken = (function() {
																/**
																 * Constructor.
																 *
																 * @param {string} content The content of the comment
																 * @param {Number} length The length of the Token text.
																 */
																function CommentToken(content, length) {
																	_classCallCheck(this, CommentToken);

																	this.type = 'comment';
																	this.length = length || (content ? content.length : 0);
																	this.text = '';
																	this.content = content;
																}

																CommentToken.prototype.toString = function toString() {
																	return '<!--' + this.content;
																};

																return CommentToken;
															})());

															/**
															 * CharsToken represents non-tag characters.
															 */

															var CharsToken = (exports.CharsToken = (function() {
																/**
																 * Constructor.
																 *
																 * @param {Number} length The length of the Token text.
																 */
																function CharsToken(length) {
																	_classCallCheck(this, CharsToken);

																	this.type = 'chars';
																	this.length = length;
																	this.text = '';
																}

																CharsToken.prototype.toString = function toString() {
																	return this.text;
																};

																return CharsToken;
															})());

															/**
															 * TagToken is a base class for all tag-based Tokens.
															 */

															var TagToken = (exports.TagToken = (function() {
																/**
																 * Constructor.
																 *
																 * @param {string} type The type of the token.
																 * @param {string} tagName The tag name.
																 * @param {Number} length The length of the Token text.
																 * @param {Object} attrs The dictionary of attributes and values
																 * @param {Object} booleanAttrs If an entry has 'true' then the attribute
																 *                              is a boolean attribute
																 */
																function TagToken(type, tagName, length, attrs, booleanAttrs) {
																	_classCallCheck(this, TagToken);

																	this.type = type;
																	this.length = length;
																	this.text = '';
																	this.tagName = tagName;
																	this.attrs = attrs;
																	this.booleanAttrs = booleanAttrs;
																	this.unary = false;
																	this.html5Unary = false;
																}

																/**
																 * Formats the given token tag.
																 *
																 * @param {TagToken} tok The TagToken to format.
																 * @param {?string} [content=null] The content of the token.
																 * @returns {string} The formatted tag.
																 */

																TagToken.formatTag = function formatTag(tok) {
																	var content =
																		arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

																	var str = '<' + tok.tagName;
																	for (var key in tok.attrs) {
																		if (tok.attrs.hasOwnProperty(key)) {
																			str += ' ' + key;

																			var val = tok.attrs[key];
																			if (
																				typeof tok.booleanAttrs === 'undefined' ||
																				typeof tok.booleanAttrs[key] === 'undefined'
																			) {
																				str += '="' + (0, _utils.escapeQuotes)(val) + '"';
																			}
																		}
																	}

																	if (tok.rest) {
																		str += ' ' + tok.rest;
																	}

																	if (tok.unary && !tok.html5Unary) {
																		str += '/>';
																	} else {
																		str += '>';
																	}

																	if (content !== undefined && content !== null) {
																		str += content + '</' + tok.tagName + '>';
																	}

																	return str;
																};

																return TagToken;
															})());

															/**
															 * StartTagToken represents a start token.
															 */

															var StartTagToken = (exports.StartTagToken = (function() {
																/**
																 * Constructor.
																 *
																 * @param {string} tagName The tag name.
																 * @param {Number} length The length of the Token text
																 * @param {Object} attrs The dictionary of attributes and values
																 * @param {Object} booleanAttrs If an entry has 'true' then the attribute
																 *                              is a boolean attribute
																 * @param {boolean} unary True if the tag is a unary tag
																 * @param {string} rest The rest of the content.
																 */
																function StartTagToken(tagName, length, attrs, booleanAttrs, unary, rest) {
																	_classCallCheck(this, StartTagToken);

																	this.type = 'startTag';
																	this.length = length;
																	this.text = '';
																	this.tagName = tagName;
																	this.attrs = attrs;
																	this.booleanAttrs = booleanAttrs;
																	this.html5Unary = false;
																	this.unary = unary;
																	this.rest = rest;
																}

																StartTagToken.prototype.toString = function toString() {
																	return TagToken.formatTag(this);
																};

																return StartTagToken;
															})());

															/**
															 * AtomicTagToken represents an atomic tag.
															 */

															var AtomicTagToken = (exports.AtomicTagToken = (function() {
																/**
																 * Constructor.
																 *
																 * @param {string} tagName The name of the tag.
																 * @param {Number} length The length of the tag text.
																 * @param {Object} attrs The attributes.
																 * @param {Object} booleanAttrs If an entry has 'true' then the attribute
																 *                              is a boolean attribute
																 * @param {string} content The content of the tag.
																 */
																function AtomicTagToken(tagName, length, attrs, booleanAttrs, content) {
																	_classCallCheck(this, AtomicTagToken);

																	this.type = 'atomicTag';
																	this.length = length;
																	this.text = '';
																	this.tagName = tagName;
																	this.attrs = attrs;
																	this.booleanAttrs = booleanAttrs;
																	this.unary = false;
																	this.html5Unary = false;
																	this.content = content;
																}

																AtomicTagToken.prototype.toString = function toString() {
																	return TagToken.formatTag(this, this.content);
																};

																return AtomicTagToken;
															})());

															/**
															 * EndTagToken represents an end tag.
															 */

															var EndTagToken = (exports.EndTagToken = (function() {
																/**
																 * Constructor.
																 *
																 * @param {string} tagName The name of the tag.
																 * @param {Number} length The length of the tag text.
																 */
																function EndTagToken(tagName, length) {
																	_classCallCheck(this, EndTagToken);

																	this.type = 'endTag';
																	this.length = length;
																	this.text = '';
																	this.tagName = tagName;
																}

																EndTagToken.prototype.toString = function toString() {
																	return '</' + this.tagName + '>';
																};

																return EndTagToken;
															})());

															/***/
														},
														/* 5 */
														/***/ function(module, exports) {
															'use strict';

															exports.__esModule = true;
															exports.escapeQuotes = escapeQuotes;

															/**
															 * Escape quotes in the given value.
															 *
															 * @param {string} value The value to escape.
															 * @param {string} [defaultValue=''] The default value to return if value is falsy.
															 * @returns {string}
															 */
															function escapeQuotes(value) {
																var defaultValue =
																	arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

																// There's no lookback in JS, so /(^|[^\\])"/ only matches the first of two `"`s.
																// Instead, just match anything before a double-quote and escape if it's not already escaped.
																return !value
																	? defaultValue
																	: value.replace(/([^"]*)"/g, function(_, prefix) {
																			return /\\/.test(prefix) ? prefix + '"' : prefix + '\\"';
																	  });
															}

															/***/
														},
														/* 6 */
														/***/ function(module, exports) {
															'use strict';

															exports.__esModule = true;
															exports['default'] = fixedReadTokenFactory;
															/**
															 * Empty Elements - HTML 4.01
															 *
															 * @type {RegExp}
															 */
															var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;

															/**
															 * Elements that you can intentionally leave open (and which close themselves)
															 *
															 * @type {RegExp}
															 */
															var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;

															/**
															 * Corrects a token.
															 *
															 * @param {Token} tok The token to correct
															 * @returns {Token} The corrected token
															 */
															function correct(tok) {
																if (tok && tok.type === 'startTag') {
																	tok.unary = EMPTY.test(tok.tagName) || tok.unary;
																	tok.html5Unary = !/\/>$/.test(tok.text);
																}
																return tok;
															}

															/**
															 * Peeks at the next token in the parser.
															 *
															 * @param {HtmlParser} parser The parser
															 * @param {Function} readTokenImpl The underlying readToken implementation
															 * @returns {Token} The next token
															 */
															function peekToken(parser, readTokenImpl) {
																var tmp = parser.stream;
																var tok = correct(readTokenImpl());
																parser.stream = tmp;
																return tok;
															}

															/**
															 * Closes the last token.
															 *
															 * @param {HtmlParser} parser The parser
															 * @param {Array<Token>} stack The stack
															 */
															function closeLast(parser, stack) {
																var tok = stack.pop();

																// prepend close tag to stream.
																parser.prepend('</' + tok.tagName + '>');
															}

															/**
															 * Create a new token stack.
															 *
															 * @returns {Array<Token>}
															 */
															function newStack() {
																var stack = [];

																stack.last = function() {
																	return this[this.length - 1];
																};

																stack.lastTagNameEq = function(tagName) {
																	var last = this.last();
																	return last && last.tagName && last.tagName.toUpperCase() === tagName.toUpperCase();
																};

																stack.containsTagName = function(tagName) {
																	for (var i = 0, tok; (tok = this[i]); i++) {
																		if (tok.tagName === tagName) {
																			return true;
																		}
																	}
																	return false;
																};

																return stack;
															}

															/**
															 * Return a readToken implementation that fixes input.
															 *
															 * @param {HtmlParser} parser The parser
															 * @param {Object} options Options for fixing
															 * @param {boolean} options.tagSoupFix True to fix tag soup scenarios
															 * @param {boolean} options.selfCloseFix True to fix self-closing tags
															 * @param {Function} readTokenImpl The underlying readToken implementation
															 * @returns {Function}
															 */
															function fixedReadTokenFactory(parser, options, readTokenImpl) {
																var stack = newStack();

																var handlers = {
																	startTag: function startTag(tok) {
																		var tagName = tok.tagName;

																		if (tagName.toUpperCase() === 'TR' && stack.lastTagNameEq('TABLE')) {
																			parser.prepend('<TBODY>');
																			prepareNextToken();
																		} else if (
																			options.selfCloseFix &&
																			CLOSESELF.test(tagName) &&
																			stack.containsTagName(tagName)
																		) {
																			if (stack.lastTagNameEq(tagName)) {
																				closeLast(parser, stack);
																			} else {
																				parser.prepend('</' + tok.tagName + '>');
																				prepareNextToken();
																			}
																		} else if (!tok.unary) {
																			stack.push(tok);
																		}
																	},
																	endTag: function endTag(tok) {
																		var last = stack.last();
																		if (last) {
																			if (options.tagSoupFix && !stack.lastTagNameEq(tok.tagName)) {
																				// cleanup tag soup
																				closeLast(parser, stack);
																			} else {
																				stack.pop();
																			}
																		} else if (options.tagSoupFix) {
																			// cleanup tag soup part 2: skip this token
																			readTokenImpl();
																			prepareNextToken();
																		}
																	}
																};

																function prepareNextToken() {
																	var tok = peekToken(parser, readTokenImpl);
																	if (tok && handlers[tok.type]) {
																		handlers[tok.type](tok);
																	}
																}

																return function fixedReadToken() {
																	prepareNextToken();
																	return correct(readTokenImpl());
																};
															}

															/***/
														}
														/******/
													]
												);
											});

											/***/
										},
										/* 4 */
										/***/ function(module, exports) {
											'use strict';

											exports.__esModule = true;

											var _typeof =
												typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
													? function(obj) {
															return typeof obj;
													  }
													: function(obj) {
															return obj &&
																typeof Symbol === 'function' &&
																obj.constructor === Symbol &&
																obj !== Symbol.prototype
																? 'symbol'
																: typeof obj;
													  };

											exports.existy = existy;
											exports.isFunction = isFunction;
											exports.each = each;
											exports.eachKey = eachKey;
											exports.defaults = defaults;
											exports.toArray = toArray;
											exports.last = last;
											exports.isTag = isTag;
											exports.isScript = isScript;
											exports.isStyle = isStyle;
											/**
											 * Determine if the thing is not undefined and not null.
											 *
											 * @param {*} thing The thing to test
											 * @returns {boolean} True if the thing is not undefined and not null.
											 */
											function existy(thing) {
												return thing !== void 0 && thing !== null;
											}

											/**
											 * Is this a function?
											 *
											 * @param {*} x The variable to test
											 * @returns {boolean} True if the variable is a function
											 */
											function isFunction(x) {
												return 'function' === typeof x;
											}

											/**
											 * Loop over each item in an array-like value.
											 *
											 * @param {Array<*>} arr The array to loop over
											 * @param {Function} fn The function to call
											 * @param {?Object} target The object to bind to the function
											 */
											function each(arr, fn, target) {
												var i = void 0;
												var len = (arr && arr.length) || 0;
												for (i = 0; i < len; i++) {
													fn.call(target, arr[i], i);
												}
											}

											/**
											 * Loop over each key/value pair in a hash.
											 *
											 * @param {Object} obj The object
											 * @param {Function} fn The function to call
											 * @param {?Object} target The object to bind to the function
											 */
											function eachKey(obj, fn, target) {
												for (var key in obj) {
													if (obj.hasOwnProperty(key)) {
														fn.call(target, key, obj[key]);
													}
												}
											}

											/**
											 * Set default options where some option was not specified.
											 *
											 * @param {Object} options The destination
											 * @param {Object} _defaults The defaults
											 * @returns {Object}
											 */
											function defaults(options, _defaults) {
												options = options || {};
												eachKey(_defaults, function(key, val) {
													if (!existy(options[key])) {
														options[key] = val;
													}
												});
												return options;
											}

											/**
											 * Convert value (e.g., a NodeList) to an array.
											 *
											 * @param {*} obj The object
											 * @returns {Array<*>}
											 */
											function toArray(obj) {
												try {
													return Array.prototype.slice.call(obj);
												} catch (e) {
													var _ret = (function() {
														var ret = [];
														each(obj, function(val) {
															ret.push(val);
														});
														return {
															v: ret
														};
													})();

													if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object') return _ret.v;
												}
											}

											/**
											 * Get the last item in an array
											 *
											 * @param {Array<*>} array The array
											 * @returns {*} The last item in the array
											 */
											function last(array) {
												return array[array.length - 1];
											}

											/**
											 * Test if token is a script tag.
											 *
											 * @param {Object} tok The token
											 * @param {String} tag The tag name
											 * @returns {boolean} True if the token is a script tag
											 */
											function isTag(tok, tag) {
												return !tok || !(tok.type === 'startTag' || tok.type === 'atomicTag') || !('tagName' in tok)
													? !1
													: !!~tok.tagName.toLowerCase().indexOf(tag);
											}

											/**
											 * Test if token is a script tag.
											 *
											 * @param {Object} tok The token
											 * @returns {boolean} True if the token is a script tag
											 */
											function isScript(tok) {
												return isTag(tok, 'script');
											}

											/**
											 * Test if token is a style tag.
											 *
											 * @param {Object} tok The token
											 * @returns {boolean} True if the token is a style tag
											 */
											function isStyle(tok) {
												return isTag(tok, 'style');
											}

											/***/
										}
										/******/
									]
								);
							});
							//# sourceMappingURL=postscribe.js.map
						}
					},
					'core/src/lib/actions/helpers/getSourceByUrl.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * Copyright 2019 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';
							var loadScript = require('@adobe/reactor-load-script');
							var Promise = require('@adobe/reactor-promise');

							var codeBySourceUrl = {};
							var scriptStore = {};

							var loadScriptOnlyOnce = function(url) {
								if (!scriptStore[url]) {
									scriptStore[url] = loadScript(url);
								}

								return scriptStore[url];
							};

							_satellite.__registerScript = function(sourceUrl, code) {
								codeBySourceUrl[sourceUrl] = code;
							};

							module.exports = function(sourceUrl) {
								if (codeBySourceUrl[sourceUrl]) {
									return Promise.resolve(codeBySourceUrl[sourceUrl]);
								} else {
									return new Promise(function(resolve) {
										loadScriptOnlyOnce(sourceUrl).then(
											function() {
												resolve(codeBySourceUrl[sourceUrl]);
											},
											function() {
												resolve();
											}
										);
									});
								}
							};
						}
					},
					'core/src/lib/events/helpers/pageLifecycleEvents.js': {
						script: function(module, exports, require, turbine) {
							/***************************************************************************************
							 * (c) 2018 Adobe. All rights reserved.
							 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
							 * you may not use this file except in compliance with the License. You may obtain a copy
							 * of the License at http://www.apache.org/licenses/LICENSE-2.0
							 *
							 * Unless required by applicable law or agreed to in writing, software distributed under
							 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
							 * OF ANY KIND, either express or implied. See the License for the specific language
							 * governing permissions and limitations under the License.
							 ****************************************************************************************/

							'use strict';

							// We need to be able to fire the rules in a specific order, no matter if the library is loaded
							// sync or async. The rules are fired in the following order:
							// Library loaded rules -> Page bottom rules -> Dom Ready rules -> Window load rules.

							var window = require('@adobe/reactor-window');
							var document = require('@adobe/reactor-document');

							var isIE10 = window.navigator.appVersion.indexOf('MSIE 10') !== -1;
							var WINDOW_LOADED = 'WINDOW_LOADED';
							var DOM_READY = 'DOM_READY';
							var PAGE_BOTTOM = 'PAGE_BOTTOM';

							var lifecycleEventsOrder = [PAGE_BOTTOM, DOM_READY, WINDOW_LOADED];

							var createSyntheticEvent = function(element, nativeEvent) {
								return {
									element: element,
									target: element,
									nativeEvent: nativeEvent
								};
							};

							var registry = {};
							lifecycleEventsOrder.forEach(function(event) {
								registry[event] = [];
							});

							var processRegistry = function(lifecycleEvent, nativeEvent) {
								lifecycleEventsOrder
									.slice(0, getLifecycleEventIndex(lifecycleEvent) + 1)
									.forEach(function(lifecycleEvent) {
										processTriggers(nativeEvent, lifecycleEvent);
									});
							};

							var detectLifecycleEvent = function() {
								if (document.readyState === 'complete') {
									return WINDOW_LOADED;
								} else if (document.readyState === 'interactive') {
									return !isIE10 ? DOM_READY : null;
								}
							};

							var getLifecycleEventIndex = function(event) {
								return lifecycleEventsOrder.indexOf(event);
							};

							var processTriggers = function(nativeEvent, lifecycleEvent) {
								registry[lifecycleEvent].forEach(function(triggerData) {
									processTrigger(nativeEvent, triggerData);
								});
								registry[lifecycleEvent] = [];
							};

							var processTrigger = function(nativeEvent, triggerData) {
								var trigger = triggerData.trigger;
								var syntheticEventFn = triggerData.syntheticEventFn;

								trigger(syntheticEventFn ? syntheticEventFn(nativeEvent) : null);
							};

							window._satellite = window._satellite || {};
							window._satellite.pageBottom = processRegistry.bind(null, PAGE_BOTTOM);

							document.addEventListener('DOMContentLoaded', processRegistry.bind(null, DOM_READY), true);
							window.addEventListener('load', processRegistry.bind(null, WINDOW_LOADED), true);

							// Depending on the way the Launch library was loaded, none of the registered listeners that
							// execute `processRegistry` may fire . We need to execute the `processRegistry` method at
							// least once. If this timeout fires before any of the registered listeners, we auto-detect the
							// current lifecycle event and fire all the registered triggers in order. We don't care if the
							// `processRegistry` is called multiple times for the same lifecycle event. We fire the registered
							// triggers for a lifecycle event only once. We used a `setTimeout` here to make sure all the rules
							// using Library Loaded are registered and executed synchronously and before rules using any of the
							// other lifecycle event types.
							window.setTimeout(function() {
								var lifecycleEvent = detectLifecycleEvent();
								if (lifecycleEvent) {
									processRegistry(lifecycleEvent);
								}
							}, 0);

							module.exports = {
								registerLibraryLoadedTrigger: function(trigger) {
									trigger();
								},
								registerPageBottomTrigger: function(trigger) {
									registry[PAGE_BOTTOM].push({
										trigger: trigger
									});
								},
								registerDomReadyTrigger: function(trigger) {
									registry[DOM_READY].push({
										trigger: trigger,
										syntheticEventFn: createSyntheticEvent.bind(null, document)
									});
								},
								registerWindowLoadedTrigger: function(trigger) {
									registry[WINDOW_LOADED].push({
										trigger: trigger,
										syntheticEventFn: createSyntheticEvent.bind(null, window)
									});
								}
							};
						}
					}
				},
				hostedLibFilesBaseUrl: '/launch/28200064b0a4/hostedLibFiles/EP0fe6b1b3170b414e92e8f7ad4f74f857/'
			},
			'adobe-mcid': {
				displayName: 'Experience Cloud ID Service',
				modules: {
					'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2016 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							'use strict';
							var document = require('@adobe/reactor-document');
							var VisitorAPI = require('../codeLibrary/VisitorAPI');
							var timeUnits = require('../../view/utils/timeUnits');

							var transformArrayToObject = function(configs) {
								var initConfig = configs.reduce(function(obj, config) {
									var value = /^(true|false)$/i.test(config.value) ? JSON.parse(config.value) : config.value;

									obj[config.name] = value;

									return obj;
								}, {});

								return initConfig;
							};

							var initializeVisitorId = function(Visitor) {
								var extensionSettings = turbine.getExtensionSettings();
								if (typeof extensionSettings.orgId !== 'string') {
									throw new TypeError('Org ID is not a string.');
								}

								var initConfig = transformArrayToObject(extensionSettings.variables || []);
								var doesOptInApply = extensionSettings.doesOptInApply;
								if (doesOptInApply) {
									if (typeof doesOptInApply === 'boolean') {
										initConfig['doesOptInApply'] = doesOptInApply;
									} else if (extensionSettings.optInCallback) {
										initConfig['doesOptInApply'] = extensionSettings.optInCallback;
									}
								}

								var isOptInStorageEnabled = extensionSettings.isOptInStorageEnabled;
								if (isOptInStorageEnabled) {
									initConfig['isOptInStorageEnabled'] = isOptInStorageEnabled;
								}

								var optInCookieDomain = extensionSettings.optInCookieDomain;
								if (optInCookieDomain) {
									initConfig['optInCookieDomain'] = optInCookieDomain;
								}

								var optInStorageExpiry = extensionSettings.optInStorageExpiry;
								if (optInStorageExpiry) {
									var timeUnit = extensionSettings.timeUnit;
									if (timeUnit && timeUnits[timeUnit]) {
										var seconds = optInStorageExpiry * timeUnits[timeUnit];
										initConfig['optInStorageExpiry'] = seconds;
									}
								} else if (isOptInStorageEnabled === true) {
									// default is 13 months
									initConfig['optInStorageExpiry'] = 13 * 30 * 24 * 3600;
								}

								var previousPermissions = extensionSettings.previousPermissions;
								if (previousPermissions) {
									initConfig['previousPermissions'] = previousPermissions;
								}

								var preOptInApprovals = extensionSettings.preOptInApprovals;
								if (preOptInApprovals) {
									initConfig['preOptInApprovals'] = preOptInApprovals;
								} else {
									var preOptInApprovalInput = extensionSettings.preOptInApprovalInput;
									if (preOptInApprovalInput) {
										initConfig['preOptInApprovals'] = preOptInApprovalInput;
									}
								}

								var isIabContext = extensionSettings.isIabContext;
								if (isIabContext) {
									initConfig['isIabContext'] = isIabContext;
								}

								var instance = Visitor.getInstance(extensionSettings.orgId, initConfig);

								turbine.logger.info('Created instance using orgId: "' + extensionSettings.orgId + '"');
								turbine.logger.info('Set variables: ' + JSON.stringify(initConfig));

								// getMarketingCloudVisitorID is called automatically when the instance is created, but
								// we call it here so that we can log the ID once it has been retrieved from the server.
								// Calling getMarketingCloudVisitorID multiple times will not result in multiple requests
								// to the server.
								instance.getMarketingCloudVisitorID(function(id) {
									turbine.logger.info('Obtained Marketing Cloud Visitor Id: ' + id);
								}, true);

								return instance;
							};

							var excludePathsMatched = function(path) {
								var extensionSettings = turbine.getExtensionSettings();
								var pathExclusions = extensionSettings.pathExclusions || [];

								return pathExclusions.some(function(pathExclusion) {
									if (pathExclusion.valueIsRegex) {
										return new RegExp(pathExclusion.value, 'i').test(path);
									} else {
										return pathExclusion.value === path;
									}
								});
							};

							var visitorIdInstance = null;

							// Overwrite the getVisitorId exposed in Turbine. This is largely for backward compatibility
							// since DTM supported this method on _satellite.
							_satellite.getVisitorId = function() {
								return visitorIdInstance;
							};

							if (excludePathsMatched(document.location.pathname)) {
								turbine.logger.warn(
									'MCID library not loaded. One of the path exclusions matches the ' + 'current path.'
								);
							} else {
								visitorIdInstance = initializeVisitorId(VisitorAPI);
							}

							module.exports = visitorIdInstance;
						},
						name: 'mcid-instance',
						shared: true
					},
					'adobe-mcid/src/lib/codeLibrary/VisitorAPI.js': {
						script: function(module, exports, require, turbine) {
							/* istanbul ignore next */
							module.exports = (function() {
								var e = (function() {
									'use strict';
									function e(t) {
										return (e =
											'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
												? function(e) {
														return typeof e;
												  }
												: function(e) {
														return e &&
															'function' == typeof Symbol &&
															e.constructor === Symbol &&
															e !== Symbol.prototype
															? 'symbol'
															: typeof e;
												  })(t);
									}
									function t(e, t, n) {
										return (
											t in e
												? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
												: (e[t] = n),
											e
										);
									}
									function n() {
										return {
											callbacks: {},
											add: function(e, t) {
												this.callbacks[e] = this.callbacks[e] || [];
												var n = this.callbacks[e].push(t) - 1,
													i = this;
												return function() {
													i.callbacks[e].splice(n, 1);
												};
											},
											execute: function(e, t) {
												if (this.callbacks[e]) {
													(t = void 0 === t ? [] : t), (t = t instanceof Array ? t : [t]);
													try {
														for (; this.callbacks[e].length; ) {
															var n = this.callbacks[e].shift();
															'function' == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t);
														}
														delete this.callbacks[e];
													} catch (e) {}
												}
											},
											executeAll: function(e, t) {
												(t || (e && !j.isObjectEmpty(e))) &&
													Object.keys(this.callbacks).forEach(function(t) {
														var n = void 0 !== e[t] ? e[t] : '';
														this.execute(t, n);
													}, this);
											},
											hasCallbacks: function() {
												return Boolean(Object.keys(this.callbacks).length);
											}
										};
									}
									function i(e, t, n) {
										var i = null == e ? void 0 : e[t];
										return void 0 === i ? n : i;
									}
									function r(e) {
										for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++) if (!t.test(e[n])) return !1;
										return !0;
									}
									function a(e, t) {
										for (; e.length < t.length; ) e.push('0');
										for (; t.length < e.length; ) t.push('0');
									}
									function o(e, t) {
										for (var n = 0; n < e.length; n++) {
											var i = parseInt(e[n], 10),
												r = parseInt(t[n], 10);
											if (i > r) return 1;
											if (r > i) return -1;
										}
										return 0;
									}
									function s(e, t) {
										if (e === t) return 0;
										var n = e.toString().split('.'),
											i = t.toString().split('.');
										return r(n.concat(i)) ? (a(n, i), o(n, i)) : NaN;
									}
									function l(e) {
										return e === Object(e) && 0 === Object.keys(e).length;
									}
									function c(e) {
										return 'function' == typeof e || (e instanceof Array && e.length);
									}
									function u() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
											t =
												arguments.length > 1 && void 0 !== arguments[1]
													? arguments[1]
													: function() {
															return !0;
													  };
										(this.log = _e('log', e, t)), (this.warn = _e('warn', e, t)), (this.error = _e('error', e, t));
									}
									function d() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
											t = e.isEnabled,
											n = e.cookieName,
											i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
											r = i.cookies;
										return t && n && r
											? {
													remove: function() {
														r.remove(n);
													},
													get: function() {
														var e = r.get(n),
															t = {};
														try {
															t = JSON.parse(e);
														} catch (e) {
															t = {};
														}
														return t;
													},
													set: function(e, t) {
														(t = t || {}),
															r.set(n, JSON.stringify(e), {
																domain: t.optInCookieDomain || '',
																cookieLifetime: t.optInStorageExpiry || 3419e4,
																expires: !0
															});
													}
											  }
											: { get: Le, set: Le, remove: Le };
									}
									function f(e) {
										(this.name = this.constructor.name),
											(this.message = e),
											'function' == typeof Error.captureStackTrace
												? Error.captureStackTrace(this, this.constructor)
												: (this.stack = new Error(e).stack);
									}
									function p() {
										function e(e, t) {
											var n = De(e);
											return n.length
												? n.every(function(e) {
														return !!t[e];
												  })
												: Se(t);
										}
										function t() {
											M(b),
												O(ce.COMPLETE),
												_(h.status, h.permissions),
												m.set(h.permissions, { optInCookieDomain: l, optInStorageExpiry: c }),
												C.execute(xe);
										}
										function n(e) {
											return function(n, i) {
												if (!Ae(n))
													throw new Error('[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.');
												return O(ce.CHANGED), Object.assign(b, ye(De(n), e)), i || t(), h;
											};
										}
										var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
											r = i.doesOptInApply,
											a = i.previousPermissions,
											o = i.preOptInApprovals,
											s = i.isOptInStorageEnabled,
											l = i.optInCookieDomain,
											c = i.optInStorageExpiry,
											u = i.isIabContext,
											f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
											p = f.cookies,
											g = Pe(a);
										Re(g, 'Invalid `previousPermissions`!'), Re(o, 'Invalid `preOptInApprovals`!');
										var m = d({ isEnabled: !!s, cookieName: 'adobeujs-optin' }, { cookies: p }),
											h = this,
											_ = le(h),
											C = ge(),
											I = Me(g),
											v = Me(o),
											D = m.get(),
											S = {},
											A = (function(e, t) {
												return ke(e) || (t && ke(t)) ? ce.COMPLETE : ce.PENDING;
											})(I, D),
											y = (function(e, t, n) {
												var i = ye(pe, !r);
												return r ? Object.assign({}, i, e, t, n) : i;
											})(v, I, D),
											b = be(y),
											O = function(e) {
												return (A = e);
											},
											M = function(e) {
												return (y = e);
											};
										(h.deny = n(!1)),
											(h.approve = n(!0)),
											(h.denyAll = h.deny.bind(h, pe)),
											(h.approveAll = h.approve.bind(h, pe)),
											(h.isApproved = function(t) {
												return e(t, h.permissions);
											}),
											(h.isPreApproved = function(t) {
												return e(t, v);
											}),
											(h.fetchPermissions = function(e) {
												var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
													n = t ? h.on(ce.COMPLETE, e) : Le;
												return (
													!r || (r && h.isComplete) || !!o
														? e(h.permissions)
														: t ||
														  C.add(xe, function() {
																return e(h.permissions);
														  }),
													n
												);
											}),
											(h.complete = function() {
												h.status === ce.CHANGED && t();
											}),
											(h.registerPlugin = function(e) {
												if (!e || !e.name || 'function' != typeof e.onRegister) throw new Error(je);
												S[e.name] || ((S[e.name] = e), e.onRegister.call(e, h));
											}),
											(h.execute = Ne(S)),
											Object.defineProperties(h, {
												permissions: {
													get: function() {
														return y;
													}
												},
												status: {
													get: function() {
														return A;
													}
												},
												Categories: {
													get: function() {
														return ue;
													}
												},
												doesOptInApply: {
													get: function() {
														return !!r;
													}
												},
												isPending: {
													get: function() {
														return h.status === ce.PENDING;
													}
												},
												isComplete: {
													get: function() {
														return h.status === ce.COMPLETE;
													}
												},
												__plugins: {
													get: function() {
														return Object.keys(S);
													}
												},
												isIabContext: {
													get: function() {
														return u;
													}
												}
											});
									}
									function g(e, t) {
										function n() {
											(r = null), e.call(e, new f('The call took longer than you wanted!'));
										}
										function i() {
											r && (clearTimeout(r), e.apply(e, arguments));
										}
										if (void 0 === t) return e;
										var r = setTimeout(n, t);
										return i;
									}
									function m() {
										if (window.__cmp) return window.__cmp;
										var e = window;
										if (e === window.top) return void Ie.error('__cmp not found');
										for (var t; !t; ) {
											e = e.parent;
											try {
												e.frames.__cmpLocator && (t = e);
											} catch (e) {}
											if (e === window.top) break;
										}
										if (!t) return void Ie.error('__cmp not found');
										var n = {};
										return (
											(window.__cmp = function(e, i, r) {
												var a = Math.random() + '',
													o = { __cmpCall: { command: e, parameter: i, callId: a } };
												(n[a] = r), t.postMessage(o, '*');
											}),
											window.addEventListener(
												'message',
												function(e) {
													var t = e.data;
													if ('string' == typeof t)
														try {
															t = JSON.parse(e.data);
														} catch (e) {}
													if (t.__cmpReturn) {
														var i = t.__cmpReturn;
														n[i.callId] && (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
													}
												},
												!1
											),
											window.__cmp
										);
									}
									function h() {
										var e = this;
										(e.name = 'iabPlugin'), (e.version = '0.0.1');
										var t = ge(),
											n = { allConsentData: null },
											i = function(e) {
												var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
												return (n[e] = t);
											};
										(e.fetchConsentData = function(e) {
											var t = e.callback,
												n = e.timeout,
												i = g(t, n);
											r({ callback: i });
										}),
											(e.isApproved = function(e) {
												var t = e.callback,
													i = e.category,
													a = e.timeout;
												if (n.allConsentData)
													return t(null, s(i, n.allConsentData.vendorConsents, n.allConsentData.purposeConsents));
												var o = g(function(e) {
													var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
														r = n.vendorConsents,
														a = n.purposeConsents;
													t(e, s(i, r, a));
												}, a);
												r({ category: i, callback: o });
											}),
											(e.onRegister = function(t) {
												var n = Object.keys(de),
													i = function(e) {
														var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
															r = i.purposeConsents,
															a = i.gdprApplies,
															o = i.vendorConsents;
														!e &&
															a &&
															o &&
															r &&
															(n.forEach(function(e) {
																var n = s(e, o, r);
																t[n ? 'approve' : 'deny'](e, !0);
															}),
															t.complete());
													};
												e.fetchConsentData({ callback: i });
											});
										var r = function(e) {
												var r = e.callback;
												if (n.allConsentData) return r(null, n.allConsentData);
												t.add('FETCH_CONSENT_DATA', r);
												var s = {};
												o(function() {
													var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
														r = e.purposeConsents,
														o = e.gdprApplies,
														l = e.vendorConsents;
													(arguments.length > 1 ? arguments[1] : void 0) &&
														((s = { purposeConsents: r, gdprApplies: o, vendorConsents: l }), i('allConsentData', s)),
														a(function() {
															var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
															(arguments.length > 1 ? arguments[1] : void 0) &&
																((s.consentString = e.consentData), i('allConsentData', s)),
																t.execute('FETCH_CONSENT_DATA', [null, n.allConsentData]);
														});
												});
											},
											a = function(e) {
												var t = m();
												t && t('getConsentData', null, e);
											},
											o = function(e) {
												var t = Fe(de),
													n = m();
												n && n('getVendorConsents', t, e);
											},
											s = function(e) {
												var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
													n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
													i = !!t[de[e]];
												return (
													i &&
													(function() {
														return fe[e].every(function(e) {
															return n[e];
														});
													})()
												);
											};
									}
									var _ =
										'undefined' != typeof globalThis
											? globalThis
											: 'undefined' != typeof window
											? window
											: 'undefined' != typeof global
											? global
											: 'undefined' != typeof self
											? self
											: {};
									Object.assign =
										Object.assign ||
										function(e) {
											for (var t, n, i = 1; i < arguments.length; ++i) {
												n = arguments[i];
												for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
											}
											return e;
										};
									var C,
										I,
										v = { HANDSHAKE: 'HANDSHAKE', GETSTATE: 'GETSTATE', PARENTSTATE: 'PARENTSTATE' },
										D = {
											MCMID: 'MCMID',
											MCAID: 'MCAID',
											MCAAMB: 'MCAAMB',
											MCAAMLH: 'MCAAMLH',
											MCOPTOUT: 'MCOPTOUT',
											CUSTOMERIDS: 'CUSTOMERIDS'
										},
										S = {
											MCMID: 'getMarketingCloudVisitorID',
											MCAID: 'getAnalyticsVisitorID',
											MCAAMB: 'getAudienceManagerBlob',
											MCAAMLH: 'getAudienceManagerLocationHint',
											MCOPTOUT: 'isOptedOut',
											ALLFIELDS: 'getVisitorValues'
										},
										A = { CUSTOMERIDS: 'getCustomerIDs' },
										y = {
											MCMID: 'getMarketingCloudVisitorID',
											MCAAMB: 'getAudienceManagerBlob',
											MCAAMLH: 'getAudienceManagerLocationHint',
											MCOPTOUT: 'isOptedOut',
											MCAID: 'getAnalyticsVisitorID',
											CUSTOMERIDS: 'getCustomerIDs',
											ALLFIELDS: 'getVisitorValues'
										},
										b = { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
										O = { MCMID: 'MCMID', MCOPTOUT: 'MCOPTOUT', MCAID: 'MCAID', MCAAMLH: 'MCAAMLH', MCAAMB: 'MCAAMB' },
										M = { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
										k = { GLOBAL: 'global' },
										E = {
											MESSAGES: v,
											STATE_KEYS_MAP: D,
											ASYNC_API_MAP: S,
											SYNC_API_MAP: A,
											ALL_APIS: y,
											FIELDGROUP_TO_FIELD: b,
											FIELDS: O,
											AUTH_STATE: M,
											OPT_OUT: k
										},
										T = E.STATE_KEYS_MAP,
										L = function(e) {
											function t() {}
											function n(t, n) {
												var i = this;
												return function() {
													var r = e(0, t),
														a = {};
													return (a[t] = r), i.setStateAndPublish(a), n(r), r;
												};
											}
											(this.getMarketingCloudVisitorID = function(e) {
												e = e || t;
												var i = this.findField(T.MCMID, e),
													r = n.call(this, T.MCMID, e);
												return void 0 !== i ? i : r();
											}),
												(this.getVisitorValues = function(e) {
													this.getMarketingCloudVisitorID(function(t) {
														e({ MCMID: t });
													});
												});
										},
										P = E.MESSAGES,
										R = E.ASYNC_API_MAP,
										w = E.SYNC_API_MAP,
										F = function() {
											function e() {}
											function t(e, t) {
												var n = this;
												return function() {
													return n.callbackRegistry.add(e, t), n.messageParent(P.GETSTATE), '';
												};
											}
											function n(n) {
												this[R[n]] = function(i) {
													i = i || e;
													var r = this.findField(n, i),
														a = t.call(this, n, i);
													return void 0 !== r ? r : a();
												};
											}
											function i(t) {
												this[w[t]] = function() {
													return this.findField(t, e) || {};
												};
											}
											Object.keys(R).forEach(n, this), Object.keys(w).forEach(i, this);
										},
										N = E.ASYNC_API_MAP,
										x = function() {
											Object.keys(N).forEach(function(e) {
												this[N[e]] = function(t) {
													this.callbackRegistry.add(e, t);
												};
											}, this);
										},
										j = (function(e, t) {
											return (t = { exports: {} }), e(t, t.exports), t.exports;
										})(function(t, n) {
											(n.isObjectEmpty = function(e) {
												return e === Object(e) && 0 === Object.keys(e).length;
											}),
												(n.isValueEmpty = function(e) {
													return '' === e || n.isObjectEmpty(e);
												}),
												(n.getIeVersion = function() {
													if (document.documentMode) return document.documentMode;
													for (var e = 7; e > 4; e--) {
														var t = document.createElement('div');
														if (
															((t.innerHTML = '\x3c!--[if IE ' + e + ']><span></span><![endif]--\x3e'),
															t.getElementsByTagName('span').length)
														)
															return (t = null), e;
														t = null;
													}
													return null;
												}),
												(n.encodeAndBuildRequest = function(e, t) {
													return e.map(encodeURIComponent).join(t);
												}),
												(n.isObject = function(t) {
													return null !== t && 'object' === e(t) && !1 === Array.isArray(t);
												}),
												(n.defineGlobalNamespace = function() {
													return (window.adobe = n.isObject(window.adobe) ? window.adobe : {}), window.adobe;
												}),
												(n.pluck = function(e, t) {
													return t.reduce(function(t, n) {
														return e[n] && (t[n] = e[n]), t;
													}, Object.create(null));
												}),
												(n.parseOptOut = function(e, t, n) {
													t || ((t = n), e.d_optout && e.d_optout instanceof Array && (t = e.d_optout.join(',')));
													var i = parseInt(e.d_ottl, 10);
													return isNaN(i) && (i = 7200), { optOut: t, d_ottl: i };
												}),
												(n.normalizeBoolean = function(e) {
													var t = e;
													return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
												});
										}),
										V = (j.isObjectEmpty,
										j.isValueEmpty,
										j.getIeVersion,
										j.encodeAndBuildRequest,
										j.isObject,
										j.defineGlobalNamespace,
										j.pluck,
										j.parseOptOut,
										j.normalizeBoolean,
										n),
										U = E.MESSAGES,
										H = { 0: 'prefix', 1: 'orgID', 2: 'state' },
										B = function(e, t) {
											(this.parse = function(e) {
												try {
													var t = {};
													return (
														e.data.split('|').forEach(function(e, n) {
															if (void 0 !== e) {
																t[H[n]] = 2 !== n ? e : JSON.parse(e);
															}
														}),
														t
													);
												} catch (e) {}
											}),
												(this.isInvalid = function(n) {
													var i = this.parse(n);
													if (!i || Object.keys(i).length < 2) return !0;
													var r = e !== i.orgID,
														a = !t || n.origin !== t,
														o = -1 === Object.keys(U).indexOf(i.prefix);
													return r || a || o;
												}),
												(this.send = function(n, i, r) {
													var a = i + '|' + e;
													r && r === Object(r) && (a += '|' + JSON.stringify(r));
													try {
														n.postMessage(a, t);
													} catch (e) {}
												});
										},
										G = E.MESSAGES,
										Y = function(e, t, n, i) {
											function r(e) {
												Object.assign(p, e);
											}
											function a(e) {
												Object.assign(p.state, e),
													Object.assign(p.state.ALLFIELDS, e),
													p.callbackRegistry.executeAll(p.state);
											}
											function o(e) {
												if (!h.isInvalid(e)) {
													m = !1;
													var t = h.parse(e);
													p.setStateAndPublish(t.state);
												}
											}
											function s(e) {
												!m && g && ((m = !0), h.send(i, e));
											}
											function l() {
												r(new L(n._generateID)),
													p.getMarketingCloudVisitorID(),
													p.callbackRegistry.executeAll(p.state, !0),
													_.removeEventListener('message', c);
											}
											function c(e) {
												if (!h.isInvalid(e)) {
													var t = h.parse(e);
													(m = !1),
														_.clearTimeout(p._handshakeTimeout),
														_.removeEventListener('message', c),
														r(new F(p)),
														_.addEventListener('message', o),
														p.setStateAndPublish(t.state),
														p.callbackRegistry.hasCallbacks() && s(G.GETSTATE);
												}
											}
											function u() {
												g && postMessage
													? (_.addEventListener('message', c),
													  s(G.HANDSHAKE),
													  (p._handshakeTimeout = setTimeout(l, 250)))
													: l();
											}
											function d() {
												_.s_c_in || ((_.s_c_il = []), (_.s_c_in = 0)),
													(p._c = 'Visitor'),
													(p._il = _.s_c_il),
													(p._in = _.s_c_in),
													(p._il[p._in] = p),
													_.s_c_in++;
											}
											function f() {
												function e(e) {
													0 !== e.indexOf('_') && 'function' == typeof n[e] && (p[e] = function() {});
												}
												Object.keys(n).forEach(e),
													(p.getSupplementalDataID = n.getSupplementalDataID),
													(p.isAllowed = function() {
														return !0;
													});
											}
											var p = this,
												g = t.whitelistParentDomain;
											(p.state = { ALLFIELDS: {} }),
												(p.version = n.version),
												(p.marketingCloudOrgID = e),
												(p.cookieDomain = n.cookieDomain || ''),
												(p._instanceType = 'child');
											var m = !1,
												h = new B(e, g);
											(p.callbackRegistry = V()),
												(p.init = function() {
													d(), f(), r(new x(p)), u();
												}),
												(p.findField = function(e, t) {
													if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
												}),
												(p.messageParent = s),
												(p.setStateAndPublish = a);
										},
										q = E.MESSAGES,
										X = E.ALL_APIS,
										W = E.ASYNC_API_MAP,
										J = E.FIELDGROUP_TO_FIELD,
										K = function(e, t) {
											function n() {
												var t = {};
												return (
													Object.keys(X).forEach(function(n) {
														var i = X[n],
															r = e[i]();
														j.isValueEmpty(r) || (t[n] = r);
													}),
													t
												);
											}
											function i() {
												var t = [];
												return (
													e._loading &&
														Object.keys(e._loading).forEach(function(n) {
															if (e._loading[n]) {
																var i = J[n];
																t.push(i);
															}
														}),
													t.length ? t : null
												);
											}
											function r(t) {
												return function n(r) {
													var a = i();
													if (a) {
														var o = W[a[0]];
														e[o](n, !0);
													} else t();
												};
											}
											function a(e, i) {
												var r = n();
												t.send(e, i, r);
											}
											function o(e) {
												l(e), a(e, q.HANDSHAKE);
											}
											function s(e) {
												r(function() {
													a(e, q.PARENTSTATE);
												})();
											}
											function l(n) {
												function i(i) {
													r.call(e, i), t.send(n, q.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
												}
												var r = e.setCustomerIDs;
												e.setCustomerIDs = i;
											}
											return function(e) {
												if (!t.isInvalid(e)) {
													(t.parse(e).prefix === q.HANDSHAKE ? o : s)(e.source);
												}
											};
										},
										z = function(e, t) {
											function n(e) {
												return function(n) {
													(i[e] = n), r++, r === a && t(i);
												};
											}
											var i = {},
												r = 0,
												a = Object.keys(e).length;
											Object.keys(e).forEach(function(t) {
												var i = e[t];
												if (i.fn) {
													var r = i.args || [];
													r.unshift(n(t)), i.fn.apply(i.context || null, r);
												}
											});
										},
										Q = {
											get: function(e) {
												e = encodeURIComponent(e);
												var t = (';' + document.cookie).split(' ').join(';'),
													n = t.indexOf(';' + e + '='),
													i = n < 0 ? n : t.indexOf(';', n + 1);
												return n < 0 ? '' : decodeURIComponent(t.substring(n + 2 + e.length, i < 0 ? t.length : i));
											},
											set: function(e, t, n) {
												var r = i(n, 'cookieLifetime'),
													a = i(n, 'expires'),
													o = i(n, 'domain'),
													s = i(n, 'secure'),
													l = s ? 'Secure' : '';
												if (a && 'SESSION' !== r && 'NONE' !== r) {
													var c = '' !== t ? parseInt(r || 0, 10) : -60;
													if (c) (a = new Date()), a.setTime(a.getTime() + 1e3 * c);
													else if (1 === a) {
														a = new Date();
														var u = a.getYear();
														a.setYear(u + 2 + (u < 1900 ? 1900 : 0));
													}
												} else a = 0;
												return e && 'NONE' !== r
													? ((document.cookie =
															encodeURIComponent(e) +
															'=' +
															encodeURIComponent(t) +
															'; path=/;' +
															(a ? ' expires=' + a.toGMTString() + ';' : '') +
															(o ? ' domain=' + o + ';' : '') +
															l),
													  this.get(e) === t)
													: 0;
											},
											remove: function(e, t) {
												var n = i(t, 'domain');
												(n = n ? ' domain=' + n + ';' : ''),
													(document.cookie =
														encodeURIComponent(e) + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' + n);
											}
										},
										$ = function(e) {
											var t;
											!e && _.location && (e = _.location.hostname), (t = e);
											var n,
												i = t.split('.');
											for (n = i.length - 2; n >= 0; n--)
												if (((t = i.slice(n).join('.')), Q.set('test', 'cookie', { domain: t })))
													return Q.remove('test', { domain: t }), t;
											return '';
										},
										Z = {
											compare: s,
											isLessThan: function(e, t) {
												return s(e, t) < 0;
											},
											areVersionsDifferent: function(e, t) {
												return 0 !== s(e, t);
											},
											isGreaterThan: function(e, t) {
												return s(e, t) > 0;
											},
											isEqual: function(e, t) {
												return 0 === s(e, t);
											}
										},
										ee = !!_.postMessage,
										te = {
											postMessage: function(e, t, n) {
												var i = 1;
												t &&
													(ee
														? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
														: t && (n.location = t.replace(/#.*$/, '') + '#' + +new Date() + i++ + '&' + e));
											},
											receiveMessage: function(e, t) {
												var n;
												try {
													ee &&
														(e &&
															(n = function(n) {
																if (
																	('string' == typeof t && n.origin !== t) ||
																	('[object Function]' === Object.prototype.toString.call(t) && !1 === t(n.origin))
																)
																	return !1;
																e(n);
															}),
														_.addEventListener
															? _[e ? 'addEventListener' : 'removeEventListener']('message', n)
															: _[e ? 'attachEvent' : 'detachEvent']('onmessage', n));
												} catch (e) {}
											}
										},
										ne = function(e) {
											var t,
												n,
												i = '0123456789',
												r = '',
												a = '',
												o = 8,
												s = 10,
												l = 10;
											if (1 == e) {
												for (i += 'ABCDEF', t = 0; 16 > t; t++)
													(n = Math.floor(Math.random() * o)),
														(r += i.substring(n, n + 1)),
														(n = Math.floor(Math.random() * o)),
														(a += i.substring(n, n + 1)),
														(o = 16);
												return r + '-' + a;
											}
											for (t = 0; 19 > t; t++)
												(n = Math.floor(Math.random() * s)),
													(r += i.substring(n, n + 1)),
													0 === t && 9 == n
														? (s = 3)
														: (1 == t || 2 == t) && 10 != s && 2 > n
														? (s = 10)
														: 2 < t && (s = 10),
													(n = Math.floor(Math.random() * l)),
													(a += i.substring(n, n + 1)),
													0 === t && 9 == n
														? (l = 3)
														: (1 == t || 2 == t) && 10 != l && 2 > n
														? (l = 10)
														: 2 < t && (l = 10);
											return r + a;
										},
										ie = function(e, t) {
											return {
												corsMetadata: (function() {
													var e = 'none',
														t = !0;
													return (
														'undefined' != typeof XMLHttpRequest &&
															XMLHttpRequest === Object(XMLHttpRequest) &&
															('withCredentials' in new XMLHttpRequest()
																? (e = 'XMLHttpRequest')
																: 'undefined' != typeof XDomainRequest &&
																  XDomainRequest === Object(XDomainRequest) &&
																  (t = !1),
															Object.prototype.toString.call(_.HTMLElement).indexOf('Constructor') > 0 && (t = !1)),
														{ corsType: e, corsCookiesEnabled: t }
													);
												})(),
												getCORSInstance: function() {
													return 'none' === this.corsMetadata.corsType ? null : new _[this.corsMetadata.corsType]();
												},
												fireCORS: function(t, n, i) {
													function r(e) {
														var n;
														try {
															if ((n = JSON.parse(e)) !== Object(n))
																return void a.handleCORSError(t, null, 'Response is not JSON');
														} catch (e) {
															return void a.handleCORSError(t, e, 'Error parsing response as JSON');
														}
														try {
															for (var i = t.callback, r = _, o = 0; o < i.length; o++) r = r[i[o]];
															r(n);
														} catch (e) {
															a.handleCORSError(t, e, 'Error forming callback function');
														}
													}
													var a = this;
													n && (t.loadErrorHandler = n);
													try {
														var o = this.getCORSInstance();
														o.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0),
															'XMLHttpRequest' === this.corsMetadata.corsType &&
																((o.withCredentials = !0),
																(o.timeout = e.loadTimeout),
																o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
																(o.onreadystatechange = function() {
																	4 === this.readyState && 200 === this.status && r(this.responseText);
																})),
															(o.onerror = function(e) {
																a.handleCORSError(t, e, 'onerror');
															}),
															(o.ontimeout = function(e) {
																a.handleCORSError(t, e, 'ontimeout');
															}),
															o.send(),
															e._log.requests.push(t.corsUrl);
													} catch (e) {
														this.handleCORSError(t, e, 'try-catch');
													}
												},
												handleCORSError: function(t, n, i) {
													e.CORSErrors.push({ corsData: t, error: n, description: i }),
														t.loadErrorHandler && ('ontimeout' === i ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
												}
											};
										},
										re = {
											POST_MESSAGE_ENABLED: !!_.postMessage,
											DAYS_BETWEEN_SYNC_ID_CALLS: 1,
											MILLIS_PER_DAY: 864e5,
											ADOBE_MC: 'adobe_mc',
											ADOBE_MC_SDID: 'adobe_mc_sdid',
											VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
											ADOBE_MC_TTL_IN_MIN: 5,
											VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
											FIRST_PARTY_SERVER_COOKIE: 's_ecid'
										},
										ae = function(e, t) {
											var n = _.document;
											return {
												THROTTLE_START: 3e4,
												MAX_SYNCS_LENGTH: 649,
												throttleTimerSet: !1,
												id: null,
												onPagePixels: [],
												iframeHost: null,
												getIframeHost: function(e) {
													if ('string' == typeof e) {
														var t = e.split('/');
														return t[0] + '//' + t[2];
													}
												},
												subdomain: null,
												url: null,
												getUrl: function() {
													var t,
														i = 'http://fast.',
														r = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.origin);
													return (
														this.subdomain || (this.subdomain = 'nosubdomainreturned'),
														e.loadSSL && (i = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
														(t = i + this.subdomain + '.demdex.net/dest5.html' + r),
														(this.iframeHost = this.getIframeHost(t)),
														(this.id = 'destination_publishing_iframe_' + this.subdomain + '_' + e.idSyncContainerID),
														t
													);
												},
												checkDPIframeSrc: function() {
													var t = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.href);
													'string' == typeof e.dpIframeSrc &&
														e.dpIframeSrc.length &&
														((this.id =
															'destination_publishing_iframe_' +
															(e._subdomain || this.subdomain || new Date().getTime()) +
															'_' +
															e.idSyncContainerID),
														(this.iframeHost = this.getIframeHost(e.dpIframeSrc)),
														(this.url = e.dpIframeSrc + t));
												},
												idCallNotProcesssed: null,
												doAttachIframe: !1,
												startedAttachingIframe: !1,
												iframeHasLoaded: null,
												iframeIdChanged: null,
												newIframeCreated: null,
												originalIframeHasLoadedAlready: null,
												iframeLoadedCallbacks: [],
												regionChanged: !1,
												timesRegionChanged: 0,
												sendingMessages: !1,
												messages: [],
												messagesPosted: [],
												messagesReceived: [],
												messageSendingInterval: re.POST_MESSAGE_ENABLED ? null : 100,
												onPageDestinationsFired: [],
												jsonForComparison: [],
												jsonDuplicates: [],
												jsonWaiting: [],
												jsonProcessed: [],
												canSetThirdPartyCookies: !0,
												receivedThirdPartyCookiesNotification: !1,
												readyToAttachIframePreliminary: function() {
													return !(
														e.idSyncDisableSyncs ||
														e.disableIdSyncs ||
														e.idSyncDisable3rdPartySyncing ||
														e.disableThirdPartyCookies ||
														e.disableThirdPartyCalls
													);
												},
												readyToAttachIframe: function() {
													return (
														this.readyToAttachIframePreliminary() &&
														(this.doAttachIframe || e._doAttachIframe) &&
														((this.subdomain && 'nosubdomainreturned' !== this.subdomain) || e._subdomain) &&
														this.url &&
														!this.startedAttachingIframe
													);
												},
												attachIframe: function() {
													function e() {
														(r = n.createElement('iframe')),
															(r.sandbox = 'allow-scripts allow-same-origin'),
															(r.title = 'Adobe ID Syncing iFrame'),
															(r.id = i.id),
															(r.name = i.id + '_name'),
															(r.style.cssText = 'display: none; width: 0; height: 0;'),
															(r.src = i.url),
															(i.newIframeCreated = !0),
															t(),
															n.body.appendChild(r);
													}
													function t(e) {
														r.addEventListener('load', function() {
															(r.className = 'aamIframeLoaded'),
																(i.iframeHasLoaded = !0),
																i.fireIframeLoadedCallbacks(e),
																i.requestToProcess();
														});
													}
													this.startedAttachingIframe = !0;
													var i = this,
														r = n.getElementById(this.id);
													r
														? 'IFRAME' !== r.nodeName
															? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
															: ((this.newIframeCreated = !1),
															  'aamIframeLoaded' !== r.className
																	? ((this.originalIframeHasLoadedAlready = !1),
																	  t(
																			"The destination publishing iframe already exists from a different library, but hadn't loaded yet."
																	  ))
																	: ((this.originalIframeHasLoadedAlready = !0),
																	  (this.iframeHasLoaded = !0),
																	  (this.iframe = r),
																	  this.fireIframeLoadedCallbacks(
																			'The destination publishing iframe already exists from a different library, and had loaded alresady.'
																	  ),
																	  this.requestToProcess()))
														: e(),
														(this.iframe = r);
												},
												fireIframeLoadedCallbacks: function(e) {
													this.iframeLoadedCallbacks.forEach(function(t) {
														'function' == typeof t &&
															t({
																message: e || 'The destination publishing iframe was attached and loaded successfully.'
															});
													}),
														(this.iframeLoadedCallbacks = []);
												},
												requestToProcess: function(t) {
													function n() {
														r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t);
													}
													var i,
														r = this;
													if (t === Object(t) && t.ibs)
														if (((i = JSON.stringify(t.ibs || [])), this.jsonForComparison.length)) {
															var a,
																o,
																s,
																l = !1;
															for (a = 0, o = this.jsonForComparison.length; a < o; a++)
																if (((s = this.jsonForComparison[a]), i === JSON.stringify(s.ibs || []))) {
																	l = !0;
																	break;
																}
															l ? this.jsonDuplicates.push(t) : n();
														} else n();
													if (
														(this.receivedThirdPartyCookiesNotification ||
															!re.POST_MESSAGE_ENABLED ||
															this.iframeHasLoaded) &&
														this.jsonWaiting.length
													) {
														var c = this.jsonWaiting.shift();
														this.process(c), this.requestToProcess();
													}
													e.idSyncDisableSyncs ||
														e.disableIdSyncs ||
														!this.iframeHasLoaded ||
														!this.messages.length ||
														this.sendingMessages ||
														(this.throttleTimerSet ||
															((this.throttleTimerSet = !0),
															setTimeout(function() {
																r.messageSendingInterval = re.POST_MESSAGE_ENABLED ? null : 150;
															}, this.THROTTLE_START)),
														(this.sendingMessages = !0),
														this.sendMessages());
												},
												getRegionAndCheckIfChanged: function(t, n) {
													var i = e._getField('MCAAMLH'),
														r = t.d_region || t.dcs_region;
													return (
														i
															? r &&
															  (e._setFieldExpire('MCAAMLH', n),
															  e._setField('MCAAMLH', r),
															  parseInt(i, 10) !== r &&
																	((this.regionChanged = !0),
																	this.timesRegionChanged++,
																	e._setField('MCSYNCSOP', ''),
																	e._setField('MCSYNCS', ''),
																	(i = r)))
															: (i = r) && (e._setFieldExpire('MCAAMLH', n), e._setField('MCAAMLH', i)),
														i || (i = ''),
														i
													);
												},
												processSyncOnPage: function(e) {
													var t, n, i, r;
													if ((t = e.ibs) && t instanceof Array && (n = t.length))
														for (i = 0; i < n; i++)
															(r = t[i]), r.syncOnPage && this.checkFirstPartyCookie(r, '', 'syncOnPage');
												},
												process: function(e) {
													var t,
														n,
														i,
														r,
														a,
														o = encodeURIComponent,
														s = !1;
													if ((t = e.ibs) && t instanceof Array && (n = t.length))
														for (s = !0, i = 0; i < n; i++)
															(r = t[i]),
																(a = [
																	o('ibs'),
																	o(r.id || ''),
																	o(r.tag || ''),
																	j.encodeAndBuildRequest(r.url || [], ','),
																	o(r.ttl || ''),
																	'',
																	'',
																	r.fireURLSync ? 'true' : 'false'
																]),
																r.syncOnPage ||
																	(this.canSetThirdPartyCookies
																		? this.addMessage(a.join('|'))
																		: r.fireURLSync && this.checkFirstPartyCookie(r, a.join('|')));
													s && this.jsonProcessed.push(e);
												},
												checkFirstPartyCookie: function(t, n, i) {
													var r = 'syncOnPage' === i,
														a = r ? 'MCSYNCSOP' : 'MCSYNCS';
													e._readVisitor();
													var o,
														s,
														l = e._getField(a),
														c = !1,
														u = !1,
														d = Math.ceil(new Date().getTime() / re.MILLIS_PER_DAY);
													l
														? ((o = l.split('*')),
														  (s = this.pruneSyncData(o, t.id, d)),
														  (c = s.dataPresent),
														  (u = s.dataValid),
														  (c && u) || this.fireSync(r, t, n, o, a, d))
														: ((o = []), this.fireSync(r, t, n, o, a, d));
												},
												pruneSyncData: function(e, t, n) {
													var i,
														r,
														a,
														o = !1,
														s = !1;
													for (r = 0; r < e.length; r++)
														(i = e[r]),
															(a = parseInt(i.split('-')[1], 10)),
															i.match('^' + t + '-')
																? ((o = !0), n < a ? (s = !0) : (e.splice(r, 1), r--))
																: n >= a && (e.splice(r, 1), r--);
													return { dataPresent: o, dataValid: s };
												},
												manageSyncsSize: function(e) {
													if (e.join('*').length > this.MAX_SYNCS_LENGTH)
														for (
															e.sort(function(e, t) {
																return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
															});
															e.join('*').length > this.MAX_SYNCS_LENGTH;

														)
															e.shift();
												},
												fireSync: function(t, n, i, r, a, o) {
													var s = this;
													if (t) {
														if ('img' === n.tag) {
															var l,
																c,
																u,
																d,
																f = n.url,
																p = e.loadSSL ? 'https:' : 'http:';
															for (l = 0, c = f.length; l < c; l++) {
																(u = f[l]), (d = /^\/\//.test(u));
																var g = new Image();
																g.addEventListener(
																	'load',
																	(function(t, n, i, r) {
																		return function() {
																			(s.onPagePixels[t] = null), e._readVisitor();
																			var o,
																				l = e._getField(a),
																				c = [];
																			if (l) {
																				o = l.split('*');
																				var u, d, f;
																				for (u = 0, d = o.length; u < d; u++)
																					(f = o[u]), f.match('^' + n.id + '-') || c.push(f);
																			}
																			s.setSyncTrackingData(c, n, i, r);
																		};
																	})(this.onPagePixels.length, n, a, o)
																),
																	(g.src = (d ? p : '') + u),
																	this.onPagePixels.push(g);
															}
														}
													} else this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
												},
												addMessage: function(t) {
													var n = encodeURIComponent,
														i = n(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
													this.messages.push((re.POST_MESSAGE_ENABLED ? '' : i) + t);
												},
												setSyncTrackingData: function(t, n, i, r) {
													t.push(n.id + '-' + (r + Math.ceil(n.ttl / 60 / 24))),
														this.manageSyncsSize(t),
														e._setField(i, t.join('*'));
												},
												sendMessages: function() {
													var e,
														t = this,
														n = '',
														i = encodeURIComponent;
													this.regionChanged && ((n = i('---destpub-clear-dextp---')), (this.regionChanged = !1)),
														this.messages.length
															? re.POST_MESSAGE_ENABLED
																? ((e = n + i('---destpub-combined---') + this.messages.join('%01')),
																  this.postMessage(e),
																  (this.messages = []),
																  (this.sendingMessages = !1))
																: ((e = this.messages.shift()),
																  this.postMessage(n + e),
																  setTimeout(function() {
																		t.sendMessages();
																  }, this.messageSendingInterval))
															: (this.sendingMessages = !1);
												},
												postMessage: function(e) {
													te.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e);
												},
												receiveMessage: function(e) {
													var t,
														n = /^---destpub-to-parent---/;
													'string' == typeof e &&
														n.test(e) &&
														((t = e.replace(n, '').split('|')),
														'canSetThirdPartyCookies' === t[0] &&
															((this.canSetThirdPartyCookies = 'true' === t[1]),
															(this.receivedThirdPartyCookiesNotification = !0),
															this.requestToProcess()),
														this.messagesReceived.push(e));
												},
												processIDCallData: function(i) {
													(null == this.url || (i.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
														('string' == typeof e._subdomain && e._subdomain.length
															? (this.subdomain = e._subdomain)
															: (this.subdomain = i.subdomain || ''),
														(this.url = this.getUrl())),
														i.ibs instanceof Array && i.ibs.length && (this.doAttachIframe = !0),
														this.readyToAttachIframe() &&
															(e.idSyncAttachIframeOnWindowLoad
																? (t.windowLoaded || 'complete' === n.readyState || 'loaded' === n.readyState) &&
																  this.attachIframe()
																: this.attachIframeASAP()),
														'function' == typeof e.idSyncIDCallResult
															? e.idSyncIDCallResult(i)
															: this.requestToProcess(i),
														'function' == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(i);
												},
												canMakeSyncIDCall: function(t, n) {
													return e._forceSyncIDCall || !t || n - t > re.DAYS_BETWEEN_SYNC_ID_CALLS;
												},
												attachIframeASAP: function() {
													function e() {
														t.startedAttachingIframe || (n.body ? t.attachIframe() : setTimeout(e, 30));
													}
													var t = this;
													e();
												}
											};
										},
										oe = {
											audienceManagerServer: {},
											audienceManagerServerSecure: {},
											cookieDomain: {},
											cookieLifetime: {},
											cookieName: {},
											doesOptInApply: {},
											disableThirdPartyCalls: {},
											discardTrackingServerECID: {},
											idSyncAfterIDCallResult: {},
											idSyncAttachIframeOnWindowLoad: {},
											idSyncContainerID: {},
											idSyncDisable3rdPartySyncing: {},
											disableThirdPartyCookies: {},
											idSyncDisableSyncs: {},
											disableIdSyncs: {},
											idSyncIDCallResult: {},
											idSyncSSLUseAkamai: {},
											isCoopSafe: {},
											isIabContext: {},
											isOptInStorageEnabled: {},
											loadSSL: {},
											loadTimeout: {},
											marketingCloudServer: {},
											marketingCloudServerSecure: {},
											optInCookieDomain: {},
											optInStorageExpiry: {},
											overwriteCrossDomainMCIDAndAID: {},
											preOptInApprovals: {},
											previousPermissions: {},
											resetBeforeVersion: {},
											sdidParamExpiry: {},
											serverState: {},
											sessionCookieName: {},
											secureCookie: {},
											takeTimeoutMetrics: {},
											trackingServer: {},
											trackingServerSecure: {},
											whitelistIframeDomains: {},
											whitelistParentDomain: {}
										},
										se = {
											getConfigNames: function() {
												return Object.keys(oe);
											},
											getConfigs: function() {
												return oe;
											},
											normalizeConfig: function(e) {
												return 'function' != typeof e ? e : e();
											}
										},
										le = function(e) {
											var t = {};
											return (
												(e.on = function(e, n, i) {
													if (!n || 'function' != typeof n) throw new Error('[ON] Callback should be a function.');
													t.hasOwnProperty(e) || (t[e] = []);
													var r = t[e].push({ callback: n, context: i }) - 1;
													return function() {
														t[e].splice(r, 1), t[e].length || delete t[e];
													};
												}),
												(e.off = function(e, n) {
													t.hasOwnProperty(e) &&
														(t[e] = t[e].filter(function(e) {
															if (e.callback !== n) return e;
														}));
												}),
												(e.publish = function(e) {
													if (t.hasOwnProperty(e)) {
														var n = [].slice.call(arguments, 1);
														t[e].slice(0).forEach(function(e) {
															e.callback.apply(e.context, n);
														});
													}
												}),
												e.publish
											);
										},
										ce = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
										ue = {
											AAM: 'aam',
											ADCLOUD: 'adcloud',
											ANALYTICS: 'aa',
											CAMPAIGN: 'campaign',
											ECID: 'ecid',
											LIVEFYRE: 'livefyre',
											TARGET: 'target',
											MEDIA_ANALYTICS: 'mediaaa'
										},
										de = ((C = {}), t(C, ue.AAM, 565), t(C, ue.ECID, 565), C),
										fe = ((I = {}), t(I, ue.AAM, [1, 2, 5]), t(I, ue.ECID, [1, 2, 5]), I),
										pe = (function(e) {
											return Object.keys(e).map(function(t) {
												return e[t];
											});
										})(ue),
										ge = function() {
											var e = {};
											return (
												(e.callbacks = Object.create(null)),
												(e.add = function(t, n) {
													if (!c(n))
														throw new Error(
															'[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
														);
													e.callbacks[t] = e.callbacks[t] || [];
													var i = e.callbacks[t].push(n) - 1;
													return function() {
														e.callbacks[t].splice(i, 1);
													};
												}),
												(e.execute = function(t, n) {
													if (e.callbacks[t]) {
														(n = void 0 === n ? [] : n), (n = n instanceof Array ? n : [n]);
														try {
															for (; e.callbacks[t].length; ) {
																var i = e.callbacks[t].shift();
																'function' == typeof i ? i.apply(null, n) : i instanceof Array && i[1].apply(i[0], n);
															}
															delete e.callbacks[t];
														} catch (e) {}
													}
												}),
												(e.executeAll = function(t, n) {
													(n || (t && !l(t))) &&
														Object.keys(e.callbacks).forEach(function(n) {
															var i = void 0 !== t[n] ? t[n] : '';
															e.execute(n, i);
														}, e);
												}),
												(e.hasCallbacks = function() {
													return Boolean(Object.keys(e.callbacks).length);
												}),
												e
											);
										},
										me = function() {},
										he = function(e) {
											var t = window,
												n = t.console;
											return !!n && 'function' == typeof n[e];
										},
										_e = function(e, t, n) {
											return n()
												? function() {
														if (he(e)) {
															for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
															console[e].apply(console, [t].concat(i));
														}
												  }
												: me;
										},
										Ce = u,
										Ie = new Ce('[ADOBE OPT-IN]'),
										ve = function(t, n) {
											return e(t) === n;
										},
										De = function(e, t) {
											return e instanceof Array ? e : ve(e, 'string') ? [e] : t || [];
										},
										Se = function(e) {
											var t = Object.keys(e);
											return (
												!!t.length &&
												t.every(function(t) {
													return !0 === e[t];
												})
											);
										},
										Ae = function(e) {
											return (
												!(!e || Oe(e)) &&
												De(e).every(function(e) {
													return pe.indexOf(e) > -1;
												})
											);
										},
										ye = function(e, t) {
											return e.reduce(function(e, n) {
												return (e[n] = t), e;
											}, {});
										},
										be = function(e) {
											return JSON.parse(JSON.stringify(e));
										},
										Oe = function(e) {
											return '[object Array]' === Object.prototype.toString.call(e) && !e.length;
										},
										Me = function(e) {
											if (Te(e)) return e;
											try {
												return JSON.parse(e);
											} catch (e) {
												return {};
											}
										},
										ke = function(e) {
											return void 0 === e || (Te(e) ? Ae(Object.keys(e)) : Ee(e));
										},
										Ee = function(e) {
											try {
												var t = JSON.parse(e);
												return !!e && ve(e, 'string') && Ae(Object.keys(t));
											} catch (e) {
												return !1;
											}
										},
										Te = function(e) {
											return null !== e && ve(e, 'object') && !1 === Array.isArray(e);
										},
										Le = function() {},
										Pe = function(e) {
											return ve(e, 'function') ? e() : e;
										},
										Re = function(e, t) {
											ke(e) || Ie.error(''.concat(t));
										},
										we = function(e) {
											return Object.keys(e).map(function(t) {
												return e[t];
											});
										},
										Fe = function(e) {
											return we(e).filter(function(e, t, n) {
												return n.indexOf(e) === t;
											});
										},
										Ne = function(e) {
											return function() {
												var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
													n = t.command,
													i = t.params,
													r = void 0 === i ? {} : i,
													a = t.callback,
													o = void 0 === a ? Le : a;
												if (!n || -1 === n.indexOf('.'))
													throw new Error('[OptIn.execute] Please provide a valid command.');
												try {
													var s = n.split('.'),
														l = e[s[0]],
														c = s[1];
													if (!l || 'function' != typeof l[c])
														throw new Error('Make sure the plugin and API name exist.');
													var u = Object.assign(r, { callback: o });
													l[c].call(l, u);
												} catch (e) {
													Ie.error('[execute] Something went wrong: ' + e.message);
												}
											};
										};
									(f.prototype = Object.create(Error.prototype)), (f.prototype.constructor = f);
									var xe = 'fetchPermissions',
										je = '[OptIn#registerPlugin] Plugin is invalid.';
									(p.Categories = ue), (p.TimeoutError = f);
									var Ve = Object.freeze({ OptIn: p, IabPlugin: h }),
										Ue = function(e, t) {
											e.publishDestinations = function(n) {
												var i = arguments[1],
													r = arguments[2];
												try {
													r = 'function' == typeof r ? r : n.callback;
												} catch (e) {
													r = function() {};
												}
												var a = t;
												if (!a.readyToAttachIframePreliminary())
													return void r({
														error: 'The destination publishing iframe is disabled in the Visitor library.'
													});
												if ('string' == typeof n) {
													if (!n.length) return void r({ error: 'subdomain is not a populated string.' });
													if (!(i instanceof Array && i.length))
														return void r({ error: 'messages is not a populated array.' });
													var o = !1;
													if (
														(i.forEach(function(e) {
															'string' == typeof e && e.length && (a.addMessage(e), (o = !0));
														}),
														!o)
													)
														return void r({ error: 'None of the messages are populated strings.' });
												} else {
													if (!j.isObject(n)) return void r({ error: 'Invalid parameters passed.' });
													var s = n;
													if ('string' != typeof (n = s.subdomain) || !n.length)
														return void r({ error: 'config.subdomain is not a populated string.' });
													var l = s.urlDestinations;
													if (!(l instanceof Array && l.length))
														return void r({ error: 'config.urlDestinations is not a populated array.' });
													var c = [];
													l.forEach(function(e) {
														j.isObject(e) && (e.hideReferrer ? e.message && a.addMessage(e.message) : c.push(e));
													});
													!(function e() {
														c.length &&
															setTimeout(function() {
																var t = new Image(),
																	n = c.shift();
																(t.src = n.url), a.onPageDestinationsFired.push(n), e();
															}, 100);
													})();
												}
												a.iframe
													? (r({ message: 'The destination publishing iframe is already attached and loaded.' }),
													  a.requestToProcess())
													: !e.subdomain && e._getField('MCMID')
													? ((a.subdomain = n),
													  (a.doAttachIframe = !0),
													  (a.url = a.getUrl()),
													  a.readyToAttachIframe()
															? (a.iframeLoadedCallbacks.push(function(e) {
																	r({
																		message:
																			'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
																			(e.message || 'no result')
																	});
															  }),
															  a.attachIframe())
															: r({
																	error:
																		'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.'
															  }))
													: a.iframeLoadedCallbacks.push(function(e) {
															r({
																message:
																	'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
																	(e.message || 'no result')
															});
													  });
											};
										},
										He = function e(t) {
											function n(e, t) {
												return (e >>> t) | (e << (32 - t));
											}
											for (
												var i,
													r,
													a = Math.pow,
													o = a(2, 32),
													s = '',
													l = [],
													c = 8 * t.length,
													u = (e.h = e.h || []),
													d = (e.k = e.k || []),
													f = d.length,
													p = {},
													g = 2;
												f < 64;
												g++
											)
												if (!p[g]) {
													for (i = 0; i < 313; i += g) p[i] = g;
													(u[f] = (a(g, 0.5) * o) | 0), (d[f++] = (a(g, 1 / 3) * o) | 0);
												}
											for (t += ''; (t.length % 64) - 56; ) t += '\0';
											for (i = 0; i < t.length; i++) {
												if ((r = t.charCodeAt(i)) >> 8) return;
												l[i >> 2] |= r << (((3 - i) % 4) * 8);
											}
											for (l[l.length] = (c / o) | 0, l[l.length] = c, r = 0; r < l.length; ) {
												var m = l.slice(r, (r += 16)),
													h = u;
												for (u = u.slice(0, 8), i = 0; i < 64; i++) {
													var _ = m[i - 15],
														C = m[i - 2],
														I = u[0],
														v = u[4],
														D =
															u[7] +
															(n(v, 6) ^ n(v, 11) ^ n(v, 25)) +
															((v & u[5]) ^ (~v & u[6])) +
															d[i] +
															(m[i] =
																i < 16
																	? m[i]
																	: (m[i - 16] +
																			(n(_, 7) ^ n(_, 18) ^ (_ >>> 3)) +
																			m[i - 7] +
																			(n(C, 17) ^ n(C, 19) ^ (C >>> 10))) |
																	  0);
													(u = [
														(D + ((n(I, 2) ^ n(I, 13) ^ n(I, 22)) + ((I & u[1]) ^ (I & u[2]) ^ (u[1] & u[2])))) | 0
													].concat(u)),
														(u[4] = (u[4] + D) | 0);
												}
												for (i = 0; i < 8; i++) u[i] = (u[i] + h[i]) | 0;
											}
											for (i = 0; i < 8; i++)
												for (r = 3; r + 1; r--) {
													var S = (u[i] >> (8 * r)) & 255;
													s += (S < 16 ? 0 : '') + S.toString(16);
												}
											return s;
										},
										Be = function(e, t) {
											return ('SHA-256' !== t && 'SHA256' !== t && 'sha256' !== t && 'sha-256' !== t) || (e = He(e)), e;
										},
										Ge = function(e) {
											return String(e)
												.trim()
												.toLowerCase();
										},
										Ye = Ve.OptIn;
									j.defineGlobalNamespace(), (window.adobe.OptInCategories = Ye.Categories);
									var qe = function(t, n, i) {
										function r(e) {
											var t = e;
											return function(e) {
												var n = e || v.location.href;
												try {
													var i = g._extractParamFromUri(n, t);
													if (i) return F.parsePipeDelimetedKeyValues(i);
												} catch (e) {}
											};
										}
										function a(e) {
											function t(e, t, n) {
												e && e.match(re.VALID_VISITOR_ID_REGEX) && (n === A && (I = !0), t(e));
											}
											t(e[A], g.setMarketingCloudVisitorID, A),
												g._setFieldExpire(k, -1),
												t(e[O], g.setAnalyticsVisitorID);
										}
										function o(e) {
											(e = e || {}),
												(g._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
												(g._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}),
												(g._supplementalDataIDLast = e.supplementalDataIDLast || ''),
												(g._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {});
										}
										function s(e) {
											function t(e, t, n) {
												return (n = n ? (n += '|') : n), (n += e + '=' + encodeURIComponent(t));
											}
											function n(e, n) {
												var i = n[0],
													r = n[1];
												return null != r && r !== T && (e = t(i, r, e)), e;
											}
											var i = e.reduce(n, '');
											return (function(e) {
												var t = F.getTimestampInSeconds();
												return (e = e ? (e += '|') : e), (e += 'TS=' + t);
											})(i);
										}
										function l(e) {
											var t = e.minutesToLive,
												n = '';
											return (
												(g.idSyncDisableSyncs || g.disableIdSyncs) && (n = n || 'Error: id syncs have been disabled'),
												('string' == typeof e.dpid && e.dpid.length) || (n = n || 'Error: config.dpid is empty'),
												('string' == typeof e.url && e.url.length) || (n = n || 'Error: config.url is empty'),
												void 0 === t
													? (t = 20160)
													: ((t = parseInt(t, 10)),
													  (isNaN(t) || t <= 0) &&
															(n = n || 'Error: config.minutesToLive needs to be a positive number')),
												{ error: n, ttl: t }
											);
										}
										function c() {
											return !!g.configs.doesOptInApply && !(m.optIn.isComplete && u());
										}
										function u() {
											return g.configs.doesOptInApply && g.configs.isIabContext
												? m.optIn.isApproved(m.optIn.Categories.ECID) && C
												: m.optIn.isApproved(m.optIn.Categories.ECID);
										}
										function d(e, t) {
											if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
											t.gdprApplies && (h = t.consentString), g.init(), p();
										}
										function f() {
											m.optIn.isApproved(m.optIn.Categories.ECID) &&
												(g.configs.isIabContext
													? m.optIn.execute({ command: 'iabPlugin.fetchConsentData', callback: d })
													: (g.init(), p()));
										}
										function p() {
											m.optIn.off('complete', f);
										}
										if (
											!i ||
											i
												.split('')
												.reverse()
												.join('') !== t
										)
											throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
										var g = this,
											m = window.adobe,
											h = '',
											C = !1,
											I = !1;
										g.version = '4.5.2';
										var v = _,
											D = v.Visitor;
										(D.version = g.version),
											(D.AuthState = E.AUTH_STATE),
											(D.OptOut = E.OPT_OUT),
											v.s_c_in || ((v.s_c_il = []), (v.s_c_in = 0)),
											(g._c = 'Visitor'),
											(g._il = v.s_c_il),
											(g._in = v.s_c_in),
											(g._il[g._in] = g),
											v.s_c_in++,
											(g._instanceType = 'regular'),
											(g._log = { requests: [] }),
											(g.marketingCloudOrgID = t),
											(g.cookieName = 'AMCV_' + t),
											(g.sessionCookieName = 'AMCVS_' + t),
											(g.cookieDomain = $()),
											(g.loadSSL = v.location.protocol.toLowerCase().indexOf('https') >= 0),
											(g.loadTimeout = 3e4),
											(g.CORSErrors = []),
											(g.marketingCloudServer = g.audienceManagerServer = 'dpm.demdex.net'),
											(g.sdidParamExpiry = 30);
										var S = null,
											A = 'MCMID',
											y = 'MCIDTS',
											b = 'A',
											O = 'MCAID',
											M = 'AAM',
											k = 'MCAAMB',
											T = 'NONE',
											L = function(e) {
												return !Object.prototype[e];
											},
											P = ie(g);
										(g.FIELDS = E.FIELDS),
											(g.cookieRead = function(e) {
												return Q.get(e);
											}),
											(g.cookieWrite = function(e, t, n) {
												var i = g.cookieLifetime ? ('' + g.cookieLifetime).toUpperCase() : '',
													r = !1;
												return (
													g.configs && g.configs.secureCookie && 'https:' === location.protocol && (r = !0),
													Q.set(e, '' + t, { expires: n, domain: g.cookieDomain, cookieLifetime: i, secure: r })
												);
											}),
											(g.resetState = function(e) {
												e ? g._mergeServerState(e) : o();
											}),
											(g._isAllowedDone = !1),
											(g._isAllowedFlag = !1),
											(g.isAllowed = function() {
												return (
													g._isAllowedDone ||
														((g._isAllowedDone = !0),
														(g.cookieRead(g.cookieName) || g.cookieWrite(g.cookieName, 'T', 1)) &&
															(g._isAllowedFlag = !0)),
													'T' === g.cookieRead(g.cookieName) && g._helpers.removeCookie(g.cookieName),
													g._isAllowedFlag
												);
											}),
											(g.setMarketingCloudVisitorID = function(e) {
												g._setMarketingCloudFields(e);
											}),
											(g._use1stPartyMarketingCloudServer = !1),
											(g.getMarketingCloudVisitorID = function(e, t) {
												g.marketingCloudServer &&
													g.marketingCloudServer.indexOf('.demdex.net') < 0 &&
													(g._use1stPartyMarketingCloudServer = !0);
												var n = g._getAudienceManagerURLData('_setMarketingCloudFields'),
													i = n.url;
												return g._getRemoteField(A, i, e, t, n);
											});
										var R = function(e, t) {
											var n = {};
											g.getMarketingCloudVisitorID(function() {
												t.forEach(function(e) {
													n[e] = g._getField(e, !0);
												}),
													-1 !== t.indexOf('MCOPTOUT')
														? g.isOptedOut(
																function(t) {
																	(n.MCOPTOUT = t), e(n);
																},
																null,
																!0
														  )
														: e(n);
											}, !0);
										};
										(g.getVisitorValues = function(e, t) {
											var n = {
													MCMID: { fn: g.getMarketingCloudVisitorID, args: [!0], context: g },
													MCOPTOUT: { fn: g.isOptedOut, args: [void 0, !0], context: g },
													MCAID: { fn: g.getAnalyticsVisitorID, args: [!0], context: g },
													MCAAMLH: { fn: g.getAudienceManagerLocationHint, args: [!0], context: g },
													MCAAMB: { fn: g.getAudienceManagerBlob, args: [!0], context: g }
												},
												i = t && t.length ? j.pluck(n, t) : n;
											t && -1 === t.indexOf('MCAID') ? R(e, t) : z(i, e);
										}),
											(g._currentCustomerIDs = {}),
											(g._customerIDsHashChanged = !1),
											(g._newCustomerIDsHash = ''),
											(g.setCustomerIDs = function(t, n) {
												function i() {
													g._customerIDsHashChanged = !1;
												}
												if (!g.isOptedOut() && t) {
													if (!j.isObject(t) || j.isObjectEmpty(t)) return !1;
													g._readVisitor();
													var r, a, o;
													for (r in t)
														if (L(r) && ((a = t[r]), (n = a.hasOwnProperty('hashType') ? a.hashType : n), a))
															if ('object' === e(a)) {
																var s = {};
																if (a.id) {
																	if (n) {
																		if (!(o = Be(Ge(a.id), n))) return;
																		(a.id = o), (s.hashType = n);
																	}
																	s.id = a.id;
																}
																void 0 != a.authState && (s.authState = a.authState), (g._currentCustomerIDs[r] = s);
															} else if (n) {
																if (!(o = Be(Ge(a), n))) return;
																g._currentCustomerIDs[r] = { id: o, hashType: n };
															} else g._currentCustomerIDs[r] = { id: a };
													var l = g.getCustomerIDs(),
														c = g._getField('MCCIDH'),
														u = '';
													c || (c = 0);
													for (r in l)
														L(r) &&
															((a = l[r]),
															(u += (u ? '|' : '') + r + '|' + (a.id ? a.id : '') + (a.authState ? a.authState : '')));
													(g._newCustomerIDsHash = String(g._hash(u))),
														g._newCustomerIDsHash !== c && ((g._customerIDsHashChanged = !0), g._mapCustomerIDs(i));
												}
											}),
											(g.getCustomerIDs = function() {
												g._readVisitor();
												var e,
													t,
													n = {};
												for (e in g._currentCustomerIDs)
													L(e) &&
														((t = g._currentCustomerIDs[e]),
														t.id &&
															(n[e] || (n[e] = {}),
															(n[e].id = t.id),
															void 0 != t.authState
																? (n[e].authState = t.authState)
																: (n[e].authState = D.AuthState.UNKNOWN),
															t.hashType && (n[e].hashType = t.hashType)));
												return n;
											}),
											(g.setAnalyticsVisitorID = function(e) {
												g._setAnalyticsFields(e);
											}),
											(g.getAnalyticsVisitorID = function(e, t, n) {
												if (!F.isTrackingServerPopulated() && !n) return g._callCallback(e, ['']), '';
												var i = '';
												if (
													(n ||
														(i = g.getMarketingCloudVisitorID(function(t) {
															g.getAnalyticsVisitorID(e, !0);
														})),
													i || n)
												) {
													var r = n ? g.marketingCloudServer : g.trackingServer,
														a = '';
													g.loadSSL &&
														(n
															? g.marketingCloudServerSecure && (r = g.marketingCloudServerSecure)
															: g.trackingServerSecure && (r = g.trackingServerSecure));
													var o = {};
													if (r) {
														var s = 'http' + (g.loadSSL ? 's' : '') + '://' + r + '/id',
															l =
																'd_visid_ver=' +
																g.version +
																'&mcorgid=' +
																encodeURIComponent(g.marketingCloudOrgID) +
																(i ? '&mid=' + encodeURIComponent(i) : '') +
																(g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies ? '&d_coppa=true' : ''),
															c = ['s_c_il', g._in, '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields'];
														(a =
															s +
															'?' +
															l +
															'&callback=s_c_il%5B' +
															g._in +
															'%5D._set' +
															(n ? 'MarketingCloud' : 'Analytics') +
															'Fields'),
															(o.corsUrl = s + '?' + l),
															(o.callback = c);
													}
													return (o.url = a), g._getRemoteField(n ? A : O, a, e, t, o);
												}
												return '';
											}),
											(g.getAudienceManagerLocationHint = function(e, t) {
												if (
													g.getMarketingCloudVisitorID(function(t) {
														g.getAudienceManagerLocationHint(e, !0);
													})
												) {
													var n = g._getField(O);
													if (
														(!n &&
															F.isTrackingServerPopulated() &&
															(n = g.getAnalyticsVisitorID(function(t) {
																g.getAudienceManagerLocationHint(e, !0);
															})),
														n || !F.isTrackingServerPopulated())
													) {
														var i = g._getAudienceManagerURLData(),
															r = i.url;
														return g._getRemoteField('MCAAMLH', r, e, t, i);
													}
												}
												return '';
											}),
											(g.getLocationHint = g.getAudienceManagerLocationHint),
											(g.getAudienceManagerBlob = function(e, t) {
												if (
													g.getMarketingCloudVisitorID(function(t) {
														g.getAudienceManagerBlob(e, !0);
													})
												) {
													var n = g._getField(O);
													if (
														(!n &&
															F.isTrackingServerPopulated() &&
															(n = g.getAnalyticsVisitorID(function(t) {
																g.getAudienceManagerBlob(e, !0);
															})),
														n || !F.isTrackingServerPopulated())
													) {
														var i = g._getAudienceManagerURLData(),
															r = i.url;
														return (
															g._customerIDsHashChanged && g._setFieldExpire(k, -1), g._getRemoteField(k, r, e, t, i)
														);
													}
												}
												return '';
											}),
											(g._supplementalDataIDCurrent = ''),
											(g._supplementalDataIDCurrentConsumed = {}),
											(g._supplementalDataIDLast = ''),
											(g._supplementalDataIDLastConsumed = {}),
											(g.getSupplementalDataID = function(e, t) {
												g._supplementalDataIDCurrent || t || (g._supplementalDataIDCurrent = g._generateID(1));
												var n = g._supplementalDataIDCurrent;
												return (
													g._supplementalDataIDLast && !g._supplementalDataIDLastConsumed[e]
														? ((n = g._supplementalDataIDLast), (g._supplementalDataIDLastConsumed[e] = !0))
														: n &&
														  (g._supplementalDataIDCurrentConsumed[e] &&
																((g._supplementalDataIDLast = g._supplementalDataIDCurrent),
																(g._supplementalDataIDLastConsumed = g._supplementalDataIDCurrentConsumed),
																(g._supplementalDataIDCurrent = n = t ? '' : g._generateID(1)),
																(g._supplementalDataIDCurrentConsumed = {})),
														  n && (g._supplementalDataIDCurrentConsumed[e] = !0)),
													n
												);
											});
										var w = !1;
										(g._liberatedOptOut = null),
											(g.getOptOut = function(e, t) {
												var n = g._getAudienceManagerURLData('_setMarketingCloudFields'),
													i = n.url;
												if (u()) return g._getRemoteField('MCOPTOUT', i, e, t, n);
												if ((g._registerCallback('liberatedOptOut', e), null !== g._liberatedOptOut))
													return (
														g._callAllCallbacks('liberatedOptOut', [g._liberatedOptOut]), (w = !1), g._liberatedOptOut
													);
												if (w) return null;
												w = !0;
												var r = 'liberatedGetOptOut';
												return (
													(n.corsUrl = n.corsUrl.replace(/dpm\.demdex\.net\/id\?/, 'dpm.demdex.net/optOutStatus?')),
													(n.callback = [r]),
													(_[r] = function(e) {
														if (e === Object(e)) {
															var t,
																n,
																i = j.parseOptOut(e, t, T);
															(t = i.optOut),
																(n = 1e3 * i.d_ottl),
																(g._liberatedOptOut = t),
																setTimeout(function() {
																	g._liberatedOptOut = null;
																}, n);
														}
														g._callAllCallbacks('liberatedOptOut', [t]), (w = !1);
													}),
													P.fireCORS(n),
													null
												);
											}),
											(g.isOptedOut = function(e, t, n) {
												t || (t = D.OptOut.GLOBAL);
												var i = g.getOptOut(function(n) {
													var i = n === D.OptOut.GLOBAL || n.indexOf(t) >= 0;
													g._callCallback(e, [i]);
												}, n);
												return i ? i === D.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
											}),
											(g._fields = null),
											(g._fieldsExpired = null),
											(g._hash = function(e) {
												var t,
													n,
													i = 0;
												if (e) for (t = 0; t < e.length; t++) (n = e.charCodeAt(t)), (i = (i << 5) - i + n), (i &= i);
												return i;
											}),
											(g._generateID = ne),
											(g._generateLocalMID = function() {
												var e = g._generateID(0);
												return (x.isClientSideMarketingCloudVisitorID = !0), e;
											}),
											(g._callbackList = null),
											(g._callCallback = function(e, t) {
												try {
													'function' == typeof e ? e.apply(v, t) : e[1].apply(e[0], t);
												} catch (e) {}
											}),
											(g._registerCallback = function(e, t) {
												t &&
													(null == g._callbackList && (g._callbackList = {}),
													void 0 == g._callbackList[e] && (g._callbackList[e] = []),
													g._callbackList[e].push(t));
											}),
											(g._callAllCallbacks = function(e, t) {
												if (null != g._callbackList) {
													var n = g._callbackList[e];
													if (n) for (; n.length > 0; ) g._callCallback(n.shift(), t);
												}
											}),
											(g._addQuerystringParam = function(e, t, n, i) {
												var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
													a = F.parseHash(e),
													o = F.hashlessUrl(e);
												if (-1 === o.indexOf('?')) return o + '?' + r + a;
												var s = o.split('?'),
													l = s[0] + '?',
													c = s[1];
												return l + F.addQueryParamAtLocation(c, r, i) + a;
											}),
											(g._extractParamFromUri = function(e, t) {
												var n = new RegExp('[\\?&#]' + t + '=([^&#]*)'),
													i = n.exec(e);
												if (i && i.length) return decodeURIComponent(i[1]);
											}),
											(g._parseAdobeMcFromUrl = r(re.ADOBE_MC)),
											(g._parseAdobeMcSdidFromUrl = r(re.ADOBE_MC_SDID)),
											(g._attemptToPopulateSdidFromUrl = function(e) {
												var n = g._parseAdobeMcSdidFromUrl(e),
													i = 1e9;
												n && n.TS && (i = F.getTimestampInSeconds() - n.TS),
													n &&
														n.SDID &&
														n.MCORGID === t &&
														i < g.sdidParamExpiry &&
														((g._supplementalDataIDCurrent = n.SDID),
														(g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
											}),
											(g._attemptToPopulateIdsFromUrl = function() {
												var e = g._parseAdobeMcFromUrl();
												if (e && e.TS) {
													var n = F.getTimestampInSeconds(),
														i = n - e.TS;
													if (Math.floor(i / 60) > re.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t) return;
													a(e);
												}
											}),
											(g._mergeServerState = function(e) {
												if (e)
													try {
														if (
															((e = (function(e) {
																return F.isObject(e) ? e : JSON.parse(e);
															})(e)),
															e[g.marketingCloudOrgID])
														) {
															var t = e[g.marketingCloudOrgID];
															!(function(e) {
																F.isObject(e) && g.setCustomerIDs(e);
															})(t.customerIDs),
																o(t.sdid);
														}
													} catch (e) {
														throw new Error('`serverState` has an invalid format.');
													}
											}),
											(g._timeout = null),
											(g._loadData = function(e, t, n, i) {
												(t = g._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
													(i.url = g._addQuerystringParam(i.url, 'd_fieldgroup', e, 1)),
													(i.corsUrl = g._addQuerystringParam(i.corsUrl, 'd_fieldgroup', e, 1)),
													(x.fieldGroupObj[e] = !0),
													i === Object(i) &&
														i.corsUrl &&
														'XMLHttpRequest' === P.corsMetadata.corsType &&
														P.fireCORS(i, n, e);
											}),
											(g._clearTimeout = function(e) {
												null != g._timeout && g._timeout[e] && (clearTimeout(g._timeout[e]), (g._timeout[e] = 0));
											}),
											(g._settingsDigest = 0),
											(g._getSettingsDigest = function() {
												if (!g._settingsDigest) {
													var e = g.version;
													g.audienceManagerServer && (e += '|' + g.audienceManagerServer),
														g.audienceManagerServerSecure && (e += '|' + g.audienceManagerServerSecure),
														(g._settingsDigest = g._hash(e));
												}
												return g._settingsDigest;
											}),
											(g._readVisitorDone = !1),
											(g._readVisitor = function() {
												if (!g._readVisitorDone) {
													g._readVisitorDone = !0;
													var e,
														t,
														n,
														i,
														r,
														a,
														o = g._getSettingsDigest(),
														s = !1,
														l = g.cookieRead(g.cookieName),
														c = new Date();
													if (
														(l || I || g.discardTrackingServerECID || (l = g.cookieRead(re.FIRST_PARTY_SERVER_COOKIE)),
														null == g._fields && (g._fields = {}),
														l && 'T' !== l)
													)
														for (
															l = l.split('|'),
																l[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== o && (s = !0), l.shift()),
																l.length % 2 == 1 && l.pop(),
																e = 0;
															e < l.length;
															e += 2
														)
															(t = l[e].split('-')),
																(n = t[0]),
																(i = l[e + 1]),
																t.length > 1
																	? ((r = parseInt(t[1], 10)), (a = t[1].indexOf('s') > 0))
																	: ((r = 0), (a = !1)),
																s && ('MCCIDH' === n && (i = ''), r > 0 && (r = c.getTime() / 1e3 - 60)),
																n &&
																	i &&
																	(g._setField(n, i, 1),
																	r > 0 &&
																		((g._fields['expire' + n] = r + (a ? 's' : '')),
																		(c.getTime() >= 1e3 * r || (a && !g.cookieRead(g.sessionCookieName))) &&
																			(g._fieldsExpired || (g._fieldsExpired = {}), (g._fieldsExpired[n] = !0))));
													!g._getField(O) &&
														F.isTrackingServerPopulated() &&
														(l = g.cookieRead('s_vi')) &&
														((l = l.split('|')),
														l.length > 1 &&
															l[0].indexOf('v1') >= 0 &&
															((i = l[1]),
															(e = i.indexOf('[')),
															e >= 0 && (i = i.substring(0, e)),
															i && i.match(re.VALID_VISITOR_ID_REGEX) && g._setField(O, i)));
												}
											}),
											(g._appendVersionTo = function(e) {
												var t = 'vVersion|' + g.version,
													n = e ? g._getCookieVersion(e) : null;
												return (
													n
														? Z.areVersionsDifferent(n, g.version) && (e = e.replace(re.VERSION_REGEX, t))
														: (e += (e ? '|' : '') + t),
													e
												);
											}),
											(g._writeVisitor = function() {
												var e,
													t,
													n = g._getSettingsDigest();
												for (e in g._fields)
													L(e) &&
														g._fields[e] &&
														'expire' !== e.substring(0, 6) &&
														((t = g._fields[e]),
														(n +=
															(n ? '|' : '') +
															e +
															(g._fields['expire' + e] ? '-' + g._fields['expire' + e] : '') +
															'|' +
															t));
												(n = g._appendVersionTo(n)), g.cookieWrite(g.cookieName, n, 1);
											}),
											(g._getField = function(e, t) {
												return null == g._fields || (!t && g._fieldsExpired && g._fieldsExpired[e])
													? null
													: g._fields[e];
											}),
											(g._setField = function(e, t, n) {
												null == g._fields && (g._fields = {}), (g._fields[e] = t), n || g._writeVisitor();
											}),
											(g._getFieldList = function(e, t) {
												var n = g._getField(e, t);
												return n ? n.split('*') : null;
											}),
											(g._setFieldList = function(e, t, n) {
												g._setField(e, t ? t.join('*') : '', n);
											}),
											(g._getFieldMap = function(e, t) {
												var n = g._getFieldList(e, t);
												if (n) {
													var i,
														r = {};
													for (i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
													return r;
												}
												return null;
											}),
											(g._setFieldMap = function(e, t, n) {
												var i,
													r = null;
												if (t) {
													r = [];
													for (i in t) L(i) && (r.push(i), r.push(t[i]));
												}
												g._setFieldList(e, r, n);
											}),
											(g._setFieldExpire = function(e, t, n) {
												var i = new Date();
												i.setTime(i.getTime() + 1e3 * t),
													null == g._fields && (g._fields = {}),
													(g._fields['expire' + e] = Math.floor(i.getTime() / 1e3) + (n ? 's' : '')),
													t < 0
														? (g._fieldsExpired || (g._fieldsExpired = {}), (g._fieldsExpired[e] = !0))
														: g._fieldsExpired && (g._fieldsExpired[e] = !1),
													n && (g.cookieRead(g.sessionCookieName) || g.cookieWrite(g.sessionCookieName, '1'));
											}),
											(g._findVisitorID = function(t) {
												return (
													t &&
														('object' === e(t) &&
															(t = t.d_mid
																? t.d_mid
																: t.visitorID
																? t.visitorID
																: t.id
																? t.id
																: t.uuid
																? t.uuid
																: '' + t),
														t && 'NOTARGET' === (t = t.toUpperCase()) && (t = T),
														(t && (t === T || t.match(re.VALID_VISITOR_ID_REGEX))) || (t = '')),
													t
												);
											}),
											(g._setFields = function(t, n) {
												if (
													(g._clearTimeout(t),
													null != g._loading && (g._loading[t] = !1),
													x.fieldGroupObj[t] && x.setState(t, !1),
													'MC' === t)
												) {
													!0 !== x.isClientSideMarketingCloudVisitorID && (x.isClientSideMarketingCloudVisitorID = !1);
													var i = g._getField(A);
													if (!i || g.overwriteCrossDomainMCIDAndAID) {
														if (!(i = 'object' === e(n) && n.mid ? n.mid : g._findVisitorID(n))) {
															if (g._use1stPartyMarketingCloudServer && !g.tried1stPartyMarketingCloudServer)
																return (
																	(g.tried1stPartyMarketingCloudServer = !0), void g.getAnalyticsVisitorID(null, !1, !0)
																);
															i = g._generateLocalMID();
														}
														g._setField(A, i);
													}
													(i && i !== T) || (i = ''),
														'object' === e(n) &&
															((n.d_region || n.dcs_region || n.d_blob || n.blob) && g._setFields(M, n),
															g._use1stPartyMarketingCloudServer && n.mid && g._setFields(b, { id: n.id })),
														g._callAllCallbacks(A, [i]);
												}
												if (t === M && 'object' === e(n)) {
													var r = 604800;
													void 0 != n.id_sync_ttl && n.id_sync_ttl && (r = parseInt(n.id_sync_ttl, 10));
													var a = N.getRegionAndCheckIfChanged(n, r);
													g._callAllCallbacks('MCAAMLH', [a]);
													var o = g._getField(k);
													(n.d_blob || n.blob) &&
														((o = n.d_blob), o || (o = n.blob), g._setFieldExpire(k, r), g._setField(k, o)),
														o || (o = ''),
														g._callAllCallbacks(k, [o]),
														!n.error_msg && g._newCustomerIDsHash && g._setField('MCCIDH', g._newCustomerIDsHash);
												}
												if (t === b) {
													var s = g._getField(O);
													(s && !g.overwriteCrossDomainMCIDAndAID) ||
														((s = g._findVisitorID(n)),
														s ? s !== T && g._setFieldExpire(k, -1) : (s = T),
														g._setField(O, s)),
														(s && s !== T) || (s = ''),
														g._callAllCallbacks(O, [s]);
												}
												if (g.idSyncDisableSyncs || g.disableIdSyncs) N.idCallNotProcesssed = !0;
												else {
													N.idCallNotProcesssed = !1;
													var l = {};
													(l.ibs = n.ibs), (l.subdomain = n.subdomain), N.processIDCallData(l);
												}
												if (n === Object(n)) {
													var c, d;
													u() && g.isAllowed() && (c = g._getField('MCOPTOUT'));
													var f = j.parseOptOut(n, c, T);
													(c = f.optOut),
														(d = f.d_ottl),
														g._setFieldExpire('MCOPTOUT', d, !0),
														g._setField('MCOPTOUT', c),
														g._callAllCallbacks('MCOPTOUT', [c]);
												}
											}),
											(g._loading = null),
											(g._getRemoteField = function(e, t, n, i, r) {
												var a,
													o = '',
													s = F.isFirstPartyAnalyticsVisitorIDCall(e),
													l = { MCAAMLH: !0, MCAAMB: !0 };
												if (u() && g.isAllowed()) {
													g._readVisitor(), (o = g._getField(e, !0 === l[e]));
													if (
														(function() {
															return (
																(!o || (g._fieldsExpired && g._fieldsExpired[e])) && (!g.disableThirdPartyCalls || s)
															);
														})()
													) {
														if (
															(e === A || 'MCOPTOUT' === e
																? (a = 'MC')
																: 'MCAAMLH' === e || e === k
																? (a = M)
																: e === O && (a = b),
															a)
														)
															return (
																!t ||
																	(null != g._loading && g._loading[a]) ||
																	(null == g._loading && (g._loading = {}),
																	(g._loading[a] = !0),
																	g._loadData(
																		a,
																		t,
																		function(t) {
																			if (!g._getField(e)) {
																				t && x.setState(a, !0);
																				var n = '';
																				e === A
																					? (n = g._generateLocalMID())
																					: a === M && (n = { error_msg: 'timeout' }),
																					g._setFields(a, n);
																			}
																		},
																		r
																	)),
																g._registerCallback(e, n),
																o || (t || g._setFields(a, { id: T }), '')
															);
													} else
														o ||
															(e === A
																? (g._registerCallback(e, n),
																  (o = g._generateLocalMID()),
																  g.setMarketingCloudVisitorID(o))
																: e === O
																? (g._registerCallback(e, n), (o = ''), g.setAnalyticsVisitorID(o))
																: ((o = ''), (i = !0)));
												}
												return (
													(e !== A && e !== O) || o !== T || ((o = ''), (i = !0)), n && i && g._callCallback(n, [o]), o
												);
											}),
											(g._setMarketingCloudFields = function(e) {
												g._readVisitor(), g._setFields('MC', e);
											}),
											(g._mapCustomerIDs = function(e) {
												g.getAudienceManagerBlob(e, !0);
											}),
											(g._setAnalyticsFields = function(e) {
												g._readVisitor(), g._setFields(b, e);
											}),
											(g._setAudienceManagerFields = function(e) {
												g._readVisitor(), g._setFields(M, e);
											}),
											(g._getAudienceManagerURLData = function(e) {
												var t = g.audienceManagerServer,
													n = '',
													i = g._getField(A),
													r = g._getField(k, !0),
													a = g._getField(O),
													o = a && a !== T ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
												if ((g.loadSSL && g.audienceManagerServerSecure && (t = g.audienceManagerServerSecure), t)) {
													var s,
														l,
														c = g.getCustomerIDs();
													if (c)
														for (s in c)
															L(s) &&
																((l = c[s]),
																(o +=
																	'&d_cid_ic=' +
																	encodeURIComponent(s) +
																	'%01' +
																	encodeURIComponent(l.id ? l.id : '') +
																	(l.authState ? '%01' + l.authState : '')));
													e || (e = '_setAudienceManagerFields');
													var u = 'http' + (g.loadSSL ? 's' : '') + '://' + t + '/id',
														d =
															'd_visid_ver=' +
															g.version +
															(h && -1 !== u.indexOf('demdex.net') ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + h : '') +
															'&d_rtbd=json&d_ver=2' +
															(!i && g._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
															'&d_orgid=' +
															encodeURIComponent(g.marketingCloudOrgID) +
															'&d_nsid=' +
															(g.idSyncContainerID || 0) +
															(i ? '&d_mid=' + encodeURIComponent(i) : '') +
															(g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies ? '&d_coppa=true' : '') +
															(!0 === S ? '&d_coop_safe=1' : !1 === S ? '&d_coop_unsafe=1' : '') +
															(r ? '&d_blob=' + encodeURIComponent(r) : '') +
															o,
														f = ['s_c_il', g._in, e];
													return (
														(n = u + '?' + d + '&d_cb=s_c_il%5B' + g._in + '%5D.' + e),
														{ url: n, corsUrl: u + '?' + d, callback: f }
													);
												}
												return { url: n };
											}),
											(g.appendVisitorIDsTo = function(e) {
												try {
													var t = [[A, g._getField(A)], [O, g._getField(O)], ['MCORGID', g.marketingCloudOrgID]];
													return g._addQuerystringParam(e, re.ADOBE_MC, s(t));
												} catch (t) {
													return e;
												}
											}),
											(g.appendSupplementalDataIDTo = function(e, t) {
												if (!(t = t || g.getSupplementalDataID(F.generateRandomString(), !0))) return e;
												try {
													var n = s([['SDID', t], ['MCORGID', g.marketingCloudOrgID]]);
													return g._addQuerystringParam(e, re.ADOBE_MC_SDID, n);
												} catch (t) {
													return e;
												}
											});
										var F = {
											parseHash: function(e) {
												var t = e.indexOf('#');
												return t > 0 ? e.substr(t) : '';
											},
											hashlessUrl: function(e) {
												var t = e.indexOf('#');
												return t > 0 ? e.substr(0, t) : e;
											},
											addQueryParamAtLocation: function(e, t, n) {
												var i = e.split('&');
												return (n = null != n ? n : i.length), i.splice(n, 0, t), i.join('&');
											},
											isFirstPartyAnalyticsVisitorIDCall: function(e, t, n) {
												if (e !== O) return !1;
												var i;
												return (
													t || (t = g.trackingServer),
													n || (n = g.trackingServerSecure),
													!('string' != typeof (i = g.loadSSL ? n : t) || !i.length) &&
														(i.indexOf('2o7.net') < 0 && i.indexOf('omtrdc.net') < 0)
												);
											},
											isObject: function(e) {
												return Boolean(e && e === Object(e));
											},
											removeCookie: function(e) {
												Q.remove(e, { domain: g.cookieDomain });
											},
											isTrackingServerPopulated: function() {
												return !!g.trackingServer || !!g.trackingServerSecure;
											},
											getTimestampInSeconds: function() {
												return Math.round(new Date().getTime() / 1e3);
											},
											parsePipeDelimetedKeyValues: function(e) {
												return e.split('|').reduce(function(e, t) {
													var n = t.split('=');
													return (e[n[0]] = decodeURIComponent(n[1])), e;
												}, {});
											},
											generateRandomString: function(e) {
												e = e || 5;
												for (var t = '', n = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
													t += n[Math.floor(Math.random() * n.length)];
												return t;
											},
											normalizeBoolean: function(e) {
												return 'true' === e || ('false' !== e && e);
											},
											parseBoolean: function(e) {
												return 'true' === e || ('false' !== e && null);
											},
											replaceMethodsWithFunction: function(e, t) {
												for (var n in e) e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
												return e;
											}
										};
										g._helpers = F;
										var N = ae(g, D);
										(g._destinationPublishing = N), (g.timeoutMetricsLog = []);
										var x = {
											isClientSideMarketingCloudVisitorID: null,
											MCIDCallTimedOut: null,
											AnalyticsIDCallTimedOut: null,
											AAMIDCallTimedOut: null,
											fieldGroupObj: {},
											setState: function(e, t) {
												switch (e) {
													case 'MC':
														!1 === t
															? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
															: (this.MCIDCallTimedOut = t);
														break;
													case b:
														!1 === t
															? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1)
															: (this.AnalyticsIDCallTimedOut = t);
														break;
													case M:
														!1 === t
															? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
															: (this.AAMIDCallTimedOut = t);
												}
											}
										};
										(g.isClientSideMarketingCloudVisitorID = function() {
											return x.isClientSideMarketingCloudVisitorID;
										}),
											(g.MCIDCallTimedOut = function() {
												return x.MCIDCallTimedOut;
											}),
											(g.AnalyticsIDCallTimedOut = function() {
												return x.AnalyticsIDCallTimedOut;
											}),
											(g.AAMIDCallTimedOut = function() {
												return x.AAMIDCallTimedOut;
											}),
											(g.idSyncGetOnPageSyncInfo = function() {
												return g._readVisitor(), g._getField('MCSYNCSOP');
											}),
											(g.idSyncByURL = function(e) {
												if (!g.isOptedOut()) {
													var t = l(e || {});
													if (t.error) return t.error;
													var n,
														i,
														r = e.url,
														a = encodeURIComponent,
														o = N;
													return (
														(r = r.replace(/^https:/, '').replace(/^http:/, '')),
														(n = j.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
														(i = ['ibs', a(e.dpid), 'img', a(r), t.ttl, '', n]),
														o.addMessage(i.join('|')),
														o.requestToProcess(),
														'Successfully queued'
													);
												}
											}),
											(g.idSyncByDataSource = function(e) {
												if (!g.isOptedOut())
													return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length
														? ((e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
														  g.idSyncByURL(e))
														: 'Error: config or config.dpuuid is empty';
											}),
											Ue(g, N),
											(g._getCookieVersion = function(e) {
												e = e || g.cookieRead(g.cookieName);
												var t = re.VERSION_REGEX.exec(e);
												return t && t.length > 1 ? t[1] : null;
											}),
											(g._resetAmcvCookie = function(e) {
												var t = g._getCookieVersion();
												(t && !Z.isLessThan(t, e)) || F.removeCookie(g.cookieName);
											}),
											(g.setAsCoopSafe = function() {
												S = !0;
											}),
											(g.setAsCoopUnsafe = function() {
												S = !1;
											}),
											(function() {
												if (((g.configs = Object.create(null)), F.isObject(n)))
													for (var e in n) L(e) && ((g[e] = n[e]), (g.configs[e] = n[e]));
											})(),
											(function() {
												[
													['getMarketingCloudVisitorID'],
													['setCustomerIDs', void 0],
													['getAnalyticsVisitorID'],
													['getAudienceManagerLocationHint'],
													['getLocationHint'],
													['getAudienceManagerBlob']
												].forEach(function(e) {
													var t = e[0],
														n = 2 === e.length ? e[1] : '',
														i = g[t];
													g[t] = function(e) {
														return u() && g.isAllowed()
															? i.apply(g, arguments)
															: ('function' == typeof e && g._callCallback(e, [n]), n);
													};
												});
											})(),
											(g.init = function() {
												if (c()) return m.optIn.fetchPermissions(f, !0);
												!(function() {
													if (F.isObject(n)) {
														(g.idSyncContainerID = g.idSyncContainerID || 0),
															(S = 'boolean' == typeof g.isCoopSafe ? g.isCoopSafe : F.parseBoolean(g.isCoopSafe)),
															g.resetBeforeVersion && g._resetAmcvCookie(g.resetBeforeVersion),
															g._attemptToPopulateIdsFromUrl(),
															g._attemptToPopulateSdidFromUrl(),
															g._readVisitor();
														var e = g._getField(y),
															t = Math.ceil(new Date().getTime() / re.MILLIS_PER_DAY);
														g.idSyncDisableSyncs ||
															g.disableIdSyncs ||
															!N.canMakeSyncIDCall(e, t) ||
															(g._setFieldExpire(k, -1), g._setField(y, t)),
															g.getMarketingCloudVisitorID(),
															g.getAudienceManagerLocationHint(),
															g.getAudienceManagerBlob(),
															g._mergeServerState(g.serverState);
													} else g._attemptToPopulateIdsFromUrl(), g._attemptToPopulateSdidFromUrl();
												})(),
													(function() {
														if (!g.idSyncDisableSyncs && !g.disableIdSyncs) {
															N.checkDPIframeSrc();
															var e = function() {
																var e = N;
																e.readyToAttachIframe() && e.attachIframe();
															};
															v.addEventListener('load', function() {
																(D.windowLoaded = !0), e();
															});
															try {
																te.receiveMessage(function(e) {
																	N.receiveMessage(e.data);
																}, N.iframeHost);
															} catch (e) {}
														}
													})(),
													(function() {
														g.whitelistIframeDomains &&
															re.POST_MESSAGE_ENABLED &&
															((g.whitelistIframeDomains =
																g.whitelistIframeDomains instanceof Array
																	? g.whitelistIframeDomains
																	: [g.whitelistIframeDomains]),
															g.whitelistIframeDomains.forEach(function(e) {
																var n = new B(t, e),
																	i = K(g, n);
																te.receiveMessage(i, e);
															}));
													})();
											});
									};
									(qe.config = se), (_.Visitor = qe);
									var Xe = qe,
										We = function(e) {
											if (j.isObject(e))
												return Object.keys(e)
													.filter(function(t) {
														return '' !== e[t];
													})
													.reduce(function(t, n) {
														var i = se.normalizeConfig(e[n]),
															r = j.normalizeBoolean(i);
														return (t[n] = r), t;
													}, Object.create(null));
										},
										Je = Ve.OptIn,
										Ke = Ve.IabPlugin;
									return (
										(Xe.getInstance = function(e, t) {
											if (!e) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
											e.indexOf('@') < 0 && (e += '@AdobeOrg');
											var n = (function() {
												var t = _.s_c_il;
												if (t)
													for (var n = 0; n < t.length; n++) {
														var i = t[n];
														if (i && 'Visitor' === i._c && i.marketingCloudOrgID === e) return i;
													}
											})();
											if (n) return n;
											var i = We(t);
											!(function(e) {
												_.adobe.optIn =
													_.adobe.optIn ||
													(function() {
														var t = j.pluck(e, [
																'doesOptInApply',
																'previousPermissions',
																'preOptInApprovals',
																'isOptInStorageEnabled',
																'optInStorageExpiry',
																'isIabContext'
															]),
															n = e.optInCookieDomain || e.cookieDomain;
														(n = n || $()), (n = n === window.location.hostname ? '' : n), (t.optInCookieDomain = n);
														var i = new Je(t, { cookies: Q });
														if (t.isIabContext && t.doesOptInApply) {
															var r = new Ke(window.__cmp);
															i.registerPlugin(r);
														}
														return i;
													})();
											})(i || {});
											var r = e,
												a = r
													.split('')
													.reverse()
													.join(''),
												o = new Xe(e, null, a);
											j.isObject(i) && i.cookieDomain && (o.cookieDomain = i.cookieDomain),
												(function() {
													_.s_c_il.splice(--_.s_c_in, 1);
												})();
											var s = j.getIeVersion();
											if ('number' == typeof s && s < 10)
												return o._helpers.replaceMethodsWithFunction(o, function() {});
											var l =
												(function() {
													try {
														return _.self !== _.parent;
													} catch (e) {
														return !0;
													}
												})() &&
												!(function(e) {
													return (
														e.cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
														'T' === e.cookieRead('TEST_AMCV_COOKIE') &&
															(e._helpers.removeCookie('TEST_AMCV_COOKIE'), !0)
													);
												})(o) &&
												_.parent
													? new Y(e, i, o, _.parent)
													: new Xe(e, i, a);
											return (o = null), l.init(), l;
										}),
										(function() {
											function e() {
												Xe.windowLoaded = !0;
											}
											_.addEventListener ? _.addEventListener('load', e) : _.attachEvent && _.attachEvent('onload', e),
												(Xe.codeLoadEnd = new Date().getTime());
										})(),
										Xe
									);
								})();
								return Visitor;
							})();
						}
					},
					'adobe-mcid/src/view/utils/timeUnits.js': {
						script: function(module, exports, require, turbine) {
							/*************************************************************************
							 * ADOBE CONFIDENTIAL
							 * ___________________
							 *
							 *  Copyright 2018 Adobe Systems Incorporated
							 *  All Rights Reserved.
							 *
							 * NOTICE:  All information contained herein is, and remains
							 * the property of Adobe Systems Incorporated and its suppliers,
							 * if any.  The intellectual and technical concepts contained
							 * herein are proprietary to Adobe Systems Incorporated and its
							 * suppliers and are protected by all applicable intellectual property
							 * laws, including trade secret and copyright laws.
							 * Dissemination of this information or reproduction of this material
							 * is strictly forbidden unless prior written permission is obtained
							 * from Adobe Systems Incorporated.
							 **************************************************************************/

							var timeUnits = {
								Hours: 3600,
								Days: 24 * 3600,
								Weeks: 7 * 24 * 3600,
								Months: 30 * 24 * 3600,
								Years: 365 * 24 * 3600
							};

							module.exports = timeUnits;
						}
					}
				},
				settings: {
					orgId: 'BB3937CB5B349FE70A495EAE@AdobeOrg'
				},
				hostedLibFilesBaseUrl: '/launch/28200064b0a4/hostedLibFiles/EPf83a38d6d03b44f08b465a6d63b6bbe3/'
			}
		},
		company: {
			orgId: 'BB3937CB5B349FE70A495EAE@AdobeOrg'
		},
		property: {
			name: 'Crave 2.0 10 Foot Copy',
			settings: {
				domains: ['bellmedia.ca', '9c9media.com'],
				undefinedVarsReturnEmpty: true
			}
		},
		rules: [
			{
				id: 'RL0ab4b5d8c3b8404bb3a71990b1c93c48',
				name: 'Direct Call - pageView',
				events: [
					{
						modulePath: 'core/src/lib/events/directCall.js',
						settings: {
							identifier: 'pageView'
						},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
						settings: {}
					},
					{
						modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
						settings: {
							trackerProperties: {
								eVars: [
									{
										name: 'eVar1',
										type: 'value',
										value: '%Search_Term%'
									},
									{
										name: 'eVar5',
										type: 'value',
										value: '%Page_Content_Type%'
									},
									{
										name: 'eVar6',
										type: 'value',
										value: '%Page_Section%'
									},
									{
										name: 'eVar11',
										type: 'value',
										value: '%User_ID%'
									},
									{
										name: 'eVar12',
										type: 'value',
										value: '%User_Status%'
									},
									{
										name: 'eVar13',
										type: 'value',
										value: '%User_Auth_Location%'
									},
									{
										name: 'eVar14',
										type: 'value',
										value: '%User_BDU%'
									},
									{
										name: 'eVar15',
										type: 'value',
										value: '%User_Subscription_Partners%'
									},
									{
										name: 'eVar21',
										type: 'value',
										value: '%Show_Name%'
									},
									{
										name: 'eVar30',
										type: 'value',
										value: '%Site_Platform%'
									},
									{
										name: 'eVar36',
										type: 'value',
										value: '%Page_Filter_List%'
									},
									{
										name: 'eVar42',
										type: 'value',
										value: '%Page_URL%'
									},
									{
										name: 'eVar43',
										type: 'value',
										value: '%Page_External_Referrer%'
									},
									{
										name: 'eVar68',
										type: 'value',
										value: '%Page_Day_Parts%'
									},
									{
										name: 'eVar69',
										type: 'value',
										value: '%Site_Name%'
									},
									{
										name: 'eVar79',
										type: 'value',
										value: '%User_Profile_Type%'
									},
									{
										name: 'eVar80',
										type: 'value',
										value: '%User_Subscription_Type%'
									},
									{
										name: 'eVar91',
										type: 'value',
										value: '%Page_Name%'
									},
									{
										name: 'eVar93',
										type: 'value',
										value: '%Page_Date%'
									},
									{
										name: 'eVar31',
										type: 'value',
										value: '%Page_Collection_ID%'
									},
									{
										name: 'eVar62',
										type: 'value',
										value: '%shelfTrack_collectionName%'
									},
									{
										name: 'eVar63',
										type: 'value',
										value: '%shelfTrack_verticalPosition%'
									},
									{
										name: 'eVar64',
										type: 'value',
										value: '%shelfTrack_horizontalPosition%'
									},
									{
										name: 'eVar81',
										type: 'value',
										value: '%playbackLanguage%'
									},
									{
										name: 'eVar82',
										type: 'value',
										value: '%profileLanguage%'
									}
								],
								props: [
									{
										name: 'prop1',
										type: 'value',
										value: '%Search_Term%'
									},
									{
										name: 'prop5',
										type: 'value',
										value: '%Page_Content_Type%'
									},
									{
										name: 'prop11',
										type: 'value',
										value: '%User_ID%'
									},
									{
										name: 'prop12',
										type: 'value',
										value: '%User_Status%'
									},
									{
										name: 'prop21',
										type: 'value',
										value: '%Show_Name%'
									},
									{
										name: 'prop30',
										type: 'value',
										value: '%Site_Platform%'
									},
									{
										name: 'prop42',
										type: 'value',
										value: '%Page_URL%'
									},
									{
										name: 'prop58',
										type: 'value',
										value: '2019-10-22'
									},
									{
										name: 'prop69',
										type: 'value',
										value: '%Site_Name%'
									}
								],
								server: '%Page_Hostname%',
								channel: '%Page_Section%',
								campaign: {
									type: 'value',
									value: '%Campaign_ID%'
								},
								pageName: '%Page_Name%'
							}
						}
					},
					{
						modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
						settings: {
							type: 'page'
						}
					},
					{
						modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
						settings: {}
					}
				]
			},
			{
				id: 'RL8d4261c5fa19431c87a4e87391652047',
				name: 'GroupM Marketing Tags - www.crave.ca',
				events: [
					{
						modulePath: 'core/src/lib/events/customEvent.js',
						settings: {
							type: 'digitalDataLoaded',
							bubbleFireIfParent: true,
							bubbleFireIfChildFired: true
						},
						ruleOrder: 50.0
					}
				],
				conditions: [
					{
						modulePath: 'core/src/lib/conditions/path.js',
						settings: {
							paths: [
								{
									value: '^\\/$',
									valueIsRegex: true
								}
							]
						}
					}
				],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source: '/653e7ca2fc48/16d20b3f6bc7/28200064b0a4/RC1d0890ea03574cbea3ce0d16ea11d83c-source.js',
							language: 'html',
							isExternal: true
						}
					}
				]
			},
			{
				id: 'RL6872a860649a4fb2b6f47b118b202c9a',
				name: 'Amazon Page Load Pixel',
				events: [
					{
						modulePath: 'core/src/lib/events/pageBottom.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [
					{
						modulePath: 'core/src/lib/conditions/path.js',
						settings: {
							paths: [
								{
									value: '\\/subscribe(\\/)?$',
									valueIsRegex: true
								}
							]
						}
					}
				],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source:
								"<!-- Use of this pixel is subject to the Amazon ad specs and policies at http://www.amazon.com/b/?&node=7253015011 -->\n<script type='text/javascript'>\n    var _pix = document.getElementById('_pix_id_189e1e40-113b-8b69-4644-04fe3a5ec489');\n    if (!_pix) {\n        var protocol = '//';\n        var a = Math.random() * 1000000000000000000;\n        _pix = document.createElement('iframe');\n        _pix.style.display = 'none';\n        _pix.setAttribute('src', protocol + 's.amazon-adsystem.com/iu3?d=generic&ex-fargs=%3Fid%3D189e1e40-113b-8b69-4644-04fe3a5ec489%26type%3D4%26m%3D7&ex-fch=416613&ex-src=https://www.crave.ca/subscribe&ex-hargs=v%3D1.0%3Bc%3D7745458665822%3Bp%3D189E1E40-113B-8B69-4644-04FE3A5EC489' + '&cb=' + a);\n        _pix.setAttribute('id', '_pix_id_189e1e40-113b-8b69-4644-04fe3a5ec489');\n        document.body.appendChild(_pix);\n    }\n</script>\n<noscript><img height='1' width='1' border='0' alt='' src='https://s.amazon-adsystem.com/iui3?d=forester-did&ex-fargs=%3Fid%3D189e1e40-113b-8b69-4644-04fe3a5ec489%26type%3D4%26m%3D7&ex-fch=416613&ex-src=https://www.crave.ca/subscribe&ex-hargs=v%3D1.0%3Bc%3D7745458665822%3Bp%3D189E1E40-113B-8B69-4644-04FE3A5EC489' /></noscript>",
							language: 'html'
						}
					}
				]
			},
			{
				id: 'RL4f340ea63e1242d5b0c3c6d9bccd5d52',
				name: 'Twitter Confirmation Page',
				events: [
					{
						modulePath: 'core/src/lib/events/pageBottom.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [
					{
						modulePath: 'core/src/lib/conditions/path.js',
						settings: {
							paths: [
								{
									value: '/subscribe/success'
								}
							]
						}
					}
				],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source:
								'<!-- Twitter single-event website tag code -->\n<script src="//platform.twitter.com/oct.js" type="text/javascript"></script>\n<script type="text/javascript">\n    twttr.conversion.trackPid(\'o2omn\', {\n        tw_sale_amount: 0,\n        tw_order_quantity: 0\n    });\n</script>\n<noscript>\n    <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=o2omn&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />\n    <img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=o2omn&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />\n</noscript>\n<!-- End Twitter single-event website tag code -->',
							language: 'html'
						}
					}
				]
			},
			{
				id: 'RLdd8247516db44c2682895a375930937d',
				name: 'CSS - Header Login Click',
				events: [
					{
						modulePath: 'core/src/lib/events/mousedown.js',
						settings: {
							elementSelector: 'div.user-login a',
							bubbleFireIfParent: true,
							bubbleFireIfChildFired: true
						},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source: '/653e7ca2fc48/16d20b3f6bc7/28200064b0a4/RCc7522a44b31e494e8ece2774fa2ee30a-source.js',
							language: 'javascript',
							isExternal: true
						}
					}
				]
			},
			{
				id: 'RL2688bcb7a906495abf77a6f5d6f4a510',
				name: 'DOM Ready',
				events: [
					{
						modulePath: 'core/src/lib/events/domReady.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source: '/653e7ca2fc48/16d20b3f6bc7/28200064b0a4/RC2a2a3c64d1bd439991693121d0b0a563-source.js',
							language: 'javascript',
							isExternal: true
						}
					}
				]
			},
			{
				id: 'RL5a2246e4f2764bda87fbdd0e146345a2',
				name: 'CSS - My Cravings Login Click',
				events: [
					{
						modulePath: 'core/src/lib/events/mousedown.js',
						settings: {
							elementSelector: 'div.message-login a',
							bubbleFireIfParent: true,
							bubbleFireIfChildFired: true
						},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source: '/653e7ca2fc48/16d20b3f6bc7/28200064b0a4/RC315a00e41df74e848a32fb20546f5f08-source.js',
							language: 'javascript',
							isExternal: true
						}
					}
				]
			},
			{
				id: 'RL6daed070a94b45fb822cbf9bc50d0eb4',
				name: 'Permutive DMP',
				events: [
					{
						modulePath: 'core/src/lib/events/libraryLoaded.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source:
								'<script>  !function(n,e,o,r,i){if(!e){e=e||{},window.permutive=e,e.q=[],e.config=i||{},e.config.projectId=o,e.config.apiKey=r,e.config.environment=e.config.environment||"production";for(var t=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],c=0;c<t.length;c++){var f=t[c];e[f]=function(n){return function(){var o=Array.prototype.slice.call(arguments,0);e.q.push({functionName:n,arguments:o})}}(f)}}}(document,window.permutive,"289d106c-df24-4cd9-a9fa-753e928c23ad","b1a4360a-3db9-4b39-b09d-c3e14666840a",{}); \nwindow.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[])}}); \npermutive.addon(\'web\', {})\n</script>\n<script async src="https://cdn.permutive.com/289d106c-df24-4cd9-a9fa-753e928c23ad-web.js"></script>',
							language: 'html'
						}
					}
				]
			},
			{
				id: 'RLf14a233078ce4d0b97094f84e8ca914c',
				name: 'Library Loaded - All Pages',
				events: [
					{
						modulePath: 'core/src/lib/events/libraryLoaded.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							global: true,
							source:
								'function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nif (!Array.isArray) {\n  Array.isArray = function (arg) {\n    return Object.prototype.toString.call(arg) === "[object Array]";\n  };\n}\n\nwindow._dataManager = {\n  init: function init(url) {\n    if (this.testMode && _satellite.buildInfo.environment !== "production") {\n      url = this.testURL;\n    }\n\n    if (!window.digitalData) {\n      window.digitalData = {\n        page: {\n          siteName: "crave",\n          type: "other"\n        },\n        user: {\n          authStatus: "anonymous"\n        }\n      };\n    }\n\n    this.overwriteMID();\n    digitalData.page.siteName = digitalData.page.siteName || digitalData.page.sitename;\n    digitalData.page.platform = digitalData.page.platform || "web";\n    digitalData.page.contentType = digitalData.page.contentType || "web page";\n    digitalData.page.type = digitalData.page.type || _dataManager.getPageType();\n\n    if (digitalData.page.type == "grid") {\n      var $coll = document.querySelector("div[data-collection-id]");\n\n      if ($coll && $coll.getAttribute("data-collection-id") && $coll.getAttribute("data-collection-name")) {\n        digitalData.page.collectionId = $coll.getAttribute("data-collection-id") + ":" + $coll.getAttribute("data-collection-name");\n      }\n    } else if (s.Util.cookieRead("v31")) {\n      digitalData.page.collectionId = s.Util.cookieRead("v31");\n      s.Util.cookieWrite("v31", "", -1);\n    }\n\n    if (digitalData.page.collectionId) {\n      digitalData.page.collectionId = digitalData.page.collectionId.replace(/\\s+$/, "");\n    }\n\n    if (digitalData.page.filters) {\n      _dataManager.setFilters(digitalData.page.filters);\n    }\n\n    digitalData.page.name = _dataManager.getPageName();\n    digitalData.page.section = digitalData.page.name.split(":")[1];\n    var d = new Date(),\n        hours = d.getHours(),\n        ampm = "am",\n        days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];\n\n    if (hours > 12) {\n      hours -= 12;\n      ampm = "pm";\n    }\n\n    digitalData.page.currentDate = d.getFullYear() + "-" + (d.getMonth() < 9 ? "0" : "") + (d.getMonth() + 1) + "-" + (d.getDate() < 10 ? "0" : "") + d.getDate();\n    digitalData.page.dayParts = days[d.getDay()] + " " + (hours < 10 ? "0" : "") + hours + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes() + " " + ampm;\n    var rsid = this.populateRSID(window.digitalData.page.siteName);\n    s.setAccount(rsid);\n    this.checkPreventDefault(url);\n\n    _dataManager.setupNavTracking();\n  },\n  console: function (_console) {\n    function console(_x) {\n      return _console.apply(this, arguments);\n    }\n\n    console.toString = function () {\n      return _console.toString();\n    };\n\n    return console;\n  }(function (message) {\n    if (_satellite.buildInfo.environment !== "production") {\n      console.log(message);\n    }\n  }),\n  checkMID: function checkMID(mid) {\n    if (typeof mid !== "string") {\n      this.console("checkMID: error - mid must be a string");\n      return false;\n    }\n\n    if (mid.length !== 38) {\n      this.console("checkMID: error - mid is not the correct length");\n      return false;\n    }\n\n    var numbersTest = new RegExp(/^[0-9]*$/);\n\n    if (!numbersTest.test(mid)) {\n      this.console("checkMID: error - mid contains invalid characters");\n      return false;\n    }\n\n    return mid;\n  },\n  overwriteMID: function overwriteMID(mediaCloudId) {\n    var mid;\n\n    if (typeof mediaCloudId === "undefined") {\n      if (window.digitalData && window.digitalData.launch && window.digitalData.launch.mid) {\n        mid = window.digitalData.launch.mid;\n      } else {\n        this.console("overwriteMID: error - no id provided, and no id exists in the data layer");\n        return false;\n      }\n    } else {\n      mid = mediaCloudId;\n    }\n\n    if (this.checkMID(mid)) {\n      window.s.visitor.overwriteCrossDomainMCIDAndAID = true;\n      window.s.visitor.setMarketingCloudVisitorID(mid);\n      window.s.marketingCloudVisitorID = mid;\n      this.console("overwriteMID: mid successfully written to: " + mid);\n      return mid;\n    } else {\n      this.console("overwriteMID: error - overwrite failed; invalid marketing cloud id");\n      return false;\n    }\n  },\n  bindEventHandlers: function bindEventHandlers() {\n    // register events\n    var events = ["accountHashChange", "addToFavourites", "authError", "authSuccess", "changePlaybackLanguage", "changeProfileLanguage", "digitalDataLoaded", "episodeListClick", "filterShowList", "giftRedemptionSuccess", "loginProblemsClick", "passwordProblemsClick", "purchaseSuccess", "registrationSuccess", "removeFromFavourites", "screenView", "searchResultsUpdated", "showLinkClick", "showOverlayOpen"];\n\n    for (var i = 0; i < events.length; i++) {\n      document.addEventListener(events[i], function (e) {\n        window._dataManager.console("!!!LAUNCH LOGGED EVENT: " + e.type);\n\n        window._dataManager.console(e.detail);\n\n        if (window.digitalData) {\n          if (digitalData.pageLoaded) {\n            digitalData.eventData = null;\n          }\n\n          var eType = "pageEvent",\n              eName = "",\n              eDetail;\n          var userData;\n\n          if (e.detail && e.detail.user) {\n            userData = e.detail.user;\n          } else if (window.savedUserData) {\n            userData = savedUserData;\n            savedUserData = null;\n            eName = "authentication success";\n          }\n\n          if (userData) {\n            digitalData.user = digitalData.user || {};\n\n            for (var x in userData) {\n              if (userData[x]) {\n                digitalData.user[x] = userData[x];\n\n                if (x == "authBDU") {\n                  digitalData.user[x] = digitalData.user[x].replace("bdu:", "");\n                }\n              }\n            }\n          }\n        }\n\n        switch (e.type) {\n          case "accountHashChange":\n            var invalidViews = ["checkservices"],\n                isValidView = true;\n\n            if (e.detail.page) {\n              for (var i = 0; i < invalidViews.length; i++) {\n                if (e.detail.page.stepName == invalidViews[i]) {\n                  isValidView = false;\n                  break;\n                }\n              }\n\n              if (isValidView) {\n                digitalData.page.stepName = e.detail.page.stepName;\n\n                if (digitalData.page.stepName == "bdu") {\n                  digitalData.page.stepName = "choose provider";\n                } else if (digitalData.page.stepName == "bdu") {\n                  digitalData.page.stepName = "provider login";\n                }\n\n                eType = "pageView";\n              } else {\n                eType = "";\n              }\n            }\n\n            break;\n\n          case "addToFavourites":\n            eName = "add to favourites";\n            digitalData.show = e.detail.show;\n            break;\n\n          case "authError":\n            eName = "authentication error";\n\n            if (e.detail.error) {\n              digitalData.error = {\n                type: e.detail.error.type\n              };\n            }\n\n            break;\n\n          case "authSuccess":\n            eName = "authentication success";\n            break;\n\n          case "changePlaybackLanguage":\n            eName = "change playback language";\n\n            if (e.detail && typeof e.detail.language === "string") {\n              eDetail = {\n                language: e.detail.language\n              };\n            }\n\n            break;\n\n          case "changeProfileLanguage":\n            eName = "change profile language";\n\n            if (e.detail && typeof e.detail.language === "string") {\n              eDetail = {\n                language: e.detail.language\n              };\n            }\n\n            break;\n\n          case "digitalDataLoaded":\n            _dataManager.init();\n\n            digitalData.pageLoaded = true;\n\n            if (digitalData.page.type == "search") {\n              if (window.savedSearchData) {\n                digitalData.search = savedSearchData;\n                savedSearchData = null;\n              } else {\n                // track this on the searchResultsUpdated event\n                return;\n              }\n            }\n\n            eType = "pageView";\n            break;\n\n          case "episodeListClick":\n            eName = "episode list click";\n            digitalData.show = e.detail.show;\n            break;\n\n          case "filterShowList":\n            _dataManager.setFilters(e.detail.page.filters);\n\n            eType = "pageView";\n            break;\n\n          case "giftRedemptionSuccess":\n            digitalData.purchase = {\n              promoCode: e.detail.promoCode,\n              type: e.detail.purchaseType || "subscription"\n            };\n            eName = "gift redemption success";\n            break;\n\n          case "loginProblemsClick":\n            eName = "login problems click";\n            break;\n\n          case "passwordProblemsClick":\n            eName = "password problems click";\n            break;\n\n          case "purchaseSuccess":\n            digitalData.purchase = {\n              type: e.detail.purchaseType || "subscription"\n            };\n            eName = e.detail.purchaseType == "gift" ? "gift subscription purchase" : "subscription purchase";\n            break;\n\n          case "registrationSuccess":\n            eName = "registration success";\n            break;\n\n          case "removeFromFavourites":\n            eName = "remove from favourites";\n            digitalData.show = e.detail.show;\n            break;\n\n          case "screenView":\n            if (e.detail.page) {\n              for (var x in e.detail.page) {\n                digitalData.page[x] = e.detail.page[x];\n              }\n            }\n\n            if (!digitalData.page.section) {\n              digitalData.page.section = digitalData.page.type;\n            }\n\n            eType = "pageView";\n            break;\n\n          case "searchResultsUpdated":\n            digitalData.page.type = "search";\n\n            if (digitalData.pageLoaded) {\n              digitalData.search = {\n                term: e.detail.search.term\n              };\n              eType = "pageView";\n            } else {\n              window.savedSearchData = e.detail.search;\n              return;\n            }\n\n            break;\n\n          case "showLinkClick":\n            if (e.detail.show && e.detail.show.collectionId && e.detail.show.collectionName) {\n              s.Util.cookieWrite("v31", e.detail.show.collectionId + ":" + e.detail.show.collectionName.toLowerCase());\n            }\n\n            eName = eType = "";\n            break;\n\n          case "showOverlayOpen":\n            digitalData.page.type = "show";\n            digitalData.show = e.detail.show;\n\n            if (digitalData.show.name) {\n              digitalData.show.name = digitalData.show.name.replace("Promotional Teaser: Base - ", "");\n            }\n\n            if (digitalData.show.collectionId && digitalData.show.collectionName) {\n              digitalData.page.collectionId = (digitalData.show.collectionId + ":" + digitalData.show.collectionName).replace(/\\s+$/, "");\n            } else if (digitalData.show.collectionName) {\n              digitalData.page.collectionId = digitalData.show.collectionName.replace(/\\s+$/, "");\n            }\n\n            eType = "pageView";\n            break;\n        }\n\n        if (digitalData.pageLoaded || eName == "authentication success") {\n          delete digitalData.eventData;\n\n          if (eName) {\n            digitalData.eventData = {\n              name: eName\n            };\n\n            if (eDetail) {\n              if (!digitalData.eventData.detail) {\n                digitalData.eventData.detail = {};\n              }\n\n              var eDetailKeys = Object.keys(eDetail);\n              eDetailKeys.forEach(function (key) {\n                digitalData.eventData.detail[key] = eDetail[key];\n              });\n            }\n          }\n\n          if (eType && e.type === "showOverlayOpen" && e.detail) {\n            if (e.detail.show) {\n              var showKeys = Object.keys(e.detail.show);\n              showKeys.forEach(function (key) {\n                if (e.detail.show[key] === null) {\n                  e.detail.show[key] = "";\n                } else {}\n\n                e.detail.show[key] = String(e.detail.show[key]);\n              });\n            }\n\n            _dataManager.setShelfCookie(e.detail);\n\n            _satellite.track("pageView", e.detail);\n          } else if (eType) {\n            if (eType == "pageView" && !window._dataManager.preventDefault) {\n              digitalData.page.name = _dataManager.getPageName();\n\n              _satellite.track(eType);\n            } else if (eType == "pageView" && window._dataManager.preventDefault) {\n              digitalData.page.name = _dataManager.getPageName();\n            } else {\n              _satellite.track(eType);\n            }\n          }\n        }\n      });\n    }\n  },\n  populateRSID: function populateRSID(siteName) {\n    var sitePart;\n    var rsid;\n\n    if (!this.checkSiteNameWhitelist(siteName) || siteName === "crave") {\n      sitePart = "crave";\n    } else {\n      if (siteName === "ctvnews") {\n        sitePart = "news";\n      } else {\n        sitePart = siteName;\n      }\n    }\n\n    if (window._satellite.buildInfo.environment === "development" || window._satellite.buildInfo.environment === "staging") {\n      rsid = "bellmedia" + sitePart + "dev";\n    } else if (window._satellite.buildInfo.environment === "production") {\n      rsid = "bellmedia" + sitePart + "prod,bellmediaglobalprod";\n    }\n\n    return rsid;\n  },\n  checkSiteNameWhitelist: function checkSiteNameWhitelist(siteName) {\n    if (typeof siteName === "string") {\n      var whiteList = {\n        "crave": true,\n        "tsn": true,\n        "rds": true,\n        "ctv": true,\n        "ctvnews": true\n      };\n\n      if (whiteList[siteName]) {\n        return true;\n      }\n    }\n\n    return false;\n  },\n  getQueryStringParameterValue: function getQueryStringParameterValue(parameterName, queryString) {\n    if (typeof parameterName !== "string") {\n      window._dataManager.console("_dataManager - getQueryStringParameter: invalid parameterName");\n\n      return false;\n    }\n\n    if (typeof queryString === "undefined") {\n      queryString = window.document.URL;\n    }\n\n    var regexTest = new RegExp(parameterName + "=([^&\\\\s]*)");\n    var parameterValue = queryString.match(regexTest);\n\n    if (parameterValue === null) {\n      window._dataManager.console("_dataManager - getQueryStringParameter: parameter does not exist");\n\n      return null;\n    } else {\n      return parameterValue[1];\n    }\n  },\n  checkPreventDefault: function checkPreventDefault(queryString) {\n    if (typeof queryString === "undefined") {\n      queryString = window.document.URL;\n    }\n\n    if (this.getQueryStringParameterValue("preventdefault", queryString) === "true") {\n      this.preventDefault = true;\n    } else {\n      this.preventDefault = false;\n    }\n  },\n  getPageType: function getPageType() {\n    var path = document.location.pathname,\n        type = "";\n\n    if (document.querySelector(".carousel")) {\n      if (path == "/") {\n        type = "home";\n      } else {\n        type = "landing";\n      }\n    } else if (document.querySelector(".search-results")) {\n      type = "search";\n    } else if (document.querySelector(".axismedia-landing-page")) {\n      type = "show";\n    } else if (document.querySelector(".web-videoplayer")) {\n      type = "playback";\n    } else if (document.querySelector(".linear-video")) {\n      type = "live";\n    } else if (document.querySelector(".marketing")) {\n      type = "registration";\n    } else if (document.querySelector(".is-axismedia-type")) {\n      type = "grid";\n    }\n\n    return type;\n  },\n  getPageName: function getPageName() {\n    var name = digitalData.page.siteName + ":";\n\n    if (digitalData.page.type == "grid") {\n      if (digitalData.page.collectionId) {\n        name += "collection:" + digitalData.page.collectionId;\n      } else {\n        name += "landing:" + document.location.pathname.split("/")[1];\n\n        if (digitalData.page.mainFilter) {\n          name += ":" + digitalData.page.mainFilter.value;\n        }\n      }\n    } else if (digitalData.page.type.match(/playback|show/) !== null) {\n      name += "show:" + digitalData.show.name;\n    } else if (digitalData.page.type == "other") {\n      var path = document.location.pathname.split("/");\n\n      for (var i = 0; i < path.length; i++) {\n        if (path[i]) {\n          name += (name.lastIndexOf(":") == name.length - 1 ? "" : ":") + path[i];\n        }\n      }\n    } else {\n      name += digitalData.page.type;\n\n      if (digitalData.page.categoryName || digitalData.page.collectionName || digitalData.page.genre) {\n        if (digitalData.page.categoryName) {\n          name += ":" + digitalData.page.categoryName;\n        }\n\n        if (digitalData.page.collectionName) {\n          name += ":" + digitalData.page.collectionName;\n        }\n\n        if (digitalData.page.genre) {\n          name += ":" + digitalData.page.genre;\n        }\n      } else if (digitalData.page.screenName) {\n        name += ":" + digitalData.page.screenName;\n      } else if (digitalData.page.type == "login") {\n        if (digitalData.page.stepName && digitalData.page.stepName != "login") {\n          name += ":" + digitalData.page.stepName;\n        } else {\n          name += ":choose method";\n        }\n      }\n    }\n\n    return name.slice(-1) === ":"?name.slice(0, -1).toLowerCase():name.toLowerCase();\n  },\n  setFilters: function setFilters(filters) {\n    if (!filters) {\n      return;\n    }\n\n    var newFilters = [];\n\n    if (!Array.isArray(filters)) {\n      filters = [filters];\n    }\n\n    if (filters[0].value) {\n      digitalData.page.mainFilter = filters[0];\n    }\n\n    for (var i = 0; i < filters.length; i++) {\n      var isFound = false;\n\n      if (filters[i].value) {\n        for (var j = 0; j < newFilters.length; j++) {\n          if (newFilters[j].type == filters[i].type) {\n            isFound = true;\n            newFilters[j].values.push(filters[i].value);\n          }\n        }\n\n        if (!isFound) {\n          newFilters.push({\n            type: filters[i].type,\n            values: [filters[i].value]\n          });\n        }\n      }\n    }\n\n    digitalData.page.filters = newFilters;\n    digitalData.page.filterList = "";\n\n    for (var i = 0; i < newFilters.length; i++) {\n      digitalData.page.filterList += (digitalData.page.filterList ? "|" : "") + newFilters[i].type + "=" + newFilters[i].values.join(":");\n    }\n  },\n  populateSubscriptionType: function populateSubscriptionType() {\n    if (!window.digitalData) {\n      window.digitalData = {};\n    }\n\n    if (!window.digitalData.groupM) {\n      window.digitalData.groupM = {};\n    }\n\n    if (window.digitalData.user && window.digitalData.user.authStatus !== "anonymous") {\n      var subscriptionPackageTest = new RegExp(/\\bcravep\\b/);\n\n      if (subscriptionPackageTest.test(window.digitalData.user.subscriptionType)) {\n        window.digitalData.groupM.subscriptionType = "plus";\n      } else {\n        window.digitalData.groupM.subscriptionType = "basic";\n      }\n    }\n  },\n  setShelfCookie: function setShelfCookie(dataObject, time) {\n    if (!window.s || !window.s.Util || !window.s.Util.cookieWrite || _typeof(dataObject) !== "object") {\n      return false;\n    }\n\n    if (!time) {\n      time = new Date();\n    }\n\n    var value = JSON.stringify(dataObject);\n    var expiry = new Date(time.getTime() + 180000);\n    window.s.Util.cookieWrite("shelfClick", value, expiry);\n    return dataObject;\n  },\n  readShelfCookie: function readShelfCookie(key, cookieValue) {\n    if (!window.s || !window.s.Util || !window.s.Util.cookieRead) {\n      return false;\n    }\n\n    if (!cookieValue) {\n      cookieValue = window.s.Util.cookieRead("shelfClick");\n    }\n\n    if (cookieValue) {\n      var cookieObject = JSON.parse(cookieValue);\n      return cookieObject.show[key];\n    }\n\n    return false;\n  },\n  setupNavTracking: function setupNavTracking() {\n    try {\n      var logo = document.getElementById("site-logo");\n\n      if (logo) {\n        logo.addEventListener("click", function () {\n          s.Util.cookieWrite("c72", "top:logo");\n        });\n      }\n\n      var login = document.querySelector("div.user-login a");\n\n      if (login) {\n        login.addEventListener("click", function () {\n          s.Util.cookieWrite("c72", "top:login");\n        });\n      }\n\n      var secondary = document.getElementById("secondary-nav");\n\n      if (secondary) {\n        secondary.addEventListener("click", "a", function () {\n          s.Util.cookieWrite("c72", "secondary:" + this.innerText.trim().toLowerCase());\n        });\n      }\n\n      var footerLinks = document.querySelectorAll("footer a.as-link");\n\n      if (footerLinks.length > 0) {\n        for (var i = 0; i < footerLinks.length; i++) {\n          footerLinks[i].addEventListener("click", function () {\n            s.Util.cookieWrite("c72", "footer:" + this.innerText.trim().toLowerCase());\n          });\n        }\n      }\n\n      var menus = document.querySelectorAll("#nav>li");\n\n      if (menus) {\n        for (var i = 0; i < menus.length; i++) {\n          var menu = menus[i].querySelector("a.nav__link"),\n              menuName = "";\n\n          if (menu) {\n            menuName = (menu.innerText || "").trim().toLowerCase();\n          }\n\n          if (menuName) {\n            menus[i].querySelector("a.nav__link").addEventListener("click", function () {\n              s.Util.cookieWrite("c72", "top:" + menuName);\n            });\n            var submenus = menus[i].querySelectorAll("div.section");\n\n            if (submenus.length > 0) {\n              for (var j = 0; j < submenus.length; j++) {\n                var submenu = submenus[j].querySelector(".grid__title"),\n                    submenuName = "";\n\n                if (submenu) {\n                  submenuName = (submenus[j].querySelector(".grid__title").innerText || "").trim().toLowerCase();\n                  var links = submenus[j].querySelectorAll("a");\n\n                  if (links.length > 0) {\n                    for (var k = 0; k < links.length; k++) {\n                      links[k].setAttribute("data-nav-prefix", menuName + ":" + (submenuName ? submenuName + ":" : ""));\n                      links[k].addEventListener("click", function () {\n                        var linkName = this.innerText ? this.innerText.trim() : this.querySelector("img").getAttribute("alt");\n                        s.Util.cookieWrite("c72", "top:" + this.getAttribute("data-nav-prefix") + linkName.toLowerCase());\n                      });\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    } catch (ex) {}\n  }\n};\n\n_dataManager.bindEventHandlers();',
							language: 'javascript'
						}
					}
				]
			},
			{
				id: 'RL254b875408cb4d1e8417089271900130',
				name: 'GroupM Marketing Tags - All Pages',
				events: [
					{
						modulePath: 'core/src/lib/events/libraryLoaded.js',
						settings: {},
						ruleOrder: 51.0
					}
				],
				conditions: [
					{
						modulePath: 'core/src/lib/conditions/path.js',
						settings: {
							paths: [
								{
									value: '^((\\/)?vidi\\-chromecast).*$',
									valueIsRegex: true
								},
								{
									value: '^((\\/)?login(?![a-z])).*$',
									valueIsRegex: true
								}
							]
						},
						negate: true
					}
				],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source:
								'<!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the <head> and </head> tags on every page of your site.\n-->\n<!-- Global site tag (gtag.js) - Google Marketing Platform -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=DC-6169686"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n\n    function gtag() {\n        dataLayer.push(arguments);\n    }\n    gtag("js", new Date());\n\n    gtag("config", "DC-6169686");\n    gtag("config", "AW-948316229");\n</script>\n<!-- End of global snippet: Please do not remove -->\n\n<!-- Facebook Pixel Code -->\n<script>\n    ! function(f, b, e, v, n, t, s) {\n        if (f.fbq) return;\n        n = f.fbq = function() {\n            n.callMethod ?\n                n.callMethod.apply(n, arguments) : n.queue.push(arguments)\n        };\n        if (!f._fbq) f._fbq = n;\n        n.push = n;\n        n.loaded = !0;\n        n.version = "2.0";\n        n.queue = [];\n        t = b.createElement(e);\n        t.async = !0;\n        t.src = v;\n        s = b.getElementsByTagName(e)[0];\n        s.parentNode.insertBefore(t, s)\n    }(window,\n        document, "script", "//connect.facebook.net/en_US/fbevents.js");\n\n    fbq("init", "185969465077460");\n    fbq("track", "PageView");\n</script>\n<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=185969465077460&ev=PageView&noscript=1" /></noscript>\n<!-- End Facebook Pixel Code -->\n\n<script src="//platform.twitter.com/oct.js" type="text/javascript"></script>\n<script type="text/javascript">\n    twttr.conversion.trackPid("nu6e9", {\n        tw_sale_amount: 0,\n        tw_order_quantity: 0\n    });\n</script>\n<noscript>\n    <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=nu6e9&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />\n    <img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=nu6e9&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />\n</noscript>\n<!-- Twitter universal website tag code -->\n<script>\n    ! function(e, t, n, s, u, a) {\n        e.twq || (s = e.twq = function() {\n                s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);\n            }, s.version = \'1.1\', s.queue = [], u = t.createElement(n), u.async = !0, u.src = \'//static.ads-twitter.com/uwt.js\',\n            a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))\n    }(window, document, \'script\');\n    // Insert Twitter Pixel ID and Standard Event data below\n    twq(\'init\', \'o2noe\');\n    twq(\'track\', \'PageView\');\n</script>\n<!-- End Twitter universal website tag code -->',
							language: 'html'
						}
					}
				]
			},
			{
				id: 'RLd9a615fa9ae74a9797f746def52c728f',
				name: 'Direct Call - pageEvent',
				events: [
					{
						modulePath: 'core/src/lib/events/directCall.js',
						settings: {
							identifier: 'pageEvent'
						},
						ruleOrder: 50.0
					}
				],
				conditions: [],
				actions: [
					{
						modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
						settings: {}
					},
					{
						modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
						settings: {
							trackerProperties: {
								eVars: [
									{
										name: 'eVar2',
										type: 'value',
										value: '%Gift_Promo_Code%'
									},
									{
										name: 'eVar11',
										type: 'value',
										value: '%User_ID%'
									},
									{
										name: 'eVar12',
										type: 'value',
										value: '%User_Status%'
									},
									{
										name: 'eVar13',
										type: 'value',
										value: '%User_Auth_Location%'
									},
									{
										name: 'eVar14',
										type: 'value',
										value: '%User_BDU%'
									},
									{
										name: 'eVar15',
										type: 'value',
										value: '%User_Subscription_Partners%'
									},
									{
										name: 'eVar21',
										type: 'value',
										value: '%Show_Name%'
									},
									{
										name: 'eVar55',
										type: 'value',
										value: '%User_Auth_Location%'
									},
									{
										name: 'eVar56',
										type: 'value',
										value: '%User_Auth_Error_Type%'
									},
									{
										name: 'eVar79',
										type: 'value',
										value: '%User_Profile_Type%'
									},
									{
										name: 'eVar80',
										type: 'value',
										value: '%User_Subscription_Type%'
									},
									{
										name: 'eVar31',
										type: 'value',
										value: '%Page_Collection_ID%'
									}
								],
								props: [
									{
										name: 'prop11',
										type: 'value',
										value: '%User_ID%'
									},
									{
										name: 'prop12',
										type: 'value',
										value: '%User_Status%'
									},
									{
										name: 'prop21',
										type: 'value',
										value: '%Show_Name%'
									}
								]
							}
						}
					},
					{
						modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
						settings: {
							type: 'link',
							linkName: '%Event_Name%',
							linkType: 'o'
						}
					},
					{
						modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
						settings: {}
					}
				]
			},
			{
				id: 'RLec23077c598241068efc03b450623b29',
				name: 'Amazon Click Subscribe Pixels',
				events: [
					{
						modulePath: 'core/src/lib/events/windowLoaded.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [
					{
						modulePath: 'core/src/lib/conditions/path.js',
						settings: {
							paths: [
								{
									value: '\\/subscribe(\\/)?$',
									valueIsRegex: true
								}
							]
						}
					}
				],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							global: true,
							source: '/653e7ca2fc48/16d20b3f6bc7/28200064b0a4/RC289c3205956542c89342b5bf0f5cc70e-source.js',
							language: 'javascript',
							isExternal: true
						}
					}
				]
			},
			{
				id: 'RL158b330dbe994b2f8c07779860d78eb2',
				name: 'Reddit Tracking Pixel',
				events: [
					{
						modulePath: 'core/src/lib/events/libraryLoaded.js',
						settings: {},
						ruleOrder: 50.0
					}
				],
				conditions: [
					{
						modulePath: 'core/src/lib/conditions/path.js',
						settings: {
							paths: [
								{
									value: '\\/subscribe(\\/)?$',
									valueIsRegex: true
								}
							]
						}
					}
				],
				actions: [
					{
						modulePath: 'core/src/lib/actions/customCode.js',
						settings: {
							source:
								"<!-- Reddit Conversion Pixel -->\n\n<script>\n\n!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement(\"script\");t.src=\"https://www.redditstatic.com/ads/pixel.js\",t.async=!0;var s=d.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_39sau17c');rdt('track', 'PageVisit');\n\n</script>\n\n<!-- DO NOT MODIFY -->\n\n<!-- End Reddit Conversion Pixel -->",
							language: 'html'
						}
					}
				]
			}
		]
	};
})();

var _satellite = (function() {
	'use strict';

	if (!window.atob) {
		console.warn('Adobe Launch is unsupported in IE 9 and below.');
		return;
	}

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Log levels.
	 * @readonly
	 * @enum {string}
	 * @private
	 */
	var levels = {
		LOG: 'log',
		INFO: 'info',
		DEBUG: 'debug',
		WARN: 'warn',
		ERROR: 'error'
	};

	/**
	 * Rocket unicode surrogate pair.
	 * @type {string}
	 */
	var ROCKET = '\uD83D\uDE80';

	/**
	 * The user's internet explorer version. If they're not running internet explorer, then it should
	 * be NaN.
	 * @type {Number}
	 */
	var ieVersion = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);

	/**
	 * Prefix to use on all messages. The rocket unicode doesn't work on IE 10.
	 * @type {string}
	 */
	var launchPrefix = ieVersion === 10 ? '[Launch]' : ROCKET;

	/**
	 * Whether logged messages should be output to the console.
	 * @type {boolean}
	 */
	var outputEnabled = false;

	/**
	 * Processes a log message.
	 * @param {string} level The level of message to log.
	 * @param {...*} arg Any argument to be logged.
	 * @private
	 */
	var process = function(level) {
		if (outputEnabled && window.console) {
			var logArguments = Array.prototype.slice.call(arguments, 1);
			logArguments.unshift(launchPrefix);
			// window.debug is unsupported in IE 10
			if (level === levels.DEBUG && !window.console[level]) {
				level = levels.INFO;
			}
			window.console[level].apply(window.console, logArguments);
		}
	};

	/**
	 * Outputs a message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var log = process.bind(null, levels.LOG);

	/**
	 * Outputs informational message to the web console. In some browsers a small "i" icon is
	 * displayed next to these items in the web console's log.
	 * @param {...*} arg Any argument to be logged.
	 */
	var info = process.bind(null, levels.INFO);

	/**
	 * Outputs debug message to the web console. In browsers that do not support
	 * console.debug, console.info is used instead.
	 * @param {...*} arg Any argument to be logged.
	 */
	var debug = process.bind(null, levels.DEBUG);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var warn = process.bind(null, levels.WARN);

	/**
	 * Outputs an error message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var error = process.bind(null, levels.ERROR);

	var logger = {
		log: log,
		info: info,
		debug: debug,
		warn: warn,
		error: error,
		/**
		 * Whether logged messages should be output to the console.
		 * @type {boolean}
		 */
		get outputEnabled() {
			return outputEnabled;
		},
		set outputEnabled(value) {
			outputEnabled = value;
		},
		/**
		 * Creates a logging utility that only exposes logging functionality and prefixes all messages
		 * with an identifier.
		 */
		createPrefixedLogger: function(identifier) {
			var loggerSpecificPrefix = '[' + identifier + ']';

			return {
				log: log.bind(null, loggerSpecificPrefix),
				info: info.bind(null, loggerSpecificPrefix),
				debug: debug.bind(null, loggerSpecificPrefix),
				warn: warn.bind(null, loggerSpecificPrefix),
				error: error.bind(null, loggerSpecificPrefix)
			};
		}
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Replacing any variable tokens (%myDataElement%, %this.foo%, etc.) with their associated values.
	 * A new string, object, or array will be created; the thing being processed will never be
	 * modified.
	 * @param {*} thing Thing potentially containing variable tokens. Objects and arrays will be
	 * deeply processed.
	 * @param {HTMLElement} [element] Associated HTML element. Used for special tokens
	 * (%this.something%).
	 * @param {Object} [event] Associated event. Used for special tokens (%event.something%,
	 * %target.something%)
	 * @returns {*} A processed value.
	 */
	var createReplaceTokens = function(isVar, getVar, undefinedVarsReturnEmpty) {
		var replaceTokensInString;
		var replaceTokensInObject;
		var replaceTokensInArray;
		var replaceTokens;
		var variablesBeingRetrieved = [];

		var getVarValue = function(token, variableName, syntheticEvent) {
			if (!isVar(variableName)) {
				return token;
			}

			variablesBeingRetrieved.push(variableName);
			var val = getVar(variableName, syntheticEvent);
			variablesBeingRetrieved.pop();
			return val == null && undefinedVarsReturnEmpty ? '' : val;
		};

		/**
		 * Perform variable substitutions to a string where tokens are specified in the form %foo%.
		 * If the only content of the string is a single data element token, then the raw data element
		 * value will be returned instead.
		 *
		 * @param str {string} The string potentially containing data element tokens.
		 * @param element {HTMLElement} The element to use for tokens in the form of %this.property%.
		 * @param event {Object} The event object to use for tokens in the form of %target.property%.
		 * @returns {*}
		 */
		replaceTokensInString = function(str, syntheticEvent) {
			// Is the string a single data element token and nothing else?
			var result = /^%([^%]+)%$/.exec(str);

			if (result) {
				return getVarValue(str, result[1], syntheticEvent);
			} else {
				return str.replace(/%(.+?)%/g, function(token, variableName) {
					return getVarValue(token, variableName, syntheticEvent);
				});
			}
		};

		replaceTokensInObject = function(obj, syntheticEvent) {
			var ret = {};
			var keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				var value = obj[key];
				ret[key] = replaceTokens(value, syntheticEvent);
			}
			return ret;
		};

		replaceTokensInArray = function(arr, syntheticEvent) {
			var ret = [];
			for (var i = 0, len = arr.length; i < len; i++) {
				ret.push(replaceTokens(arr[i], syntheticEvent));
			}
			return ret;
		};

		replaceTokens = function(thing, syntheticEvent) {
			if (typeof thing === 'string') {
				return replaceTokensInString(thing, syntheticEvent);
			} else if (Array.isArray(thing)) {
				return replaceTokensInArray(thing, syntheticEvent);
			} else if (typeof thing === 'object' && thing !== null) {
				return replaceTokensInObject(thing, syntheticEvent);
			}

			return thing;
		};

		return function(thing, syntheticEvent) {
			// It's possible for a data element to reference another data element. Because of this,
			// we need to prevent circular dependencies from causing an infinite loop.
			if (variablesBeingRetrieved.length > 10) {
				logger.error('Data element circular reference detected: ' + variablesBeingRetrieved.join(' -> '));
				return thing;
			}

			return replaceTokens(thing, syntheticEvent);
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createSetCustomVar = function(customVars) {
		return function() {
			if (typeof arguments[0] === 'string') {
				customVars[arguments[0]] = arguments[1];
			} else if (arguments[0]) {
				// assume an object literal
				var mapping = arguments[0];
				for (var key in mapping) {
					customVars[key] = mapping[key];
				}
			}
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * "Cleans" text by trimming the string and removing spaces and newlines.
	 * @param {string} str The string to clean.
	 * @returns {string}
	 */
	var cleanText = function(str) {
		return typeof str === 'string' ? str.replace(/\s+/g, ' ').trim() : str;
	};

	function createCommonjsModule(fn, module) {
		return (module = { exports: {} }), fn(module, module.exports), module.exports;
	}

	var js_cookie = createCommonjsModule(function(module, exports) {
		/*!
		 * JavaScript Cookie v2.1.4
		 * https://github.com/js-cookie/js-cookie
		 *
		 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
		 * Released under the MIT license
		 */
		(function(factory) {
			var registeredInModuleLoader = false;
			if (typeof undefined === 'function' && undefined.amd) {
				undefined(factory);
				registeredInModuleLoader = true;
			}
			{
				module.exports = factory();
				registeredInModuleLoader = true;
			}
			if (!registeredInModuleLoader) {
				var OldCookies = window.Cookies;
				var api = (window.Cookies = factory());
				api.noConflict = function() {
					window.Cookies = OldCookies;
					return api;
				};
			}
		})(function() {
			function extend() {
				var i = 0;
				var result = {};
				for (; i < arguments.length; i++) {
					var attributes = arguments[i];
					for (var key in attributes) {
						result[key] = attributes[key];
					}
				}
				return result;
			}

			function init(converter) {
				function api(key, value, attributes) {
					var result;
					if (typeof document === 'undefined') {
						return;
					}

					// Write

					if (arguments.length > 1) {
						attributes = extend(
							{
								path: '/'
							},
							api.defaults,
							attributes
						);

						if (typeof attributes.expires === 'number') {
							var expires = new Date();
							expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
							attributes.expires = expires;
						}

						// We're using "expires" because "max-age" is not supported by IE
						attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

						try {
							result = JSON.stringify(value);
							if (/^[\{\[]/.test(result)) {
								value = result;
							}
						} catch (e) {}

						if (!converter.write) {
							value = encodeURIComponent(String(value)).replace(
								/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
								decodeURIComponent
							);
						} else {
							value = converter.write(value, key);
						}

						key = encodeURIComponent(String(key));
						key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
						key = key.replace(/[\(\)]/g, escape);

						var stringifiedAttributes = '';

						for (var attributeName in attributes) {
							if (!attributes[attributeName]) {
								continue;
							}
							stringifiedAttributes += '; ' + attributeName;
							if (attributes[attributeName] === true) {
								continue;
							}
							stringifiedAttributes += '=' + attributes[attributeName];
						}
						return (document.cookie = key + '=' + value + stringifiedAttributes);
					}

					// Read

					if (!key) {
						result = {};
					}

					// To prevent the for loop in the first place assign an empty array
					// in case there are no cookies at all. Also prevents odd result when
					// calling "get()"
					var cookies = document.cookie ? document.cookie.split('; ') : [];
					var rdecode = /(%[0-9A-Z]{2})+/g;
					var i = 0;

					for (; i < cookies.length; i++) {
						var parts = cookies[i].split('=');
						var cookie = parts.slice(1).join('=');

						if (cookie.charAt(0) === '"') {
							cookie = cookie.slice(1, -1);
						}

						try {
							var name = parts[0].replace(rdecode, decodeURIComponent);
							cookie = converter.read
								? converter.read(cookie, name)
								: converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

							if (this.json) {
								try {
									cookie = JSON.parse(cookie);
								} catch (e) {}
							}

							if (key === name) {
								result = cookie;
								break;
							}

							if (!key) {
								result[name] = cookie;
							}
						} catch (e) {}
					}

					return result;
				}

				api.set = api;
				api.get = function(key) {
					return api.call(api, key);
				};
				api.getJSON = function() {
					return api.apply(
						{
							json: true
						},
						[].slice.call(arguments)
					);
				};
				api.defaults = {};

				api.remove = function(key, attributes) {
					api(
						key,
						'',
						extend(attributes, {
							expires: -1
						})
					);
				};

				api.withConverter = init;

				return api;
			}

			return init(function() {});
		});
	});

	'use strict';

	// js-cookie has other methods that we haven't exposed here. By limiting the exposed API,
	// we have a little more flexibility to change the underlying implementation later. If clear
	// use cases come up for needing the other methods js-cookie exposes, we can re-evaluate whether
	// we want to expose them here.
	var reactorCookie = {
		get: js_cookie.get,
		set: js_cookie.set,
		remove: js_cookie.remove
	};

	'use strict';

	var reactorWindow = window;

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var NAMESPACE = 'com.adobe.reactor.';

	var getNamespacedStorage = function(storageType, additionalNamespace) {
		var finalNamespace = NAMESPACE + (additionalNamespace || '');

		// When storage is disabled on Safari, the mere act of referencing window.localStorage
		// or window.sessionStorage throws an error. For this reason, we wrap in a try-catch.
		return {
			/**
			 * Reads a value from storage.
			 * @param {string} name The name of the item to be read.
			 * @returns {string}
			 */
			getItem: function(name) {
				try {
					return reactorWindow[storageType].getItem(finalNamespace + name);
				} catch (e) {
					return null;
				}
			},
			/**
			 * Saves a value to storage.
			 * @param {string} name The name of the item to be saved.
			 * @param {string} value The value of the item to be saved.
			 * @returns {boolean} Whether the item was successfully saved to storage.
			 */
			setItem: function(name, value) {
				try {
					reactorWindow[storageType].setItem(finalNamespace + name, value);
					return true;
				} catch (e) {
					return false;
				}
			}
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var COOKIE_PREFIX = '_sdsat_';

	var DATA_ELEMENTS_NAMESPACE = 'dataElements.';
	var MIGRATED_KEY = 'dataElementCookiesMigrated';

	var reactorLocalStorage = getNamespacedStorage('localStorage');
	var dataElementSessionStorage = getNamespacedStorage('sessionStorage', DATA_ELEMENTS_NAMESPACE);
	var dataElementLocalStorage = getNamespacedStorage('localStorage', DATA_ELEMENTS_NAMESPACE);

	var storageDurations = {
		PAGEVIEW: 'pageview',
		SESSION: 'session',
		VISITOR: 'visitor'
	};

	var pageviewCache = {};

	var serialize = function(value) {
		var serialized;

		try {
			// On some browsers, with some objects, errors will be thrown during serialization. For example,
			// in Chrome with the window object, it will throw "TypeError: Converting circular structure
			// to JSON"
			serialized = JSON.stringify(value);
		} catch (e) {}

		return serialized;
	};

	var setValue = function(key, storageDuration, value) {
		var serializedValue;

		switch (storageDuration) {
			case storageDurations.PAGEVIEW:
				pageviewCache[key] = value;
				return;
			case storageDurations.SESSION:
				serializedValue = serialize(value);
				if (serializedValue) {
					dataElementSessionStorage.setItem(key, serializedValue);
				}
				return;
			case storageDurations.VISITOR:
				serializedValue = serialize(value);
				if (serializedValue) {
					dataElementLocalStorage.setItem(key, serializedValue);
				}
				return;
		}
	};

	var getValue = function(key, storageDuration) {
		var value;

		// It should consistently return the same value if no stored item was found. We chose null,
		// though undefined could be a reasonable value as well.
		switch (storageDuration) {
			case storageDurations.PAGEVIEW:
				return pageviewCache.hasOwnProperty(key) ? pageviewCache[key] : null;
			case storageDurations.SESSION:
				value = dataElementSessionStorage.getItem(key);
				return value === null ? value : JSON.parse(value);
			case storageDurations.VISITOR:
				value = dataElementLocalStorage.getItem(key);
				return value === null ? value : JSON.parse(value);
		}
	};

	// Remove when migration period has ended. We intentionally leave cookies as they are so that if
	// DTM is running on the same domain it can still use the persisted values. Our migration strategy
	// is essentially copying data from cookies and then diverging the storage mechanism between
	// DTM and Launch (DTM uses cookies and Launch uses session and local storage).
	var migrateDataElement = function(dataElementName, storageDuration) {
		var storedValue = reactorCookie.get(COOKIE_PREFIX + dataElementName);

		if (storedValue !== undefined) {
			setValue(dataElementName, storageDuration, storedValue);
		}
	};

	var migrateCookieData = function(dataElements) {
		if (!reactorLocalStorage.getItem(MIGRATED_KEY)) {
			Object.keys(dataElements).forEach(function(dataElementName) {
				migrateDataElement(dataElementName, dataElements[dataElementName].storageDuration);
			});

			reactorLocalStorage.setItem(MIGRATED_KEY, true);
		}
	};

	var dataElementSafe = {
		setValue: setValue,
		getValue: getValue,
		migrateCookieData: migrateCookieData
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var getErrorMessage = function(dataDef, dataElementName, errorMessage, errorStack) {
		return (
			'Failed to execute data element module ' +
			dataDef.modulePath +
			' for data element ' +
			dataElementName +
			'. ' +
			errorMessage +
			(errorStack ? '\n' + errorStack : '')
		);
	};

	var isDataElementValuePresent = function(value) {
		return value !== undefined && value !== null;
	};

	var createGetDataElementValue = function(
		moduleProvider,
		getDataElementDefinition,
		replaceTokens,
		undefinedVarsReturnEmpty
	) {
		return function(name, syntheticEvent) {
			var dataDef = getDataElementDefinition(name);

			if (!dataDef) {
				return undefinedVarsReturnEmpty ? '' : null;
			}

			var storageDuration = dataDef.storageDuration;
			var moduleExports;

			try {
				moduleExports = moduleProvider.getModuleExports(dataDef.modulePath);
			} catch (e) {
				logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
				return;
			}

			if (typeof moduleExports !== 'function') {
				logger.error(getErrorMessage(dataDef, name, 'Module did not export a function.'));
				return;
			}

			var value;

			try {
				value = moduleExports(replaceTokens(dataDef.settings, syntheticEvent), syntheticEvent);
			} catch (e) {
				logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
				return;
			}

			if (storageDuration) {
				if (isDataElementValuePresent(value)) {
					dataElementSafe.setValue(name, storageDuration, value);
				} else {
					value = dataElementSafe.getValue(name, storageDuration);
				}
			}

			if (!isDataElementValuePresent(value)) {
				value = dataDef.defaultValue || '';
			}

			if (typeof value === 'string') {
				if (dataDef.cleanText) {
					value = cleanText(value);
				}

				if (dataDef.forceLowerCase) {
					value = value.toLowerCase();
				}
			}

			return value;
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var extractModuleExports = function(script, require, turbine) {
		var module = {
			exports: {}
		};

		script.call(module.exports, module, module.exports, require, turbine);

		return module.exports;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createModuleProvider = function() {
		var moduleByReferencePath = {};

		var getModule = function(referencePath) {
			var module = moduleByReferencePath[referencePath];

			if (!module) {
				throw new Error('Module ' + referencePath + ' not found.');
			}

			return module;
		};

		var registerModule = function(referencePath, moduleDefinition, extensionName, require, turbine) {
			var module = {
				definition: moduleDefinition,
				extensionName: extensionName,
				require: require,
				turbine: turbine
			};
			module.require = require;
			moduleByReferencePath[referencePath] = module;
		};

		var hydrateCache = function() {
			Object.keys(moduleByReferencePath).forEach(function(referencePath) {
				try {
					getModuleExports(referencePath);
				} catch (e) {
					var errorMessage =
						'Error initializing module ' + referencePath + '. ' + e.message + (e.stack ? '\n' + e.stack : '');
					logger.error(errorMessage);
				}
			});
		};

		var getModuleExports = function(referencePath) {
			var module = getModule(referencePath);

			// Using hasOwnProperty instead of a falsey check because the module could export undefined
			// in which case we don't want to execute the module each time the exports is requested.
			if (!module.hasOwnProperty('exports')) {
				module.exports = extractModuleExports(module.definition.script, module.require, module.turbine);
			}

			return module.exports;
		};

		var getModuleDefinition = function(referencePath) {
			return getModule(referencePath).definition;
		};

		var getModuleExtensionName = function(referencePath) {
			return getModule(referencePath).extensionName;
		};

		return {
			registerModule: registerModule,
			hydrateCache: hydrateCache,
			getModuleExports: getModuleExports,
			getModuleDefinition: getModuleDefinition,
			getModuleExtensionName: getModuleExtensionName
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Determines if the provided name is a valid variable, where the variable
	 * can be a data element, element, event, target, or custom var.
	 * @param variableName
	 * @returns {boolean}
	 */
	var createIsVar = function(customVars, getDataElementDefinition) {
		return function(variableName) {
			var nameBeforeDot = variableName.split('.')[0];

			return Boolean(
				getDataElementDefinition(variableName) ||
					nameBeforeDot === 'this' ||
					nameBeforeDot === 'event' ||
					nameBeforeDot === 'target' ||
					customVars.hasOwnProperty(nameBeforeDot)
			);
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var specialPropertyAccessors = {
		text: function(obj) {
			return obj.textContent;
		},
		cleanText: function(obj) {
			return cleanText(obj.textContent);
		}
	};

	/**
	 * This returns the value of a property at a given path. For example, a <code>path<code> of
	 * <code>foo.bar</code> will return the value of <code>obj.foo.bar</code>.
	 *
	 * In addition, if <code>path</code> is <code>foo.bar.getAttribute(unicorn)</code> and
	 * <code>obj.foo.bar</code> has a method named <code>getAttribute</code>, the method will be
	 * called with a value of <code>"unicorn"</code> and the value will be returned.
	 *
	 * Also, if <code>path</code> is <code>foo.bar.@text</code> or other supported properties
	 * beginning with <code>@</code>, a special accessor will be used.
	 *
	 * @param host
	 * @param path
	 * @param supportSpecial
	 * @returns {*}
	 */
	var getObjectProperty = function(host, propChain, supportSpecial) {
		var value = host;
		var attrMatch;
		for (var i = 0, len = propChain.length; i < len; i++) {
			if (value == null) {
				return undefined;
			}
			var prop = propChain[i];
			if (supportSpecial && prop.charAt(0) === '@') {
				var specialProp = prop.slice(1);
				value = specialPropertyAccessors[specialProp](value);
				continue;
			}
			if (value.getAttribute && (attrMatch = prop.match(/^getAttribute\((.+)\)$/))) {
				var attr = attrMatch[1];
				value = value.getAttribute(attr);
				continue;
			}
			value = value[prop];
		}
		return value;
	};

	/**
	 * Returns the value of a variable.
	 * @param {string} variable
	 * @param {Object} [syntheticEvent] A synthetic event. Only required when using %event... %this...
	 * or %target...
	 * @returns {*}
	 */
	var createGetVar = function(customVars, getDataElementDefinition, getDataElementValue) {
		return function(variable, syntheticEvent) {
			var value;

			if (getDataElementDefinition(variable)) {
				// Accessing nested properties of a data element using dot-notation is unsupported because
				// users can currently create data elements with periods in the name.
				value = getDataElementValue(variable, syntheticEvent);
			} else {
				var propChain = variable.split('.');
				var variableHostName = propChain.shift();

				if (variableHostName === 'this') {
					if (syntheticEvent) {
						// I don't know why this is the only one that supports special properties, but that's the
						// way it was in Satellite.
						value = getObjectProperty(syntheticEvent.element, propChain, true);
					}
				} else if (variableHostName === 'event') {
					if (syntheticEvent) {
						value = getObjectProperty(syntheticEvent, propChain);
					}
				} else if (variableHostName === 'target') {
					if (syntheticEvent) {
						value = getObjectProperty(syntheticEvent.target, propChain);
					}
				} else {
					value = getObjectProperty(customVars[variableHostName], propChain);
				}
			}

			return value;
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Creates a function that, when called with an extension name and module name, will return the
	 * exports of the respective shared module.
	 *
	 * @param {Object} extensions
	 * @param {Object} moduleProvider
	 * @returns {Function}
	 */
	var createGetSharedModuleExports = function(extensions, moduleProvider) {
		return function(extensionName, moduleName) {
			var extension = extensions[extensionName];

			if (extension) {
				var modules = extension.modules;
				if (modules) {
					var referencePaths = Object.keys(modules);
					for (var i = 0; i < referencePaths.length; i++) {
						var referencePath = referencePaths[i];
						var module = modules[referencePath];
						if (module.shared && module.name === moduleName) {
							return moduleProvider.getModuleExports(referencePath);
						}
					}
				}
			}
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Creates a function that, when called, will return a configuration object with data element
	 * tokens replaced.
	 *
	 * @param {Object} settings
	 * @returns {Function}
	 */
	var createGetExtensionSettings = function(replaceTokens, settings) {
		return function() {
			return settings ? replaceTokens(settings) : {};
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Creates a function that, when called, will return the full hosted lib file URL.
	 *
	 * @param {string} hostedLibFilesBaseUrl
	 * @returns {Function}
	 */

	var createGetHostedLibFileUrl = function(hostedLibFilesBaseUrl, minified) {
		return function(file) {
			if (minified) {
				var fileParts = file.split('.');
				fileParts.splice(fileParts.length - 1 || 1, 0, 'min');
				file = fileParts.join('.');
			}

			return hostedLibFilesBaseUrl + file;
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var JS_EXTENSION = '.js';

	/**
	 * @private
	 * Returns the directory of a path. A limited version of path.dirname in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * path has a least one slash
	 * path does not end with a slash
	 * path does not have empty segments (e.g., /src/lib//foo.bar)
	 *
	 * @param {string} path
	 * @returns {string}
	 */
	var dirname = function(path) {
		return path.substr(0, path.lastIndexOf('/'));
	};

	/**
	 * Determines if a string ends with a certain string.
	 * @param {string} str The string to test.
	 * @param {string} suffix The suffix to look for at the end of str.
	 * @returns {boolean} Whether str ends in suffix.
	 */
	var endsWith = function(str, suffix) {
		return str.indexOf(suffix, str.length - suffix.length) !== -1;
	};

	/**
	 * Given a starting path and a path relative to the starting path, returns the final path. A
	 * limited version of path.resolve in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * fromPath has at least one slash
	 * fromPath does not end with a slash.
	 * fromPath does not have empty segments (e.g., /src/lib//foo.bar)
	 * relativePath starts with ./ or ../
	 *
	 * @param {string} fromPath
	 * @param {string} relativePath
	 * @returns {string}
	 */
	var resolveRelativePath = function(fromPath, relativePath) {
		// Handle the case where the relative path does not end in the .js extension. We auto-append it.
		if (!endsWith(relativePath, JS_EXTENSION)) {
			relativePath = relativePath + JS_EXTENSION;
		}

		var relativePathSegments = relativePath.split('/');
		var resolvedPathSegments = dirname(fromPath).split('/');

		relativePathSegments.forEach(function(relativePathSegment) {
			if (!relativePathSegment || relativePathSegment === '.') {
				return;
			} else if (relativePathSegment === '..') {
				if (resolvedPathSegments.length) {
					resolvedPathSegments.pop();
				}
			} else {
				resolvedPathSegments.push(relativePathSegment);
			}
		});

		return resolvedPathSegments.join('/');
	};

	'use strict';

	var reactorDocument = document;

	/**
	 * @this {Promise}
	 */
	function finallyConstructor(callback) {
		var constructor = this.constructor;
		return this.then(
			function(value) {
				// @ts-ignore
				return constructor.resolve(callback()).then(function() {
					return value;
				});
			},
			function(reason) {
				// @ts-ignore
				return constructor.resolve(callback()).then(function() {
					// @ts-ignore
					return constructor.reject(reason);
				});
			}
		);
	}

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = setTimeout;

	function isArray(x) {
		return Boolean(x && typeof x.length !== 'undefined');
	}

	function noop() {}

	// Polyfill for Function.prototype.bind
	function bind(fn, thisArg) {
		return function() {
			fn.apply(thisArg, arguments);
		};
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	function Promise(fn) {
		if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
		if (typeof fn !== 'function') throw new TypeError('not a function');
		/** @type {!number} */
		this._state = 0;
		/** @type {!boolean} */
		this._handled = false;
		/** @type {Promise|undefined} */
		this._value = undefined;
		/** @type {!Array<!Function>} */
		this._deferreds = [];

		doResolve(fn, this);
	}

	function handle(self, deferred) {
		while (self._state === 3) {
			self = self._value;
		}
		if (self._state === 0) {
			self._deferreds.push(deferred);
			return;
		}
		self._handled = true;
		Promise._immediateFn(function() {
			var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
			if (cb === null) {
				(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
				return;
			}
			var ret;
			try {
				ret = cb(self._value);
			} catch (e) {
				reject(deferred.promise, e);
				return;
			}
			resolve(deferred.promise, ret);
		});
	}

	function resolve(self, newValue) {
		try {
			// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
			if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
			if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
				var then = newValue.then;
				if (newValue instanceof Promise) {
					self._state = 3;
					self._value = newValue;
					finale(self);
					return;
				} else if (typeof then === 'function') {
					doResolve(bind(then, newValue), self);
					return;
				}
			}
			self._state = 1;
			self._value = newValue;
			finale(self);
		} catch (e) {
			reject(self, e);
		}
	}

	function reject(self, newValue) {
		self._state = 2;
		self._value = newValue;
		finale(self);
	}

	function finale(self) {
		if (self._state === 2 && self._deferreds.length === 0) {
			Promise._immediateFn(function() {
				if (!self._handled) {
					Promise._unhandledRejectionFn(self._value);
				}
			});
		}

		for (var i = 0, len = self._deferreds.length; i < len; i++) {
			handle(self, self._deferreds[i]);
		}
		self._deferreds = null;
	}

	/**
	 * @constructor
	 */
	function Handler(onFulfilled, onRejected, promise) {
		this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
		this.onRejected = typeof onRejected === 'function' ? onRejected : null;
		this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, self) {
		var done = false;
		try {
			fn(
				function(value) {
					if (done) return;
					done = true;
					resolve(self, value);
				},
				function(reason) {
					if (done) return;
					done = true;
					reject(self, reason);
				}
			);
		} catch (ex) {
			if (done) return;
			done = true;
			reject(self, ex);
		}
	}

	Promise.prototype['catch'] = function(onRejected) {
		return this.then(null, onRejected);
	};

	Promise.prototype.then = function(onFulfilled, onRejected) {
		// @ts-ignore
		var prom = new this.constructor(noop);

		handle(this, new Handler(onFulfilled, onRejected, prom));
		return prom;
	};

	Promise.prototype['finally'] = finallyConstructor;

	Promise.all = function(arr) {
		return new Promise(function(resolve, reject) {
			if (!isArray(arr)) {
				return reject(new TypeError('Promise.all accepts an array'));
			}

			var args = Array.prototype.slice.call(arr);
			if (args.length === 0) return resolve([]);
			var remaining = args.length;

			function res(i, val) {
				try {
					if (val && (typeof val === 'object' || typeof val === 'function')) {
						var then = val.then;
						if (typeof then === 'function') {
							then.call(
								val,
								function(val) {
									res(i, val);
								},
								reject
							);
							return;
						}
					}
					args[i] = val;
					if (--remaining === 0) {
						resolve(args);
					}
				} catch (ex) {
					reject(ex);
				}
			}

			for (var i = 0; i < args.length; i++) {
				res(i, args[i]);
			}
		});
	};

	Promise.resolve = function(value) {
		if (value && typeof value === 'object' && value.constructor === Promise) {
			return value;
		}

		return new Promise(function(resolve) {
			resolve(value);
		});
	};

	Promise.reject = function(value) {
		return new Promise(function(resolve, reject) {
			reject(value);
		});
	};

	Promise.race = function(arr) {
		return new Promise(function(resolve, reject) {
			if (!isArray(arr)) {
				return reject(new TypeError('Promise.race accepts an array'));
			}

			for (var i = 0, len = arr.length; i < len; i++) {
				Promise.resolve(arr[i]).then(resolve, reject);
			}
		});
	};

	// Use polyfill for setImmediate for performance gains
	Promise._immediateFn =
		// @ts-ignore
		(typeof setImmediate === 'function' &&
			function(fn) {
				// @ts-ignore
				setImmediate(fn);
			}) ||
		function(fn) {
			setTimeoutFunc(fn, 0);
		};

	Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
		if (typeof console !== 'undefined' && console) {
			console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
		}
	};

	var src$2 = Object.freeze({
		default: Promise
	});

	var require$$0 = (src$2 && Promise) || src$2;

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	'use strict';

	// For building Turbine we are using Rollup. For running the turbine tests we are using
	// Karma + Webpack. You need to specify the default import when using promise-polyfill`
	// with Webpack 2+. We need `require('promise-polyfill').default` for running the tests
	// and `require('promise-polyfill')` for building Turbine.
	var reactorPromise = window.Promise || require$$0.default || require$$0;

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	'use strict';

	var getPromise = function(url, script) {
		return new reactorPromise(function(resolve, reject) {
			script.onload = function() {
				resolve(script);
			};

			script.onerror = function() {
				reject(new Error('Failed to load script ' + url));
			};
		});
	};

	var reactorLoadScript = function(url) {
		var script = document.createElement('script');
		script.src = url;
		script.async = true;

		var promise = getPromise(url, script);

		document.getElementsByTagName('head')[0].appendChild(script);
		return promise;
	};

	/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative()
		? Object.assign
		: function(target, source) {
				var from;
				var to = toObject(target);
				var symbols;

				for (var s = 1; s < arguments.length; s++) {
					from = Object(arguments[s]);

					for (var key in from) {
						if (hasOwnProperty.call(from, key)) {
							to[key] = from[key];
						}
					}

					if (getOwnPropertySymbols) {
						symbols = getOwnPropertySymbols(from);
						for (var i = 0; i < symbols.length; i++) {
							if (propIsEnumerable.call(from, symbols[i])) {
								to[symbols[i]] = from[symbols[i]];
							}
						}
					}
				}

				return to;
		  };

	'use strict';

	var reactorObjectAssign = objectAssign;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty$1(obj, prop) {
		return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var decode = function(qs, sep, eq, options) {
		sep = sep || '&';
		eq = eq || '=';
		var obj = {};

		if (typeof qs !== 'string' || qs.length === 0) {
			return obj;
		}

		var regexp = /\+/g;
		qs = qs.split(sep);

		var maxKeys = 1000;
		if (options && typeof options.maxKeys === 'number') {
			maxKeys = options.maxKeys;
		}

		var len = qs.length;
		// maxKeys <= 0 means that we should not limit keys count
		if (maxKeys > 0 && len > maxKeys) {
			len = maxKeys;
		}

		for (var i = 0; i < len; ++i) {
			var x = qs[i].replace(regexp, '%20'),
				idx = x.indexOf(eq),
				kstr,
				vstr,
				k,
				v;

			if (idx >= 0) {
				kstr = x.substr(0, idx);
				vstr = x.substr(idx + 1);
			} else {
				kstr = x;
				vstr = '';
			}

			k = decodeURIComponent(kstr);
			v = decodeURIComponent(vstr);

			if (!hasOwnProperty$1(obj, k)) {
				obj[k] = v;
			} else if (Array.isArray(obj[k])) {
				obj[k].push(v);
			} else {
				obj[k] = [obj[k], v];
			}
		}

		return obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
		switch (typeof v) {
			case 'string':
				return v;

			case 'boolean':
				return v ? 'true' : 'false';

			case 'number':
				return isFinite(v) ? v : '';

			default:
				return '';
		}
	};

	var encode = function(obj, sep, eq, name) {
		sep = sep || '&';
		eq = eq || '=';
		if (obj === null) {
			obj = undefined;
		}

		if (typeof obj === 'object') {
			return Object.keys(obj)
				.map(function(k) {
					var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
					if (Array.isArray(obj[k])) {
						return obj[k]
							.map(function(v) {
								return ks + encodeURIComponent(stringifyPrimitive(v));
							})
							.join(sep);
					} else {
						return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
					}
				})
				.join(sep);
		}

		if (!name) return '';
		return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};

	var querystring = createCommonjsModule(function(module, exports) {
		'use strict';

		exports.decode = exports.parse = decode;
		exports.encode = exports.stringify = encode;
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	'use strict';

	// We proxy the underlying querystring module so we can limit the API we expose.
	// This allows us to more easily make changes to the underlying implementation later without
	// having to worry about breaking extensions. If extensions demand additional functionality, we
	// can make adjustments as needed.
	var reactorQueryString = {
		parse: function(string) {
			//
			if (typeof string === 'string') {
				// Remove leading ?, #, & for some leniency so you can pass in location.search or
				// location.hash directly.
				string = string.trim().replace(/^[?#&]/, '');
			}
			return querystring.parse(string);
		},
		stringify: function(object) {
			return querystring.stringify(object);
		}
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var CORE_MODULE_PREFIX = '@adobe/reactor-';

	var modules = {
		cookie: reactorCookie,
		document: reactorDocument,
		'load-script': reactorLoadScript,
		'object-assign': reactorObjectAssign,
		promise: reactorPromise,
		'query-string': reactorQueryString,
		window: reactorWindow
	};

	/**
	 * Creates a function which can be passed as a "require" function to extension modules.
	 *
	 * @param {Function} getModuleExportsByRelativePath
	 * @returns {Function}
	 */
	var createPublicRequire = function(getModuleExportsByRelativePath) {
		return function(key) {
			if (key.indexOf(CORE_MODULE_PREFIX) === 0) {
				var keyWithoutScope = key.substr(CORE_MODULE_PREFIX.length);
				var module = modules[keyWithoutScope];

				if (module) {
					return module;
				}
			}

			if (key.indexOf('./') === 0 || key.indexOf('../') === 0) {
				return getModuleExportsByRelativePath(key);
			}

			throw new Error('Cannot resolve module "' + key + '".');
		};
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateModuleProvider = function(container, moduleProvider, replaceTokens, getDataElementValue) {
		var extensions = container.extensions;
		var buildInfo = container.buildInfo;
		var propertySettings = container.property.settings;

		if (extensions) {
			var getSharedModuleExports = createGetSharedModuleExports(extensions, moduleProvider);

			Object.keys(extensions).forEach(function(extensionName) {
				var extension = extensions[extensionName];
				var getExtensionSettings = createGetExtensionSettings(replaceTokens, extension.settings);

				if (extension.modules) {
					var prefixedLogger = logger.createPrefixedLogger(extension.displayName);
					var getHostedLibFileUrl = createGetHostedLibFileUrl(extension.hostedLibFilesBaseUrl, buildInfo.minified);
					var turbine = {
						buildInfo: buildInfo,
						getDataElementValue: getDataElementValue,
						getExtensionSettings: getExtensionSettings,
						getHostedLibFileUrl: getHostedLibFileUrl,
						getSharedModule: getSharedModuleExports,
						logger: prefixedLogger,
						propertySettings: propertySettings,
						replaceTokens: replaceTokens
					};

					Object.keys(extension.modules).forEach(function(referencePath) {
						var module = extension.modules[referencePath];
						var getModuleExportsByRelativePath = function(relativePath) {
							var resolvedReferencePath = resolveRelativePath(referencePath, relativePath);
							return moduleProvider.getModuleExports(resolvedReferencePath);
						};
						var publicRequire = createPublicRequire(getModuleExportsByRelativePath);

						moduleProvider.registerModule(referencePath, module, extensionName, publicRequire, turbine);
					});
				}
			});

			// We want to extract the module exports immediately to allow the modules
			// to run some logic immediately.
			// We need to do the extraction here in order for the moduleProvider to
			// have all the modules previously registered. (eg. when moduleA needs moduleB, both modules
			// must exist inside moduleProvider).
			moduleProvider.hydrateCache();
		}
		return moduleProvider;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateSatelliteObject = function(_satellite, container, setDebugOutputEnabled, getVar, setCustomVar) {
		var customScriptPrefixedLogger = logger.createPrefixedLogger('Custom Script');

		// Will get replaced by the directCall event delegate from the Core extension. Exists here in
		// case there are no direct call rules (and therefore the directCall event delegate won't get
		// included) and our customers are still calling the method. In this case, we don't want an error
		// to be thrown. This method existed before Reactor.
		_satellite.track = function(identifier) {
			logger.log('"' + identifier + '" does not match any direct call identifiers.');
		};

		// Will get replaced by the Marketing Cloud ID extension if installed. Exists here in case
		// the extension is not installed and our customers are still calling the method. In this case,
		// we don't want an error to be thrown. This method existed before Reactor.
		_satellite.getVisitorId = function() {
			return null;
		};

		// container.property also has property settings, but it shouldn't concern the user.
		// By limiting our API exposure to necessities, we provide more flexibility in the future.
		_satellite.property = {
			name: container.property.name
		};

		_satellite.company = container.company;

		_satellite.buildInfo = container.buildInfo;

		_satellite.logger = customScriptPrefixedLogger;

		/**
		 * Log a message. We keep this due to legacy baggage.
		 * @param {string} message The message to log.
		 * @param {number} [level] A number that represents the level of logging.
		 * 3=info, 4=warn, 5=error, anything else=log
		 */
		_satellite.notify = function(message, level) {
			logger.warn('_satellite.notify is deprecated. Please use the `_satellite.logger` API.');

			switch (level) {
				case 3:
					customScriptPrefixedLogger.info(message);
					break;
				case 4:
					customScriptPrefixedLogger.warn(message);
					break;
				case 5:
					customScriptPrefixedLogger.error(message);
					break;
				default:
					customScriptPrefixedLogger.log(message);
			}
		};

		_satellite.getVar = getVar;
		_satellite.setVar = setCustomVar;

		/**
		 * Writes a cookie.
		 * @param {string} name The name of the cookie to save.
		 * @param {string} value The value of the cookie to save.
		 * @param {number} [days] The number of days to store the cookie. If not specified, the cookie
		 * will be stored for the session only.
		 */
		_satellite.setCookie = function(name, value, days) {
			var optionsStr = '';
			var options = {};

			if (days) {
				optionsStr = ', { expires: ' + days + ' }';
				options.expires = days;
			}

			var msg =
				'_satellite.setCookie is deprecated. Please use ' +
				'_satellite.cookie.set("' +
				name +
				'", "' +
				value +
				'"' +
				optionsStr +
				').';

			logger.warn(msg);
			reactorCookie.set(name, value, options);
		};

		/**
		 * Reads a cookie value.
		 * @param {string} name The name of the cookie to read.
		 * @returns {string}
		 */
		_satellite.readCookie = function(name) {
			logger.warn('_satellite.readCookie is deprecated. ' + 'Please use _satellite.cookie.get("' + name + '").');
			return reactorCookie.get(name);
		};

		/**
		 * Removes a cookie value.
		 * @param name
		 */
		_satellite.removeCookie = function(name) {
			logger.warn('_satellite.removeCookie is deprecated. ' + 'Please use _satellite.cookie.remove("' + name + '").');
			reactorCookie.remove(name);
		};

		_satellite.cookie = reactorCookie;

		// Will get replaced by the pageBottom event delegate from the Core extension. Exists here in
		// case the customers are not using core (and therefore the pageBottom event delegate won't get
		// included) and they are still calling the method. In this case, we don't want an error
		// to be thrown. This method existed before Reactor.
		_satellite.pageBottom = function() {};

		_satellite.setDebug = setDebugOutputEnabled;

		var warningLogged = false;

		Object.defineProperty(_satellite, '_container', {
			get: function() {
				if (!warningLogged) {
					logger.warn('_satellite._container may change at any time and should only ' + 'be used for debugging.');
					warningLogged = true;
				}

				return container;
			}
		});
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Normalizes a synthetic event so that it exists and has at least meta.
	 * @param {Object} syntheticEventMeta
	 * @param {Object} [syntheticEvent]
	 * @returns {Object}
	 */
	var normalizeSyntheticEvent = function(syntheticEventMeta, syntheticEvent) {
		syntheticEvent = syntheticEvent || {};
		reactorObjectAssign(syntheticEvent, syntheticEventMeta);

		// Remove after some arbitrary time period when we think users have had sufficient chance
		// to move away from event.type
		if (!syntheticEvent.hasOwnProperty('type')) {
			Object.defineProperty(syntheticEvent, 'type', {
				get: function() {
					logger.warn(
						'Accessing event.type in Adobe Launch has been deprecated and will be ' +
							'removed soon. Please use event.$type instead.'
					);
					return syntheticEvent.$type;
				}
			});
		}

		return syntheticEvent;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Rules can be ordered by users at the event type level. For example, assume both Rule A and Rule B
	 * use the Library Loaded and Window Loaded event types. Rule A can be ordered to come before Rule B
	 * on Library Loaded but after Rule B on Window Loaded.
	 *
	 * Order values are integers and act more as a priority. In other words, multiple rules can have the
	 * same order value. If they have the same order value, their order of execution should be
	 * considered nondetermistic.
	 *
	 * @param {Array} rules
	 * @returns {Array} An ordered array of rule-event pair objects.
	 */
	var buildRuleExecutionOrder = function(rules) {
		var ruleEventPairs = [];

		rules.forEach(function(rule) {
			if (rule.events) {
				rule.events.forEach(function(event) {
					ruleEventPairs.push({
						rule: rule,
						event: event
					});
				});
			}
		});

		return ruleEventPairs.sort(function(ruleEventPairA, ruleEventPairB) {
			return ruleEventPairA.event.ruleOrder - ruleEventPairB.event.ruleOrder;
		});
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var warningLogged = false;

	var createNotifyMonitors = function(_satellite) {
		return function(type, event) {
			var monitors = _satellite._monitors;

			if (monitors) {
				if (!warningLogged) {
					logger.warn(
						'The _satellite._monitors API may change at any time and should only ' + 'be used for debugging.'
					);
					warningLogged = true;
				}

				monitors.forEach(function(monitor) {
					if (monitor[type]) {
						monitor[type](event);
					}
				});
			}
		};
	};

	/***************************************************************************************
	 * (c) 2018 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var MODULE_NOT_FUNCTION_ERROR = 'Module did not export a function.';

	var createExecuteDelegateModule = function(moduleProvider, replaceTokens) {
		return function(moduleDescriptor, syntheticEvent, moduleCallParameters) {
			moduleCallParameters = moduleCallParameters || [];
			var moduleExports = moduleProvider.getModuleExports(moduleDescriptor.modulePath);

			if (typeof moduleExports !== 'function') {
				throw new Error(MODULE_NOT_FUNCTION_ERROR);
			}

			var settings = replaceTokens(moduleDescriptor.settings || {}, syntheticEvent);
			return moduleExports.bind(null, settings).apply(null, moduleCallParameters);
		};
	};

	/***************************************************************************************
	 * (c) 2018 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var localStorage$1 = getNamespacedStorage('localStorage');
	var sessionStorage = getNamespacedStorage('sessionStorage');

	var isRuleQueueActive = function() {
		return Boolean(localStorage$1.getItem('queue') || sessionStorage.getItem('queue'));
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var PROMISE_TIMEOUT = 2000;

	var queueWarningLogged = false;
	var logQueueWarningOnce = function() {
		if (!queueWarningLogged) {
			queueWarningLogged = true;
			logger.warn(
				'Rule queueing is only intended for testing purposes. Queueing behavior may be ' +
					'changed or removed at any time.'
			);
		}
	};

	var initRules = function(_satellite, rules, moduleProvider, replaceTokens) {
		var lastPromiseInQueue = reactorPromise.resolve();
		var notifyMonitors = createNotifyMonitors(_satellite);
		var executeDelegateModule = createExecuteDelegateModule(moduleProvider, replaceTokens);

		var getModuleDisplayNameByRuleComponent = function(ruleComponent) {
			var moduleDefinition = moduleProvider.getModuleDefinition(ruleComponent.modulePath);
			return (moduleDefinition && moduleDefinition.displayName) || ruleComponent.modulePath;
		};

		var getErrorMessage = function(ruleComponent, rule, errorMessage, errorStack) {
			var moduleDisplayName = getModuleDisplayNameByRuleComponent(ruleComponent);
			return (
				'Failed to execute ' +
				moduleDisplayName +
				' for ' +
				rule.name +
				' rule. ' +
				errorMessage +
				(errorStack ? '\n' + errorStack : '')
			);
		};

		var logActionError = function(action, rule, e) {
			logger.error(getErrorMessage(action, rule, e.message, e.stack));

			notifyMonitors('ruleActionFailed', {
				rule: rule,
				action: action
			});
		};

		var logConditionError = function(condition, rule, e) {
			logger.error(getErrorMessage(condition, rule, e.message, e.stack));

			notifyMonitors('ruleConditionFailed', {
				rule: rule,
				condition: condition
			});
		};

		var logConditionNotMet = function(condition, rule) {
			var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

			logger.log('Condition ' + conditionDisplayName + ' for rule ' + rule.name + ' not met.');

			notifyMonitors('ruleConditionFailed', {
				rule: rule,
				condition: condition
			});
		};

		var logRuleCompleted = function(rule) {
			logger.log('Rule "' + rule.name + '" fired.');
			notifyMonitors('ruleCompleted', {
				rule: rule
			});
		};

		var normalizeError = function(e) {
			if (!e) {
				e = new Error('The extension triggered an error, but no error information was provided.');
			}

			if (!(e instanceof Error)) {
				e = new Error(String(e));
			}

			return e;
		};

		var isConditionMet = function(condition, result) {
			return (result && !condition.negate) || (!result && condition.negate);
		};

		var addRuleToQueue = function(rule, syntheticEvent) {
			if (rule.conditions) {
				rule.conditions.forEach(function(condition) {
					lastPromiseInQueue = lastPromiseInQueue.then(function() {
						var timeoutId;

						return new reactorPromise(function(resolve, reject) {
							timeoutId = setTimeout(function() {
								// Reject instead of resolve to prevent subsequent
								// conditions and actions from executing.
								reject(
									'A timeout occurred because the condition took longer than ' +
										PROMISE_TIMEOUT / 1000 +
										' seconds to complete. '
								);
							}, PROMISE_TIMEOUT);

							reactorPromise
								.resolve(executeDelegateModule(condition, syntheticEvent, [syntheticEvent]))
								.then(resolve, reject);
						})
							.catch(function(e) {
								clearTimeout(timeoutId);
								e = normalizeError(e, condition);
								logConditionError(condition, rule, e);
								return reactorPromise.reject(e);
							})
							.then(function(result) {
								clearTimeout(timeoutId);
								if (!isConditionMet(condition, result)) {
									logConditionNotMet(condition, rule);
									return reactorPromise.reject();
								}
							});
					});
				});
			}

			if (rule.actions) {
				rule.actions.forEach(function(action) {
					lastPromiseInQueue = lastPromiseInQueue.then(function() {
						var timeoutId;

						return new reactorPromise(function(resolve, reject) {
							timeoutId = setTimeout(function() {
								reject(
									'A timeout occurred because the action took longer than ' +
										PROMISE_TIMEOUT / 1000 +
										' seconds to complete. '
								);
							}, PROMISE_TIMEOUT);

							reactorPromise
								.resolve(executeDelegateModule(action, syntheticEvent, [syntheticEvent]))
								.then(resolve, reject);
						})
							.then(function() {
								clearTimeout(timeoutId);
							})
							.catch(function(e) {
								clearTimeout(timeoutId);
								e = normalizeError(e);
								logActionError(action, rule, e);
								return reactorPromise.reject(e);
							});
					});
				});
			}

			lastPromiseInQueue = lastPromiseInQueue.then(function() {
				logRuleCompleted(rule);
			});

			// Allows later rules to keep running when an error occurs within this rule.
			lastPromiseInQueue = lastPromiseInQueue.catch(function() {});
		};

		var checkConditions = function(rule, syntheticEvent) {
			var condition;

			if (rule.conditions) {
				for (var i = 0; i < rule.conditions.length; i++) {
					condition = rule.conditions[i];

					try {
						var result = executeDelegateModule(condition, syntheticEvent, [syntheticEvent]);

						if (!isConditionMet(condition, result)) {
							logConditionNotMet(condition, rule);
							return;
						}
					} catch (e) {
						logConditionError(condition, rule, e);
						return;
					}
				}
			}
			runActions(rule, syntheticEvent);
		};

		var runActions = function(rule, syntheticEvent) {
			var action;

			if (rule.actions) {
				for (var i = 0; i < rule.actions.length; i++) {
					action = rule.actions[i];
					try {
						executeDelegateModule(action, syntheticEvent, [syntheticEvent]);
					} catch (e) {
						logActionError(action, rule, e);
						return;
					}
				}
			}

			logRuleCompleted(rule);
		};

		var eventModulesInitialized = false;
		var triggerCallQueue = [];

		var initEventModule = function(ruleEventPair) {
			var rule = ruleEventPair.rule;
			var event = ruleEventPair.event;
			event.settings = event.settings || {};

			var moduleName;
			var extensionName;

			try {
				moduleName = moduleProvider.getModuleDefinition(event.modulePath).name;
				extensionName = moduleProvider.getModuleExtensionName(event.modulePath);

				var syntheticEventMeta = {
					$type: extensionName + '.' + moduleName,
					$rule: {
						id: rule.id,
						name: rule.name
					}
				};

				/**
				 * This is the callback that executes a particular rule when an event has occurred.
				 * @callback ruleTrigger
				 * @param {Object} [syntheticEvent] An object that contains detail regarding the event
				 * that occurred.
				 */
				var trigger = function(syntheticEvent) {
					// DTM-11871
					// If we're still in the process of initializing event modules,
					// we need to queue up any calls to trigger, otherwise if the triggered
					// rule does something that triggers a different rule whose event module
					// has not been initialized, that secondary rule will never get executed.
					// This can be removed if we decide to always use the rule queue, since
					// conditions and actions will be processed asynchronously, which
					// would give time for all event modules to be initialized.
					if (!eventModulesInitialized) {
						triggerCallQueue.push(trigger.bind(null, syntheticEvent));
						return;
					}

					notifyMonitors('ruleTriggered', {
						rule: rule
					});

					var normalizedSyntheticEvent = normalizeSyntheticEvent(syntheticEventMeta, syntheticEvent);

					if (isRuleQueueActive()) {
						logQueueWarningOnce();
						addRuleToQueue(rule, normalizedSyntheticEvent);
					} else {
						checkConditions(rule, normalizedSyntheticEvent);
					}
				};

				executeDelegateModule(event, null, [trigger]);
			} catch (e) {
				logger.error(getErrorMessage(event, rule, e.message, e.stack));
			}
		};

		buildRuleExecutionOrder(rules).forEach(initEventModule);
		eventModulesInitialized = true;
		triggerCallQueue.forEach(function(triggerCall) {
			triggerCall();
		});
		triggerCallQueue = null;

		// We are returing the promise chain only for testing purposes.
		return lastPromiseInQueue;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var DEBUG_LOCAL_STORAGE_NAME = 'debug';

	var _satellite = window._satellite;

	if (_satellite && !window.__satelliteLoaded) {
		// If a consumer loads the library multiple times, make sure only the first time is effective.
		window.__satelliteLoaded = true;

		var container = _satellite.container;

		// Remove container in public scope ASAP so it can't be manipulated by extension or user code.
		delete _satellite.container;

		var undefinedVarsReturnEmpty = container.property.settings.undefinedVarsReturnEmpty;

		var dataElements = container.dataElements || {};

		// Remove when migration period has ended.
		dataElementSafe.migrateCookieData(dataElements);

		var getDataElementDefinition = function(name) {
			return dataElements[name];
		};

		var moduleProvider = createModuleProvider();

		var replaceTokens;

		// We support data elements referencing other data elements. In order to be able to retrieve a
		// data element value, we need to be able to replace data element tokens inside its settings
		// object (which is what replaceTokens is for). In order to be able to replace data element
		// tokens inside a settings object, we need to be able to retrieve data element
		// values (which is what getDataElementValue is for). This proxy replaceTokens function solves the
		// chicken-or-the-egg problem by allowing us to provide a replaceTokens function to
		// getDataElementValue that will stand in place of the real replaceTokens function until it
		// can be created. This also means that createDataElementValue should not call the proxy
		// replaceTokens function until after the real replaceTokens has been created.
		var proxyReplaceTokens = function() {
			return replaceTokens.apply(null, arguments);
		};

		var getDataElementValue = createGetDataElementValue(
			moduleProvider,
			getDataElementDefinition,
			proxyReplaceTokens,
			undefinedVarsReturnEmpty
		);

		var customVars = {};
		var setCustomVar = createSetCustomVar(customVars);

		var isVar = createIsVar(customVars, getDataElementDefinition);

		var getVar = createGetVar(customVars, getDataElementDefinition, getDataElementValue);

		replaceTokens = createReplaceTokens(isVar, getVar, undefinedVarsReturnEmpty);

		var localStorage = getNamespacedStorage('localStorage');

		var getDebugOutputEnabled = function() {
			return localStorage.getItem(DEBUG_LOCAL_STORAGE_NAME) === 'true';
		};

		var setDebugOutputEnabled = function(value) {
			localStorage.setItem(DEBUG_LOCAL_STORAGE_NAME, value);
			logger.outputEnabled = value;
		};

		logger.outputEnabled = getDebugOutputEnabled();

		// Important to hydrate satellite object before we hydrate the module provider or init rules.
		// When we hydrate module provider, we also execute extension code which may be
		// accessing _satellite.
		hydrateSatelliteObject(_satellite, container, setDebugOutputEnabled, getVar, setCustomVar);

		hydrateModuleProvider(container, moduleProvider, replaceTokens, getDataElementValue);

		initRules(_satellite, container.rules || [], moduleProvider, replaceTokens);
	}

	// Rollup's iife option always sets a global with whatever is exported, so we'll set the
	// _satellite global with the same object it already is (we've only modified it).
	var src = _satellite;

	return src;
})();
