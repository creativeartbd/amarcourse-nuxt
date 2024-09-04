<template>
  <div class="tab-content" id="myaccountContent">
    <div class="tab-pane fade active show" id="dashboad" role="tabpanel">
      <div
        v-for="(info, index) in account.dashboard"
        class="rbt-my-account-inner"
        :key="index"
      >
        <h3>Dashboard</h3>

        <div class="about-address mb--20">
          <p>
            Hello, <strong>{{ info.name }}</strong> (If Not
            <nuxt-link to="/login" class="logout ms-2"> Logout </nuxt-link>
            )
          </p>
        </div>

        <p>{{ info.desc }}</p>
      </div>
    </div>

    <div class="tab-pane fade" id="orders" role="tabpanel">
      <div class="rbt-my-account-inner">
        <h3>Orders</h3>

        <div class="rbt-my-account-table table-responsive text-center">
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(info, index) in account.orders" :key="index">
                <td>{{ info.id }}</td>
                <td>{{ info.name }}</td>
                <td>{{ info.date }}</td>
                <td>{{ info.status }}</td>
                <td>${{ info.price }}</td>
                <td>
                  <a class="rbt-btn btn-gradient btn-sm" href="#">
                    View Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="download" role="tabpanel">
      <div class="rbt-my-account-inner">
        <h3>Downloads</h3>

        <div class="rbt-my-account-table table-responsive text-center">
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr>
                <th>Product</th>
                <th>Date</th>
                <th>Expire</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(info, index) in account.downloads" :key="index">
                <td>{{ info.name }}</td>
                <td>{{ info.date }}</td>
                <td>{{ info.expire ? "Yes" : "Never" }}</td>
                <td>
                  <a class="rbt-btn btn-gradient btn-sm" href="#">
                    Download File
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="payment-method" role="tabpanel">
      <div class="rbt-my-account-inner">
        <h3>Payment Method</h3>

        <p class="rbt-saved-message">
          You Can&apos;t Saved Your Payment Method yet.
        </p>
      </div>
    </div>

    <div class="tab-pane fade" id="address-edit" role="tabpanel">
      <div class="rbt-my-account-inner">
        <h3>Billing Address</h3>

        <address>
          <p>
            <strong>Banani, Dhaka</strong>
          </p>
          <p>
            1205 Supper Market
            <br />
            Dhaka, Bangladesh
          </p>
          <p>Mobile: 01911111111</p>
        </address>

        <div class="rbt-link-hover">
          <a href="#" class="d-inline-block">
            <i class="fa fa-edit mr--5"></i>Edit Address
          </a>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="account-info" role="tabpanel">
      <div class="rbt-my-account-inner">
        <h3>Account Details</h3>
        <AccountForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import AccountForm from "./AccountForm";
defineProps(["account"]);
</script>

<style lang="scss" scoped></style>
