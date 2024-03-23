 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * InsightsValue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsValue extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      campaign_id: 'campaign_id',
      end_time: 'end_time',
      engagement_source: 'engagement_source',
      message_type: 'message_type',
      messaging_channel: 'messaging_channel',
      recurring_notifications_entry_point: 'recurring_notifications_entry_point',
      recurring_notifications_frequency: 'recurring_notifications_frequency',
      recurring_notifications_topic: 'recurring_notifications_topic',
      start_time: 'start_time',
      value: 'value',
    });
  }

}
