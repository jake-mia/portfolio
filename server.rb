require 'sinatra'

get '/' do
  send_file File.join(
	settings.public_folder, 'jake-css.html'
    )
end
