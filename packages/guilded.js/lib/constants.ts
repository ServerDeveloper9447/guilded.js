export const constants = {
    clientEvents: {
        CALENDAR_EVENT_CREATED: "calendarEventCreated",
        CALENDAR_EVENT_UPDATED: "calendarEventUpdated",
        CALENDAR_EVENT_DELETED: "calendarEventDeleted",
        CALENDAR_EVENT_RSVP_UPDATED: "calendarRsvpUpdated",
        CALENDAR_EVENT_RSVP_MANY_UPDATED: "calendarRsvpManyUpdated",
        CALENDAR_EVENT_RSVP_DELETED: "calendarRsvpDeleted",
        MESSAGE_CREATED: "messageCreated",
        MESSAGE_UPDATED: "messageUpdated",
        MESSAGE_DELETED: "messageDeleted",
        MEMBER_UPDATED: "memberUpdated",
        ROLES_UPATED: "rolesUpdated",
        MEMBER_JOINED: "memberJoined",
        MEMBER_REMOVED: "memberRemoved",
        MEMBER_BANNED: "memberBanned",
        MEMBER_UNBANNED: "memberUnbanned",
        MEMBER_SOCIAL_LINK_CREATED: "memberSocialLinkCreated",
        MEMBER_SOCIAL_LINK_UPDATED: "memberSocialLinkUpdated",
        MEMBER_SOCIAL_LINK_DELETED: "memberSocialLinkDeleted",
        WEBHOOK_CREATED: "webhookCreated",
        WEBHOOK_UPDATED: "webhookUpdated",
        LIST_ITEM_COMPLETED: "listItemCompleted",
        LIST_ITEM_UNCOMPLETED: "listItemUncompleted",
        LIST_ITEM_CREATED: "listItemCreated",
        LIST_ITEM_UPDATED: "listItemUpdated",
        LIST_ITEM_DELETED: "listItemDeleted",
        CHANNEL_CREATED: "channelCreated",
        CHANNEL_UPDATED: "channelUpdated",
        CHANNEL_DELETED: "channelDeleted",
        DOC_CREATED: "docCreated",
        DOC_UPDATED: "docUpdated",
        DOC_DELETED: "docDeleted",
        SERVER_CREATED: "serverCreated",
        BOT_SERVER_CREATED: "botServerCreated",
        BOT_SERVER_DELETED: "botServerDeleted",
        MESSAGE_REACTION_CREATED: "messageReactionCreated",
        MESSAGE_REACTION_DELETED: "messageReactionDeleted",
        FORUM_TOPIC_CREATED: "forumTopicCreated",
        FORUM_TOPIC_DELETED: "forumTopicDeleted",
        FORUM_TOPIC_UPDATED: "forumTopicUpdated",
        FORUM_TOPIC_PINNED: "forumTopicPinned",
        FORUM_TOPIC_UNPINNED: "forumTopicUnpinned",
        FORUM_TOPIC_LOCKED: "forumTopicLocked",
        FORUM_TOPIC_UNLOCKED: "forumTopicUnlocked",
    },
} as const;
export type ClientEvent = typeof constants.clientEvents;
