Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "341849159517257", "18a79f9e1b7afc7c087f0bb5d15b2854"
end