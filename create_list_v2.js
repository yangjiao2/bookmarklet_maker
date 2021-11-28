// Generate deltoid links

'use strict';

// eslint-disable-next-line fb-www/complexity
(function () {
  const SECONDS_IN_DAYS = 60 * 60 * 24;
  const FBLITE_CORE = ['lite_interfaces:fblite:android:sharing:original_broadcast_post', 'lite_interfaces:fblite:android:messaging:growth:message_sends', 'performance:server_perf:overall:tao_get_keys_www_tier', 'core_app:ecosystem:sessions:core_session_count:fblite_android', 'lite_interfaces:fblite:kaios:visitation:dap', 'lite_interfaces:fblite:perf:server:cpu_time', 'lite_interfaces:fblite:android:startup:avg:successful:long_combined:overall', 'lite_interfaces:fblite:android:visitation:dap', 'lite_interfaces:fblite:kaios:visitation:map', 'lite_interfaces:fblite:perf:server:session_size:unified:all', 'groups:meaningfulness:meaningful_people', 'lite_interfaces:fblite:kaios:time_spent:overall', 'core_growth:visitation:dap:facebook_fblite_web', 'performance:server_perf:overall:server_instructions_www_tier', 'lite_interfaces:fblite:android:visitation:map', 'lite_interfaces:instagram:visitation:dap', 'lite_interfaces:fblite:android:time_spent:overall', 'lite_interfaces:fblite:android:reliability:client_errors:by_type', 'lite_interfaces:fblite:android:interactions:reactions', 'core_growth:visitation:map:facebook_fblite_web'];
  const FBLITE_CORE_DIAGNOSTICS = ['lite_interfaces:fblite:perf:client_memory:by_app_state', 'lite_interfaces:fblite:android:startup:ratio:success_rate:less_2s', 'lite_interfaces:fblite:perf:server:session_size:gateway:all', 'performance:server_perf:overall:tao_get_keys_www_tier', 'lite_interfaces:fblite:perf:server:sessions_number', 'lite_interfaces:fblite:android:navigations:share:all:success_rate:responsive:exclude_back_navigation_share', 'lite_interfaces:fblite:perf:server:session_size:appsrv:all', 'lite_interfaces:fblite:android:navigations:share:all:fail_rate:overall:exclude_back_navigation', 'lite_interfaces:fblite:android:navigations:avg:all:ttrc:exclude_back_navigation', 'lite_interfaces:fblite:android:startup:ratio:success_rate:overall', 'lite_interfaces:fblite:perf:server:cpu_time', 'lite_interfaces:fblite:android:startup:avg:successful:long_combined:overall', 'lite_interfaces:fblite:perf:server:session_size:unified:all_capped', 'lite_interfaces:fblite:perf:server:latency_ms', 'lite_interfaces:fblite:perf:server:session_size:unified:all', 'lite_interfaces:fblite:android:navigations:share:all:success_rate:slow:exclude_back_navigation_share', 'sharing:composer:post_success_rate_by_interface', 'lite_interfaces:fblite:android:startup:ratio:success_rate:less_5s:overall', 'lite_interfaces:fblite:android:perf:media:images:loading:ratio:bad_loading_rate', 'lite_interfaces:fblite:android:navigations:share:all:success_rate:fluid:exclude_back_navigation_share', 'performance:server_perf:overall:server_instructions_www_tier', 'lite_interfaces:fblite:perf:server:session_length', 'lite_interfaces:fblite:android:perf:media:images:loading:ratio:bad_cancel_loads', 'lite_interfaces:fblite:android:perf:media:images:loading:ratio:bad_successful_loads', 'performance:server_perf:fblite:app_latency_ms', 'lite_interfaces:fblite:android:navigations:avg:all:ttrc', 'lite_interfaces:fblite:perf:footprint:total', 'lite_interfaces:fblite:android:startup:ratio:success_rate:less_8s', 'lite_interfaces:fblite:android:reliability:client_errors:by_type', 'lite_interfaces:fblite:android:reliability:client_errors:java_ooms', 'lite_interfaces:fblite:android:navigations:cnt:all:overall'];
  const FBLITE_PERF_CORE =  ['lite_interfaces:fblite:perf:client_memory:by_app_state', 'lite_interfaces:fblite:android:startup:ratio:success_rate:less_2s', 'lite_interfaces:fblite:perf:server:session_size:gateway:all', 'performance:server_perf:overall:tao_get_keys_www_tier', 'lite_interfaces:fblite:perf:server:sessions_number', 'lite_interfaces:fblite:android:navigations:share:all:success_rate:responsive:exclude_back_navigation_share', 'lite_interfaces:fblite:perf:server:session_size:appsrv:all', 'lite_interfaces:fblite:android:navigations:share:all:fail_rate:overall:exclude_back_navigation', 'lite_interfaces:fblite:android:navigations:avg:all:ttrc:exclude_back_navigation', 'lite_interfaces:fblite:android:startup:ratio:success_rate:overall', 'lite_interfaces:fblite:perf:server:cpu_time', 'lite_interfaces:fblite:android:startup:avg:successful:long_combined:overall', 'lite_interfaces:fblite:perf:server:session_size:unified:all_capped', 'lite_interfaces:fblite:perf:server:latency_ms', 'lite_interfaces:fblite:perf:server:session_size:unified:all', 'lite_interfaces:fblite:android:navigations:share:all:success_rate:slow:exclude_back_navigation_share', 'sharing:composer:post_success_rate_by_interface', 'lite_interfaces:fblite:android:startup:ratio:success_rate:less_5s:overall', 'lite_interfaces:fblite:android:perf:media:images:loading:ratio:bad_loading_rate', 'lite_interfaces:fblite:android:navigations:share:all:success_rate:fluid:exclude_back_navigation_share', 'performance:server_perf:overall:server_instructions_www_tier', 'lite_interfaces:fblite:perf:server:session_length', 'lite_interfaces:fblite:android:perf:media:images:loading:ratio:bad_cancel_loads', 'lite_interfaces:fblite:android:perf:media:images:loading:ratio:bad_successful_loads', 'performance:server_perf:fblite:app_latency_ms', 'lite_interfaces:fblite:android:navigations:avg:all:ttrc', 'lite_interfaces:fblite:perf:footprint:total', 'lite_interfaces:fblite:android:startup:ratio:success_rate:less_8s', 'lite_interfaces:fblite:android:reliability:client_errors:by_type', 'lite_interfaces:fblite:android:reliability:client_errors:java_ooms', 'lite_interfaces:fblite:android:navigations:cnt:all:overall'];
  const GUIDELINE = ['search:usage:volume_without_mp_watch:overall', 'search:typeahead:sessions_search_glyph:overall', 'core_app:ecosystem:sessions:core_session_count:fb_major_apps', 'core_app:ecosystem:sessions:core_session_count:fb_iphone', 'core_app:ecosystem:sessions:core_session_count:fb_android', 'core_app:ecosystem:sessions:core_session_count:fb_iphone_android', 'core_app:ecosystem:sessions:core_session_count:comet_www', 'local:usr_bvi_2021_h1:search_referred', 'local:usr_bvi_components_2021_h1:search_referred', 'groups:growth:cedau:overall', 'video:planned_viewing:video_home_watch_time_ms:overall', 'video:search:metrics:participation_rate:organic_search_explore', 'search:friending:requests_sent_accepted:overall', 'marketplace:bsg_mli_fast:overall', 'marketplace:search:mp_tab_search_mli_global_search_overall:overall', 'groups:meaningfulness:meaningful_joins:by_source', 'search:serp:with_reformulation_rate:overall', 'search:serp:with_reformulation:overall', 'search:serp:overall', 'search:serp:time_spent:overall', 'search:serp:15s_sessions:overall', 'search:serp:with_reformulation:by_reformulation_type', 'search:quality:avg_serp_session_total_time_spent_ms:overall', 'search:quality:avg_serp_session_time_spent_no_downstream_ms:overall', 'groups:membership:approved:by_source', 'shops:consumer:facebook:shops:daily:shops_visitors:overall', 'shops:consumer:facebook:shops:monthly:his:us_only', 'games:live_gaming_watch_time', 'games:instant:core:sessions', 'video:search:metrics:time_spent_total_s:overall', 'search:qpl:serp:ttbr_lt_1000_rate', 'search:qpl:serp:ttbr_lt_1000_rate:by_interface', 'search:serp:perf:client:ttbr_lt_1000_rate:serp', 'search:serp:perf:client:ttbr_lt_1000_rate:by_interface_serp'];
  const GROUP_METRICS = ['groups:meaningfulness:meaningful_connection', 'groups:action_details:likes', 'groups:meaningfulness_v3:meaningful_people_overall', 'groups:action_details:comments:overall', 'news_feed:msi:received:feed:overall', 'marketplace:bsg_mli:overall', 'groups:membership:invites:confirmed_marginal', 'groups:membership:invites_sent_by_inviter:approved:marginal_invitee_segment', 'events:live_video_event_intentful_people', 'groups:meaningfulness:sensitive_mc_ratio', 'groups:action_details:reshare_out_of_group:overall', 'groups:vpv:overall', 'groups:membership:invites_sent_by_inviter:confirmed:marginal_invitee_segment', 'groups:membership:confirmed:marginal_users:overall', 'groups:growth:gedap:overall_user', 'community_integrity:cep:viewer:sliced:holistic_prevalence_world__overall_violating__volume:recipient_surface_fbtype:69', 'groups:meaningfulness:meaningful_people', 'core_app:ecosystem:sessions:core_session_count:fb_major_apps', 'groups:membership:invites:confirmed', 'groups:membership:confirmed:overall', 'news_feed:comments:by_commenter:num_u2u_group_comments', 'news_feed:comments:by_commenter:num_u2u_friend_comments', 'community_integrity:cep:viewer:feed_engagement_bait_groups__agg_engagement_bait__volume', 'news_feed:msi:given:feed:overall', 'core_app:ecosystems:core_apps:ecosystems:meaningful_people_mpmc_3_1:meaningful_people', 'groups:tab:intentional_visitors:weekly:overall', 'groups:integrity:meaningful_people:sensitive_mp_ratio', 'groups:action_details:reaction:overall', 'events:online_event:intentful_people', 'groups:integrity:joins:violating_ratio:overall', 'groups:membership:invites_sent_by_inviter:confirmed', 'groups:membership:approved:with_self:and_marginal', 'news_feed:distinct_vpv:feed:num_vpv_received:friend_reshare'];
  
  const type =
    document.querySelectorAll('._7mgb [aria-pressed="true"]')[0].innerText ===
    'QE'
      ? 'qe'
      : 'gk';
  const experimentInfo = Array.from(
    document.querySelectorAll('._7mgb input'),
  ).map(input => input.value);
  const experiments = [
    {
      control: type === 'qe' ? experimentInfo[2] : experimentInfo[3],
      experiment: type === 'qe' ? experimentInfo[0] : experimentInfo[0],
      test: type === 'qe' ? experimentInfo[1] : experimentInfo[1],
      type,
    },
  ];

  const endTime = prompt('End date (M-D-Y):');

  const metrics = [
    {
      collections: ['search:growth'],
      filters: [],
    },
    {
      collections: [],
      filters: [],
      label: 'Guideline',
      metricNames: GUIDELINE,
      platformFilter: false,
    },
    {
      collections: [],
      filters: [],
      label: 'search:growth - DAP, MAP, etc',
      metricNames: [
        'search:dap:overall',
        'search:l1_retention:overall',
        'search:l7_retention:overall',
        'search:map:overall',
        'search:typeahead_overall:dap:overall',
        'search:typeahead_overall:l1_retention:overall',
        'search:typeahead_overall:l7_retention:overall',
        'search:typeahead_overall:wap:overall',
        'search:wap:overall',
      ],
      platformFilter: false,
    },
    {
      collections: [],
      filters: [],
      label: 'search:growth - Active Days and Volume',
      metricNames: [
        'search:usage:active_days:typeahead',
        'search:usage:sessions:typeahead',
        'search:usage:volume:by_search_product',
        'search:usage:volume:overall',
        'search:usage:volume:serp:by_is_typeahead_referred',
        'search:usage:volume:ta_referred_serp:by_is_classifier_post_search',
        'search:usage:volume_without_mp_watch:overall',
        'search:usage:volume_without_mp_watch:has_reformulation',
        'search:typeahead:sessions_search_glyph:overall',
        'search:usage:non_people_search_volume:overall',
      ],
      platformFilter: true,
      platformFiltersOnly: true,
    },
    {
      collections: [],
      filters: [],
      label: 'search:growth - Participation',
      metricNames: [
        'search:usage:participation:by_search_product',
        'search:usage:participation:overall_search',
        'search:usage:participation:serp:by_is_typeahead_referred',
        'search:usage:participation:ta_referred_serp:by_is_classifier_post_search',
        'search:usage:participation:typeahead',
      ],
      platformFilter: true,
      platformFiltersOnly: false,
    },
    {
      collections: [],
      filters: [],
      label: 'search:typeahead:topline',
      metricNames: [
        'search:typeahead:ctr:with_typed_kp_no_scope',
        'search:conduit:ta:avg_chars_typed:with_typed_kp_no_abandon_no_scope',
        'search:typeahead:non_echo_ctr:with_typed_kp_no_scope',
        'search:ta_quality:online_bvt_non_echo_ctr:global',
        'search:typeahead:perf:avg_blended_wall_time:overall',
        'search:ta_quality:online_bvt_typed_query_ratio:global',
        'search:ta_quality:online_bvt_non_echo_ctr:gtakp',
        'search:tas_imp:unintuitive_imp_session_rate:uir_eligible_with_global_scope',
        'search:typeahead:abandon_rate:with_typed_kp_no_scope',
      ],
      platformFilter: true,
    },
    {
      collections: ['search:typeahead:sts_v1'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:typeahead:sts_v1:detail'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:sequences_topline'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:serp'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: [],
      filters: [
        {
          column: 'filter_type',
          mode: 2,
          values: ['marketplace_tab', 'blended_shows_home'],
        },
      ],
      label: 'SERP - non-MP/Watch',
      collections: ['search:serp'],
      metricNames: [
        'search:serp:15s_sessions:overall',
      ],
      platformFilter: true,
    },
    {
      collections: [],
      filters: [
        {
          column: 'filter_type',
          mode: 1,
          values: ['top'],
        },
      ],
      label: 'SERP - Top Tab',
      collections: ['search:serp'],
      metricNames: [
        'search:serp:15s_sessions:overall',
      ],
      platformFilter: true,
    },
    {
      collections: ['search:serp_clicks'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:serp:results'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:value:overview'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: [],
      filters: [],
      label: 'Desktop SERP Perf',
      metricNames: [
        'performance:hcgf:search:comet_www:navigate_to_top_tab_serp:web_display_done:avg_when_success',
        'performance:hcgf:search:comet_www:navigate_to_top_tab_serp:web_display_done:pct_good_when_success_contingent',
      ],
      platformFilter: false,
    },
    {
      collections: ['search:capacity'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['search:polished_usecase'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:search_news_topline'],
      filters: [],
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['core_app:web_topline'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['core_app:comet_ecosystem_metrics'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['core_app:comet_product_engagement'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['groups:common'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['groups:common_detailed'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['groups:tab_common'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['events:common'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['search:pages_bvi_h2_2020'],
      filters: [],
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: [],
      filters: [],
      label: 'Partner Metrics',
      metricNames: [
        'local:usr_bvi_value_v2:search_referred',
        'groups:growth:cedau:overall',
        'video:planned_viewing:video_home_watch_time_ms:overall',
        'video:search:metrics:participation_rate:organic_search_explore',
        'search:friending:requests_sent_accepted:overall',
        'marketplace:bsg_mli_fast:overall',
        'marketplace:search:mp_tab_search_mli_global_search_overall:overall',
        'groups:meaningfulness:meaningful_joins:by_source',
      ],
      platformFilter: false,
    },
    {
      collections: [],
      filters: [
        {
          column: 'filter_type',
          mode: 1,
          values: ['photo', 'blended_photo'],
        },
      ],
      label: 'Photos',
      metricNames: ['search:serp:overall', 'search:serp:time_spent:overall', 'search:serp_videos'],
      platformFilter: true,
    },
    {
      collections: ['video:search:metrics', 'search:videos:serp', 'video:search:metrics],
      filters: [],
      label: 'Video topline SCGR ',
      platformFilter: true,
    },
    {
      collections: [],
      filters: [],
      label: 'Group Metrics (groups:ceg_core)',
      metricNames: GROUP_METRICS,
      platformFilter: false,
    },
    {
      collections: [],
      filters: [],
      label: 'Page Metrics (search:pages_bvi_h2_2020)',
      metricNames: [
        'local:usr_bvi_value_v2:search_referred',
        'local:usr_bvi_components_v2:search_referred',
      ],
      platformFilter: false,
    },
    {
      collections: ['search:friending],
      filters: [],
      label: 'search:friending',
      metricNames: [],
      platformFilter: false,
    },
    
  
    // perf
    {
      collections: [],
      filters: [],
      label: 'Client Perf TTBR',
      metricNames: ['search:serp:perf:client:ttbr_lt_1000_rate:serp', 'search:serp:perf:client:ttbr_lt_1000_rate:by_interface_serp'],
      platformFilter: false,
    },
    {
      collections: ['search:capacity_v2'],
      filters: [],
      label: 'Capacity v2',
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['search:webicapacity'],
      filters: [],
      label: 'Search Webicapacity',
      metricNames: [],
      platformFilter: false,
    },
    
    {
      collections: [],
      filters: [],
      label: 'FBLite Core',
      metricNames: FBLITE_CORE,
      platformFilter: false,
    },
    {
      collections: [],
      filters: [],
      label: 'FBLite Core (Diagnostics)',
      metricNames: FBLITE_CORE_DIAGNOSTICS,
      platformFilter: false,
    },
    {
      collections: ['lite_interfaces:fblite:android:perf:core'],
      filters: [],
      label: 'FBLite Perf Core',
      metricNames: FBLITE_PERF_CORE,
      platformFilter: false,
    },
    {
      collections: ['search:serp_perf_client_w_direct_nav'],
      filters: [],
      label: 'Perf with direct nav',
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:search_perf_topline'],
      filters: [],
      label: 'Perf topline',
      metricNames: [],
      platformFilter: false,
    },
    {
      collections: ['search:serp_perf_client_ttrc'],
      filters: [],
      label: 'Perf client TTRC',
      metricNames: [],
      platformFilter: true,
    },
    {
      collections: ['search:serp_pagination_perf'],
      filters: [],
      label: 'SErp Pagination Perf',
      metricNames: [],
      platformFilter: false,
    },
  ];

  let platforms = ['comet_www', 'fblite_android'];
  let platform_chosen = prompt('Please enter platform: "comet_www", "fblite_android"');
  let open_tab_chosen = prompt('Please enter whether to open new tab: "y", "n"');
  if (platform_chosen !== '') {
    platforms = [platform_chosen];
  }

  const finalMetrics = [];
  for (const metric of metrics) {
    const {
      collections,
      filters,
      label,
      platformFilter,
      platformFiltersOnly,
    } = metric;

    if (!platformFiltersOnly) {
      finalMetrics.push(metric);
    }

    if (platformFilter) {
      for (const platform of platforms) {
        const updatedFilters = filters.slice() ?? [];
        updatedFilters.push({
          column: 'interface',
          mode: 1,
          values: [platform],
        });

        const metricWithPlatformFilter = {
          ...metric,
          filters: updatedFilters,
          label: `${label ?? collections[0]} (${platform})`,
        };

        finalMetrics.push(metricWithPlatformFilter);
      }
    }
  }

  for (const {control, experiment, test, type} of experiments) {
    console.log(`Experiment: ${experiment}`);
    for (const {
      collections,
      filters,
      label,
      metricNames,
      platformFilter,
    } of finalMetrics) {
      const config = {
        ads_metric_request: {
          breakdown: null,
          excluded_dates: [],
          filters: [],
          metrics: [],
          remove_blackout: true,
          selected_dates: [],
        },
        blackout_dates: [],
        delta_type: 9999,
        enable_skip_cache: false,
        enable_time_based_join: true,
        expand_exposures_to_cluster: false,
        exposure_filters: [],
        impx_query_service_request: null,
        is_visible: false,
        mdf_collection_names: collections,
        mdf_metric_names: metricNames,
        metric_absolute_end_time:
          Math.floor(Date.parse(endTime) / 1000) + SECONDS_IN_DAYS,
        metric_absolute_start_time:
          Math.floor(Date.parse(endTime) / 1000) +
          SECONDS_IN_DAYS -
          7 * SECONDS_IN_DAYS,
        metric_aggregation: 0,
        metric_column: '',
        metric_filters:
          filters != null
            ? filters.map(filter => {
                return {...filter, type: 0};
              })
            : null,
        metric_group_by_columns: [],
        metric_relative_end_time: '',
        metric_relative_start_time: '',
        metric_table: '',
        metric_type: 0,
        percentiles_to_analyze: [],
        population_filters: [],
        population_group_by_columns: [],
        query_service: 0,
        rollup_type: 9999,
        test_control_pair:
          type === 'qe'
            ? {
                control_group: control,
                experiment,
                framework: 0,
                test_group: test,
                universe: '',
              }
            : {
                control_group: control,
                experiment: test,
                framework: 1,
                test_group: control === 'control' ? 'testing' : 'control',
                universe: experiment,
              },
        use_cluster_level_analysis: false,
        use_clustoid: false,
        use_cross_app: false,
        use_precomp: false,
        use_relative_metric_time: false,
        use_warehouse: false,
        viz_type: 2,
      };
      let url = `https://www.internalfb.com/intern/deltoid3/?serialized_query=${encodeURIComponent(
        JSON.stringify(config),
      )}`;

      if (label != null) {
        url += `&custom_label=${encodeURIComponent(label)}`;
      }

      console.log(
        `${label ?? collections.concat(metricNames ?? []).join(', ')}:`,
        url,
      );
      if (open_tab_chosen === 'y'){
        window.open(url, '_blank');
      }
      
    }
  }
})();
