$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        it('has URL in every feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        it('has name in every feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });

    describe('The menu', function () {

        it('is hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
        });

        it('changes visibility when burger icon is clicked', function() {
            var burgerIcon = document.getElementsByClassName('menu-icon-link')[0];

            burgerIcon.click();
            expect(document.body.classList.contains('menu-hidden')).not.toBeTruthy();
            
            burgerIcon.click();
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('has at least a single .entry element', function() {
            expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {

        var initialContent;

        beforeEach(function (done) {
            loadFeed(1, function() {
                initialContent = document.getElementsByClassName('feed')[0].innerHTML;
                loadFeed(2, done);
            });
        });

        it('has changed with new content', function() {
            var newContent = document.getElementsByClassName('feed')[0].innerHTML;
            expect(initialContent).not.toBe(newContent);
        });
    });
}());
