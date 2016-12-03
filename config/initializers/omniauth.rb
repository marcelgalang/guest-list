Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "224495531294363", "5c8092d3092d3ff59895aaaa16b85800"
end