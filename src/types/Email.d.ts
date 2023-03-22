type Email = {
  from: string;
  to: string[];
  subject: string;
  datetime: string;
};

type EmailData = {
  count: number;
  data: Email[];
};

type GroupedEmails = {
  [email: string]: EmailData;
};

export { Email, EmailData, GroupedEmails };
