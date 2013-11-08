Seemax4::Application.routes.draw do
  root 'application#page'
  get  ':page', to: 'application#page'
end
