browser.tabs.create({
  url: browser.runtime.getURL('uninstalled.html')
})

browser.management.uninstallSelf();
