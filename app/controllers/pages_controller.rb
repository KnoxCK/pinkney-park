class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :events, :stay, :properties, :contact, :local_area ]

  def home
  end

  def events
  end

  def stay
  end

  def properties
  end

  def contact
  end

  def local_area
  end

end
