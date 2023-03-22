<script lang="ts">
  import type { Email, GroupedEmails } from 'types/Email'
  import {groupBy} from "lodash-es";

  export let emails: Email[]

  const groupedByEmail: GroupedEmails = emails.reduce((acc: GroupedEmails, email: Email) => {
    if (acc[email.from]) {
      acc[email.from].count++;
      acc[email.from].data.push(email);
    } else {
      acc[email.from] = {
        count: 1,
        data: [email],
      };
    }
    return acc;
  }, {});
  console.log(groupedByEmail);

  let sentEmails = Object.values(groupedByEmail).reduce((total, item) => total + item.count, 0);
  let receivedEmails = 0
  let totalUser = Object.keys(groupedByEmail).length;

</script>

<div class="dashboard">
  <h2>Email Dashboard</h2>
  <div class="dashboard-item">
    <span>Emails Sent:</span>
    <span>{sentEmails}</span>
  </div>
  <div class="dashboard-item">
    <span>Emails Received:</span>
    <span>{receivedEmails}</span>
  </div>
  <div class="dashboard-item">
    <span>Total Emails:</span>
    <span>{totalUser}</span>
  </div>
</div>

<style lang="scss">
  @import "src/styles/dashboard.scss";
</style>