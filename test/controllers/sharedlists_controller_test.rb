require 'test_helper'

class SharedlistsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get sharedlists_new_url
    assert_response :success
  end

end
