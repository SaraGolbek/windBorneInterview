module Api
  class TransmissionsController < ApplicationController
    def index
      @transmissions = Transmission.all.order(created_at: :asc)
      return render json: { error: 'not_found' }, status: :not_found if !@transmissions

      render 'api/transmissions/index', status: :ok
    end

    def show
      @transmission = Transmission.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@transmission

      render 'api/transmissions/show', status: :ok
    end

    def create
      @transmission = Transmission.new(transmission_params)
      return render 'bad_request', status: :bad_request unless @transmission.save

      if @transmission.save!
        render 'api/transmissions/show'
      end
    end

    def transmission_params
      params.require(:transmission).permit(:altitude, :latitude, :longitude)
    end
  end
end