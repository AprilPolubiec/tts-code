const gmail = {
  accounts: [
    {
      emailAddress: 'aprilpolubiec@gmail.com',
      password: 'xSaf@r34esf',
      displayName: 'April Polubiec',
      displayImage: 'https://link-to-image.com/myimage',
      mailboxNames: [
        'inbox',
        'starred',
        'snoozed',
        'sent',
        'drafts',
        'spam',
        'trash'
      ],
      mailboxes: {
        inbox: {
          messages: [
            {
              from: 'foo@bar.com',
              cc: ['bar@foo.com'],
              bcc: [],
              time: 1584559542758,
              subject: 'Hi!',
              body: ':)',
              read: true,
              starred: false,
              spam: false
            },
            {
              from: 'foo@bar.com',
              cc: ['bar@foo.com'],
              bcc: [],
              time: 1584559542767,
              subject: 'Hi again!',
              body: 'Its me',
              read: false,
              starred: true,
              spam: false
            }
          ]
        },
        starred: {
          messages: [
            {
              from: 'foo@bar.com',
              cc: ['bar@foo.com'],
              bcc: [],
              time: 1584559542767,
              subject: 'Hi again!',
              body: 'Its me',
              read: false,
              starred: true,
              spam: false
            }
          ]
        },
        snoozed: {
          messages: []
        },
        sent: {
          messages: [
            {
              to: 'bar@foo.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              subject: 'RE: Hi again!',
              body: 'Hi'
            }
          ]
        },
        drafts: {
          messages: [
            {
              to: 'bar@foo.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              subject: 'Just checking in',
              body: 'Hey, how ar'
            }
          ]
        },
        spam: {
          messages: [
            {
              from: 'awesomedeal@bigmoney.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              spam: true,
              read: false,
              subject: 'U WON MONEY $$$$ - NOT SPAM!',
              body: 'JUST SEND ME YOUR SOCIAL SECURITY NUMBER AND ITS ALL URS!'
            },
            {
              from: 'awesomedeal@bigmoney.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              spam: true,
              read: false,
              subject: 'DID U GET MY LAST EMAIL ??',
              body:
                'hi there not spam just want 2 give u all my $$ this is LEGIT~!'
            }
          ]
        },
        trash: {
          messages: []
        }
      }
    },
    {
      emailAddress: 'polubski@gmail.com',
      password: 'ilovecats',
      displayName: 'April Polubiec',
      displayImage: 'https://link-to-image.com/myimage',
      mailboxNames: [
        'inbox',
        'starred',
        'snoozed',
        'sent',
        'drafts',
        'spam',
        'trash'
      ],
      mailboxes: {
        inbox: {
          messages: [
            {
              from: 'foo@bar.com',
              cc: ['bar@foo.com'],
              bcc: [],
              time: 1584559542758,
              subject: 'Hi!',
              body: ':)',
              read: true,
              starred: false,
              spam: false
            },
            {
              from: 'foo@bar.com',
              cc: ['bar@foo.com'],
              bcc: [],
              time: 1584559542767,
              subject: 'Hi again!',
              body: 'Its me',
              read: false,
              starred: true,
              spam: false
            }
          ]
        },
        starred: {
          messages: [
            {
              from: 'foo@bar.com',
              cc: ['bar@foo.com'],
              bcc: [],
              time: 1584559542767,
              subject: 'Hi again!',
              body: 'Its me',
              read: false,
              starred: true,
              spam: false
            }
          ]
        },
        snoozed: {
          messages: []
        },
        sent: {
          messages: [
            {
              to: 'bar@foo.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              subject: 'RE: Hi again!',
              body: 'Hi'
            }
          ]
        },
        drafts: {
          messages: [
            {
              to: 'bar@foo.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              subject: 'Just checking in',
              body: 'Hey, how ar'
            }
          ]
        },
        spam: {
          messages: [
            {
              from: 'awesomedeal@bigmoney.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              spam: true,
              read: false,
              subject: 'U WON MONEY $$$$ - NOT SPAM!',
              body: 'JUST SEND ME YOUR SOCIAL SECURITY NUMBER AND ITS ALL URS!'
            },
            {
              from: 'awesomedeal@bigmoney.com',
              cc: [],
              bcc: [],
              time: 1584559542778,
              spam: true,
              read: false,
              subject: 'DID U GET MY LAST EMAIL ??',
              body:
                'hi there not spam just want 2 give u all my $$ this is LEGIT~!'
            }
          ]
        },
        trash: {
          messages: []
        }
      }
    }
  ]
}

var account = gmail.accounts[0]
// Get a list of inbox names
var inbox_names = Object.keys(account.mailboxes)
console.log(inbox_names)

// Get a list of emails
var all_messages = []

account.mailboxNames.forEach(function(name, index) {
  all_messages.push(...account.mailboxes[name].messages)
})
console.log(all_messages)

// Get the text of the second email in the visible list
var second_email = account.mailboxes.inbox.messages[1].body
console.log(second_email)

// Add a draft email to the drafts mailbox
var draft = {
  to: 'bar@foo.com',
  cc: [],
  bcc: [],
  time: 1584559542983,
  subject: 'Hope you are well!',
  body: 'Hey, just wante'
}
account.mailboxes.drafts.messages.push(draft)
console.log(account.mailboxes.drafts.messages)

// Mark an email as sent
var index_of_email = 0
console.log('drafts before: ', account.mailboxes.drafts.messages)
console.log('sent before: ', account.mailboxes.sent.messages)
account.mailboxes.sent.messages.push(
  account.mailboxes.drafts.messages.splice(index_of_email, 1)
)
console.log('drafts after: ', account.mailboxes.drafts.messages)
console.log('sent after: ', account.mailboxes.sent.messages)
