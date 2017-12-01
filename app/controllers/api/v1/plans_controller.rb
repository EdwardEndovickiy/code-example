class Api::V1::PlansController < ApplicationController
  def index
    plans = Plan.order('created_at DESC');
    render json: plans
  end

  def show
    if Plan.exists?(id: params[:id])
      plan = Plan.find(params[:id])
      render json: plan
    else
      render json: {status: 'ERROR', message: 'Plan not found'},status: :unprocessable_entity
    end
  end

  def create
    plan = Plan.new(plan_params)

    if plan.save
      render json: {status: 'SUCCESS', message: 'Saved plan', data:plan},status: :ok
    else
      render json: {status: 'ERROR', message: 'Plan not saved',
        data:plan_errors},status: :unprocessable_entity
    end
  end

  def destroy
    plan = Plan.find(params[:id])
    plan.destroy
    render json: {status: 'SUCCESS', message: 'Deleted plan', data:plan},status: :ok
  end

  def update
    plan = Plan.find(params[:id])
    if plan.update_attributes(plan_params)
      render json: {status: 'SUCCESS', message: 'Updated plan', data:plan},status: :ok
    else
      render json: {status: 'ERROR', message: 'Plan not updated',
        data:category_errors},status: :unprocessable_entity
    end
  end

  private

  def plan_params
    params.permit(:deadline, :description)
  end
end
