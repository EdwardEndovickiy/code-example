class Api::V1::FinanceController < ApplicationController
  def index
    finance = Finance.order('created_at DESC');
    render json: finance
  end

  def show
    if Finance.exists?(id: params[:id])
      transaction = Finance.find(params[:id])
      render json: transaction
    else
      render json: {status: 'ERROR', message: 'Finance not found'},status: :unprocessable_entity
    end
  end

  def create
    transaction = Finance.new(transaction_params)

    if transaction.save
      render json: {status: 'SUCCESS', message: 'Saved transaction', data:transaction},status: :ok
    else
      render json: {status: 'ERROR', message: 'Finance not saved',
        data:transaction_errors},status: :unprocessable_entity
    end
  end

  def destroy
    transaction = Finance.find(params[:id])
    transaction.destroy
    render json: {status: 'SUCCESS', message: 'Deleted transaction', data:transaction},status: :ok
  end

  def update
    transaction = Finance.find(params[:id])
    if transaction.update_attributes(transaction_params)
      render json: {status: 'SUCCESS', message: 'Updated transaction', data:transaction},status: :ok
    else
      render json: {status: 'ERROR', message: 'Finance not updated',
        data:category_errors},status: :unprocessable_entity
    end
  end

  private

  def transaction_params
    params.permit(:price, :description)
  end
end
