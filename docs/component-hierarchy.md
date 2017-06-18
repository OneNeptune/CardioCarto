# Component Hierarchy
* FrontPageContainer
  * NavBarContainer
    * NavBar
  * AuthFormContainer
    * AuthForm
* HomePageContainer
    * NavBarContainer
        * NavBar
  * UserDashboardContainer
    * UserDetails
        * UserStats
        * UserProfile
    * RecentRoutesIndexContainer
        * RecentRoutesIndex
            * RecentRouteIndexItem
    * CreatedRoutesIndexContainer
        * CreatedRoutesIndex
            * CreatedRouteIndexItem
  * UserActivityContainer
    * UserDetails
        * ActivityIndexContainer
            * ActivityIndexItem
  * RouteCreateContainer
    * MapContainer
        * Markers
        * Map
  * RouteShowContainer
    * MapContainer
        * Markers
        * Map
    * RouteDetails
    * RouteForm
    * RouteComments
  * FriendShowContainer
    * FriendShowIndex
        * FriendIndexItem
  * FriendSearchContainer
    * FriendSearchIndex
      * FriendIndexItem
# Routes
Path | Component
------------ | -------------
/ | FrontPageContainer
/auth/signup | AuthFormContainer
/auth/login | AuthFormContainer
/my_home/user_dashboard | UserDashboardContainer
/my_home/activity_feed | UserActivityContainer
/routes/create | RouteCreateContainer
/routes/view/:id | RouteShowContainer
/friends | FriendsShowContainer
/friends/find | FriendSearchContainer
