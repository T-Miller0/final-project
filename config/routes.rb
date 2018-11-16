# frozen_string_literal: true

Rails.application.routes.draw do
  scope '/api' do
    resources :to_dos, :simple_to_dos, :timed_to_dos
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
