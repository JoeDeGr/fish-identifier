history.push as login redirect?

apiURL is in helpers/apiURL

# Prefix Verb               URI Patter                      Controller#Action
    genus_show GET          /genus/show(.:format)            genus#show
    species_show GET        /species/show(.:format)          species#show
    users POST              /users(.:format)                 users#create
    user GET                /users/:id(.:format)             users#show
    PATCH                   /users/:id(.:format)             users#update
    PUT                     /users/:id(.:format)             users#update
    DELETE                  /users/:id(.:format)             users#destroy
    login POST              /login(.:format)                 auth#login
    auto_login GET          /auto_login(.:format)            auth#auto_login
    authorized_user GET     /authorized_user(.:format)       auth#authorized_user



