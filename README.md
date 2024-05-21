# Swiggy-clone

# Using Routing (react-router-dom)

    - createBrowserRouter -> provided by react-router-dom takes array of objects(having path,element,errorElement)
    - RouterProvider -> component takes router in params
    - useRouteError -> Gives comprehensive errors i.e status,statusText etc
    - children -> Keeps some header as constant fr all pages and changes just the Body
    - Outlet -> will be filled with children acc to path (chilren elements replace the Outlet acc to path)
    - Note :  Donot use <a> when in React(Route) -> since entire page refreshes
      - instead use Link-> To navigate to new page without refreshing entire page(in the backside uses <a href="">)

    # Dynamic Routing
      - Has different route name depending upon the page (Ex-> post click of res on basis of res name)

# 2 types of Routings in Web Applications

    1)Client Side Routing
        - no n/w call
        - has all components at first
        - no new page fetched
    2)Server Side Routing
        - makes n/w call
        -  gets the data and renders page post data comes - refreshes page

# React as Single page application

    Because the page isn't refreshed only the components are reloaded via Client Side Routing

# Types of testing (developer)

    - Unit Testing -> Testing React Components in isolation
    - Integration Testing -> Testing integration of components
    - End to End Testing - e2e testing -> Testing application from user landing on page till user leaving page

# Setting up Testing

- Install React Testing Library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel (.parcelrc) to disable default Babel transpilation
- jest configuration (by npx jest --init)
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
