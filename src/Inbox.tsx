import { Trans, Plural, useLingui } from "@lingui/react/macro";

export default function Inbox() {
  const { i18n, t } = useLingui();
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();
  const markAsRead = () => {
    alert(t`Marked as read.`);
  };

  return (
    <div className="bg-zinc-100 py-5 px-10 rounded-lg mt-4 text-center md:max-w-[800px] w-full space-y-3">
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>

      <p>
        <Trans>
          See all <a href="#">unread messages</a>
          {" or "}
          <a href="#" onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>

      <p>
        <Plural
          value={messagesCount}
          one="There's # message in your inbox"
          other="There are # messages in your inbox"
        />
      </p>

      <footer>
        <Trans>Last login on {i18n.date(lastLogin)}.</Trans>
      </footer>
    </div>
  );
}
