import { test, expect } from '@playwright/test';

test('Сгенерированный тест из HAR', async ({ request }) => {
  const _ts_simple_login_response = await request.post('/ts/simple/login', {
    data: {
      login: "Delova",,
      password: "1"
    }  });
  await expect(_ts_simple_login_response, 'Успешный запрос').toBeOK();
  const _ts_simple_login_responseJson = await _ts_simple_login_response.json();
  const _sedo_employee_bylogin_response = await request.post('/sedo/employee/bylogin', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_employee_bylogin_response, 'Успешный запрос').toBeOK();
  const _sedo_employee_bylogin_responseJson = await _sedo_employee_bylogin_response.json();
  const _sedo_task_statistic_response = await request.post('/sedo/task/statistic', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_statistic_response, 'Успешный запрос').toBeOK();
  const _sedo_task_statistic_responseJson = await _sedo_task_statistic_response.json();
  const _sedo_module_all_response = await request.post('/sedo/module/all', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_module_all_response, 'Успешный запрос').toBeOK();
  const _sedo_module_all_responseJson = await _sedo_module_all_response.json();
  const _sedo_ui_setting_all_response = await request.post('/sedo/ui/setting/all', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_ui_setting_all_response, 'Успешный запрос').toBeOK();
  const _sedo_ui_setting_all_responseJson = await _sedo_ui_setting_all_response.json();
  const _sedo_deputy_task_users_response = await request.post('/sedo/deputy/task/users', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_deputy_task_users_response, 'Успешный запрос').toBeOK();
  const _sedo_deputy_task_users_responseJson = await _sedo_deputy_task_users_response.json();
  const _sedo_pref_get_response = await request.post('/sedo/pref/get', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_pref_get_response, 'Успешный запрос').toBeOK();
  const _sedo_pref_get_responseJson = await _sedo_pref_get_response.json();
  const _sedo_security_certificates_response = await request.post('/sedo/security/certificates', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_security_certificates_response, 'Успешный запрос').toBeOK();
  const _sedo_security_certificates_responseJson = await _sedo_security_certificates_response.json();
  const _sedo_notification_sedo_count_response = await request.post('/sedo/notification/sedo/count', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_notification_sedo_count_response, 'Успешный запрос').toBeOK();
  const _sedo_notification_sedo_count_responseJson = await _sedo_notification_sedo_count_response.json();
  const _chat_chats_unread_count_by_chat_response = await request.post('/chat/chats/unread_count_by_chat', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_chat_chats_unread_count_by_chat_response, 'Успешный запрос').toBeOK();
  const _chat_chats_unread_count_by_chat_responseJson = await _chat_chats_unread_count_by_chat_response.json();
  const _sedo_type_config_purchases_response = await request.post('/sedo/type/config/purchases', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_type_config_purchases_response, 'Успешный запрос').toBeOK();
  const _sedo_type_config_purchases_responseJson = await _sedo_type_config_purchases_response.json();
  const _sedo_examination_incoming_types_response = await request.post('/sedo/examination/incoming_types', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_examination_incoming_types_response, 'Успешный запрос').toBeOK();
  const _sedo_examination_incoming_types_responseJson = await _sedo_examination_incoming_types_response.json();
  const _sedo_folder_listFolders_response = await request.post('/sedo/folder/listFolders', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_folder_listFolders_response, 'Успешный запрос').toBeOK();
  const _sedo_folder_listFolders_responseJson = await _sedo_folder_listFolders_response.json();
  const _upsd_psd_project_config_response = await request.post('/upsd/psd/project/config', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_upsd_psd_project_config_response, 'Успешный запрос').toBeOK();
  const _upsd_psd_project_config_responseJson = await _upsd_psd_project_config_response.json();
  const _sedo_maintenance_notice_response = await request.post('/sedo/maintenance/notice', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_maintenance_notice_response, 'Успешный запрос').toBeOK();
  const _sedo_maintenance_notice_responseJson = await _sedo_maintenance_notice_response.json();
  const _sedo_pref_filter_get_response = await request.post('/sedo/pref/filter/get', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_pref_filter_get_response, 'Успешный запрос').toBeOK();
  const _sedo_pref_filter_get_responseJson = await _sedo_pref_filter_get_response.json();
  const _sedo_type_config_response = await request.post('/sedo/type/config', {
    data: {
      type: "documentType",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_type_config_response, 'Успешный запрос').toBeOK();
  const _sedo_type_config_responseJson = await _sedo_type_config_response.json();
  const _sedo_type_config_response = await request.post('/sedo/type/config', {
    data: {
      type: "documentType",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_type_config_response, 'Успешный запрос').toBeOK();
  const _sedo_type_config_responseJson = await _sedo_type_config_response.json();
  const _sedo_type_config_response = await request.post('/sedo/type/config', {
    data: {
      type: "documentType",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_type_config_response, 'Успешный запрос').toBeOK();
  const _sedo_type_config_responseJson = await _sedo_type_config_response.json();
  const _upsd_psd_project_mes_response = await request.post('/upsd/psd/project/mes', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_upsd_psd_project_mes_response, 'Успешный запрос').toBeOK();
  const _upsd_psd_project_mes_responseJson = await _upsd_psd_project_mes_response.json();
  const _sedo_task_list_limit_25_offset_0_response = await request.post('/sedo/task/list?limit=25&offset=0', {
    data: {
      dueFrom: null,,
      dueTo: null,,
      docType: "ListTaskDocument",,
      parentCaption: "ЗАДАНИЯ",,
      userName: null,,
      createdInLastMonths: null,,
      filters: [
    ],,
      docTypes: [
    ],,
      withAppointedExecutors: true,,
      sort: [
      {
      property: "importantDocument",,
      direction: "desc"
    },
      {
      property: "urgentDocument",,
      direction: "desc"
    },
      {
      property: "default",,
      direction: "desc"
    }
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_list_limit_25_offset_0_response, 'Успешный запрос').toBeOK();
  const _sedo_task_list_limit_25_offset_0_responseJson = await _sedo_task_list_limit_25_offset_0_response.json();
  const _sedo_task_filters_response = await request.post('/sedo/task/filters', {
    data: {
      dueFrom: null,,
      dueTo: null,,
      docType: "ListTaskDocument",,
      parentCaption: "ЗАДАНИЯ",,
      userName: null,,
      createdInLastMonths: null,,
      filters: [
    ],,
      docTypes: [
    ],,
      withAppointedExecutors: true,,
      sort: [
      {
      property: "importantDocument",,
      direction: "desc"
    },
      {
      property: "urgentDocument",,
      direction: "desc"
    },
      {
      property: "default",,
      direction: "desc"
    }
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_filters_response, 'Успешный запрос').toBeOK();
  const _sedo_task_filters_responseJson = await _sedo_task_filters_response.json();
  const _sedo_task_statistic_response = await request.post('/sedo/task/statistic', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_statistic_response, 'Успешный запрос').toBeOK();
  const _sedo_task_statistic_responseJson = await _sedo_task_statistic_response.json();
  const _sedo_content_edit_list_response = await request.post('/sedo/content/edit/list', {
    data: {
      ids: [
      "00000002000n42tg",
      "00000002000ms8qk",
      "00000002000ms8qk",
      "00000002000fbgkc",
      "00000002000hwm81",
      "00000002000doi28",
      "00000002000ms8qk",
      "00000002000doi28",
      "00000002000doi28",
      "00000002001b1hkd",
      "00000002001atbi8",
      "00000002001e3gw0",
      "00000002001cr2ma",
      "00000002001dzq47",
      "00000002001df0pr",
      "00000002001df0pr",
      "00000002001df0pr",
      "00000002001dxvzv",
      "00000002001dvsqs",
      "00000002001dvsqs",
      "00000002001cr2ma",
      "00000002001dl0qq",
      "00000002001drseb",
      "00000002001drkcp",
      "00000002000n42tg"
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_edit_list_response, 'Успешный запрос').toBeOK();
  const _sedo_content_edit_list_responseJson = await _sedo_content_edit_list_response.json();
  const _sedo_task_filters_response = await request.post('/sedo/task/filters', {
    data: {
      dueFrom: null,,
      dueTo: null,,
      docType: "ListTaskDocument",,
      parentCaption: "ЗАДАНИЯ",,
      userName: null,,
      createdInLastMonths: null,,
      filters: [
    ],,
      docTypes: [
    ],,
      withAppointedExecutors: true,,
      sort: [
      {
      property: "importantDocument",,
      direction: "desc"
    },
      {
      property: "urgentDocument",,
      direction: "desc"
    },
      {
      property: "default",,
      direction: "desc"
    }
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_filters_response, 'Успешный запрос').toBeOK();
  const _sedo_task_filters_responseJson = await _sedo_task_filters_response.json();
  const _sedo_favorite_list_response = await request.post('/sedo/favorite/list', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_favorite_list_response, 'Успешный запрос').toBeOK();
  const _sedo_favorite_list_responseJson = await _sedo_favorite_list_response.json();
  const _sedo_classification_response = await request.post('/sedo/classification', {
    data: {
      query: null,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_classification_response, 'Успешный запрос').toBeOK();
  const _sedo_classification_responseJson = await _sedo_classification_response.json();
  const _sedo_classification_00xxxxxx000006iq_template_response = await request.post('/sedo/classification/00xxxxxx000006iq/template', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_classification_00xxxxxx000006iq_template_response, 'Успешный запрос').toBeOK();
  const _sedo_classification_00xxxxxx000006iq_template_responseJson = await _sedo_classification_00xxxxxx000006iq_template_response.json();
  const _sedo_document_create_from_classification_response = await request.post('/sedo/document/create/from_classification', {
    data: {
      classificationId: "00xxxxxx000006iq",,
      useContentTemplate: false,,
      templateContentId: null,,
      useAutogeneratedContent: true,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_create_from_classification_response, 'Успешный запрос').toBeOK();
  const _sedo_document_create_from_classification_responseJson = await _sedo_document_create_from_classification_response.json();
  const _sedo_maintenance_notice_response = await request.post('/sedo/maintenance/notice', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_maintenance_notice_response, 'Успешный запрос').toBeOK();
  const _sedo_maintenance_notice_responseJson = await _sedo_maintenance_notice_response.json();
  const _sedo_doc_settings_get_response = await request.post('/sedo/doc_settings/get', {
    data: {
      documentType: "ddt_outcoming_type_doc",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_doc_settings_get_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_responseJson = await _sedo_doc_settings_get_response.json();
  const _sedo_employee_00xxxxxx000012bj_response = await request.post('/sedo/employee/00xxxxxx000012bj', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_employee_00xxxxxx000012bj_response, 'Успешный запрос').toBeOK();
  const _sedo_employee_00xxxxxx000012bj_responseJson = await _sedo_employee_00xxxxxx000012bj_response.json();
  const _sedo_task_active_response = await request.post('/sedo/task/active', {
    data: {
      filter: {
      performerId: "00xxxxxx000012bj"
    },,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_active_response, 'Успешный запрос').toBeOK();
  const _sedo_task_active_responseJson = await _sedo_task_active_response.json();
  const _sedo_content_edit_list_response = await request.post('/sedo/content/edit/list', {
    data: {
      ids: [
      null
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_edit_list_response, 'Успешный запрос').toBeOK();
  const _sedo_content_edit_list_responseJson = await _sedo_content_edit_list_response.json();
  const _sedo_type_config_ddt_outcoming_type_doc_design_response = await request.post('/sedo/type/config/ddt_outcoming_type_doc/design', {
    data: {
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_type_config_ddt_outcoming_type_doc_design_response, 'Успешный запрос').toBeOK();
  const _sedo_type_config_ddt_outcoming_type_doc_design_responseJson = await _sedo_type_config_ddt_outcoming_type_doc_design_response.json();
  const _sedo_entity_list_limit_100_offset_0_response = await request.post('/sedo/entity/list?limit=100&offset=0', {
    data: {
      id: "dsid_stamp",,
      type: "ddt_dict_stamp",,
      docType: "ddt_outcoming_type_doc",,
      sortType: null,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_entity_list_limit_100_offset_0_response, 'Успешный запрос').toBeOK();
  const _sedo_entity_list_limit_100_offset_0_responseJson = await _sedo_entity_list_limit_100_offset_0_response.json();
  const _sedo_reservation_reg_number_attributes_ddt_outcoming_type_doc_response = await request.post('/sedo/reservation_reg_number/attributes/ddt_outcoming_type_doc', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_reservation_reg_number_attributes_ddt_outcoming_type_doc_response, 'Успешный запрос').toBeOK();
  const _sedo_reservation_reg_number_attributes_ddt_outcoming_type_doc_responseJson = await _sedo_reservation_reg_number_attributes_ddt_outcoming_type_doc_response.json();
  const _sedo_employee_query_response = await request.post('/sedo/employee/query', {
    data: {
      filter: {
      signature: "min_position_level",,
      stamp: "00xxxxxx000003rm",,
      filterIds: null,,
      restrictDocumentParticipants: false,,
      notFederated: false,,
      source: "ddt_outcoming_type_doc.dsid_signer_empl",,
      isCombobox: true,,
      isCurrentPlatform: false
    },,
      sort: null,,
      limit: 10,,
      offset: 0,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_employee_query_response, 'Успешный запрос').toBeOK();
  const _sedo_employee_query_responseJson = await _sedo_employee_query_response.json();
  const _sedo_content_edit_list_response = await request.post('/sedo/content/edit/list', {
    data: {
      ids: [
      null
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_edit_list_response, 'Успешный запрос').toBeOK();
  const _sedo_content_edit_list_responseJson = await _sedo_content_edit_list_response.json();
  const _sedo_document_create_response = await request.post('/sedo/document/create', {
    data: {
      useContentTemplate: false,,
      values: {
      dsid_nomenclature: null,,
      dsb_required_addressee: false,,
      dss_addressee_branch: null,,
      dsid_executor_empl: "00xxxxxx000012bj",,
      dss_signer_branch: null,,
      dsid_classification: "00xxxxxx000006iq",,
      dsid_stamp: "00xxxxxx000003rm",,
      dss_home: "TEST",,
      dsid_agent_person: null,,
      dss_addressee_organization: null,,
      dss_signer_organization: null,,
      dsid_author_empl: "00xxxxxx000012bj",,
      dsid_document_kind: "00000002000021gg",,
      useAutogeneratedContent: true,,
      dss_status: "unsaved",,
      dsid_policy: "00xxxxxx0000059t",,
      dss_description: "213123123",,
      dsid_signer_empl: "00000002000ktv2k",,
      dsid_signer_empl_label: "NikTest1 NikTest1 NikTest1, 	Инженер по релейной защите и автомат.2к.",,
      dsid_signer_empl_position_name: null,,
      dsid_signer_empl_dss_user_name: "NikTest1",,
      dsid_signer_empl_emplId: "00000002000ktv2k",,
      type_content: true,,
      dss_content_name: null
    },,
      type: "ddt_outcoming_type_doc",,
      stages: [
    ],,
      resolutions: [
    ],,
      tags: [
    ],,
      attachments: [
    ],,
      performers: [
    ],,
      autoTemplate: true,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_create_response, 'Успешный запрос').toBeOK();
  const _sedo_document_create_responseJson = await _sedo_document_create_response.json();
  const _sedo_document_get_response = await request.post('/sedo/document/get', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_get_response, 'Успешный запрос').toBeOK();
  const _sedo_document_get_responseJson = await _sedo_document_get_response.json();
  const _sedo_task_statistic_response = await request.post('/sedo/task/statistic', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_statistic_response, 'Успешный запрос').toBeOK();
  const _sedo_task_statistic_responseJson = await _sedo_task_statistic_response.json();
  const _sedo_document_get_audit_response = await request.post('/sedo/document/get/audit', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_get_audit_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_response = await request.post('/sedo/doc_settings/get', {
    data: {
      dsidDocument: "00000002001e4ax0",,
      documentType: "ddt_outcoming_type_doc",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_doc_settings_get_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_responseJson = await _sedo_doc_settings_get_response.json();
  const _sedo_version_list_00000002001e4axf_response = await request.post('/sedo/version/list/00000002001e4axf', {
    data: {
      limit: 25,,
      offset: 0,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_version_list_00000002001e4axf_response, 'Успешный запрос').toBeOK();
  const _sedo_version_list_00000002001e4axf_responseJson = await _sedo_version_list_00000002001e4axf_response.json();
  const _sedo_entity_list_response = await request.post('/sedo/entity/list', {
    data: {
      type: "ddt_dict_type_content",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_entity_list_response, 'Успешный запрос').toBeOK();
  const _sedo_entity_list_responseJson = await _sedo_entity_list_response.json();
  const _sedo_content_groups_response = await request.post('/sedo/content/groups', {
    data: {
      documentId: "00000002001e4ax0",,
      docType: "ddt_outcoming_type_doc",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_groups_response, 'Успешный запрос').toBeOK();
  const _sedo_content_groups_responseJson = await _sedo_content_groups_response.json();
  const _sedo_content_filters_response = await request.post('/sedo/content/filters', {
    data: {
      id: "00000002001e4ax0",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_filters_response, 'Успешный запрос').toBeOK();
  const _sedo_content_filters_responseJson = await _sedo_content_filters_response.json();
  const _sedo_content_version_list_response = await request.post('/sedo/content/version/list', {
    data: {
      filter: {
      dsb_current: true,,
      docId: "00000002001e4ax0"
    },,
      limit: 101,,
      offset: 0,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_version_list_response, 'Успешный запрос').toBeOK();
  const _sedo_content_version_list_responseJson = await _sedo_content_version_list_response.json();
  const _sedo_task_promote_response = await request.post('/sedo/task/promote', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      signal: "register_approved",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_promote_response, 'Успешный запрос').toBeOK();
  const _sedo_document_get_response = await request.post('/sedo/document/get', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      stamp: "00xxxxxx000003rm",,
      useForScanning: false,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_get_response, 'Успешный запрос').toBeOK();
  const _sedo_document_get_responseJson = await _sedo_document_get_response.json();
  const _sedo_task_statistic_response = await request.post('/sedo/task/statistic', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_task_statistic_response, 'Успешный запрос').toBeOK();
  const _sedo_task_statistic_responseJson = await _sedo_task_statistic_response.json();
  const _sedo_document_get_audit_response = await request.post('/sedo/document/get/audit', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      stamp: "00xxxxxx000003rm",,
      useForScanning: false,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_get_audit_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_response = await request.post('/sedo/doc_settings/get', {
    data: {
      dsidDocument: "00000002001e4ax0",,
      documentType: "ddt_outcoming_type_doc",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_doc_settings_get_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_responseJson = await _sedo_doc_settings_get_response.json();
  const _sedo_addressee_list_response = await request.post('/sedo/addressee/list', {
    data: {
      documentId: "00000002001e4ax0",,
      documentType: "ddt_outcoming_type_doc",,
      agentsSort: {
    },,
      internalSort: {
    },,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_addressee_list_response, 'Успешный запрос').toBeOK();
  const _sedo_addressee_list_responseJson = await _sedo_addressee_list_response.json();
  const _sedo_employee_query_response = await request.post('/sedo/employee/query', {
    data: {
      filter: {
      filterIds: [
    ],,
      docId: "00000002001e4ax0",,
      restrictDocumentParticipants: false,,
      notFederated: false,,
      stamp: "00xxxxxx000003rm",,
      source: "addressees.selectedUsers",,
      isCombobox: true
    },,
      sort: null,,
      limit: 10,,
      offset: 0,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_employee_query_response, 'Успешный запрос').toBeOK();
  const _sedo_employee_query_responseJson = await _sedo_employee_query_response.json();
  const _sedo_orgstructure_organizations_response = await request.post('/sedo/orgstructure/organizations', {
    data: {
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_orgstructure_organizations_response, 'Успешный запрос').toBeOK();
  const _sedo_orgstructure_organizations_responseJson = await _sedo_orgstructure_organizations_response.json();
  const _sedo_orgstructure_branches_response = await request.post('/sedo/orgstructure/branches', {
    data: {
      id: "00xxxxxx0000121g",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_orgstructure_branches_response, 'Успешный запрос').toBeOK();
  const _sedo_orgstructure_branches_responseJson = await _sedo_orgstructure_branches_response.json();
  const _sedo_orgstructure_departments_response = await request.post('/sedo/orgstructure/departments', {
    data: {
      branchIds: [
      "000000020002owef"
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_orgstructure_departments_response, 'Успешный запрос').toBeOK();
  const _sedo_orgstructure_departments_responseJson = await _sedo_orgstructure_departments_response.json();
  const _sedo_pref_create_or_update_response = await request.post('/sedo/pref/create_or_update', {
    data: {
      prefKey: "columnsVisibilityPrefKey",,
      prefValue: "{"TaskListAll":[{"key":"taskType","visible":true,"index":0},{"key":"documentRegDate","visible":true,"index":1},{"key":"urgentDocument","visible":true,"index":2},{"key":"documentControlType","visible":true,"index":3},{"key":"DateExecution","visible":true,"index":4},{"key":"resolutionControl","visible":true,"index":5},{"key":"dssResolutionDescription","visible":true,"index":6},{"key":"performerEmployee","visible":true,"index":7},{"key":"appointedExecutors","visible":true,"index":8},{"key":"documentDescription","visible":true,"index":9},{"key":"documentStatus","visible":true,"index":10},{"key":"authorEmplId","visible":true,"index":11},{"key":"documentTerm","visible":true,"index":12},{"key":"stamp","visible":false,"index":13},{"key":"agentOrganization","visible":false,"index":14}],"ListOfLatestDocuments":[{"key":"documentRegDate","visible":true,"index":0},{"key":"documentDescription","visible":true,"index":1},{"key":"dssStatus","visible":true,"index":2},{"key":"performerEmplId","visible":true,"index":3}],"TaskListCompleted":[{"key":"taskType","visible":true,"index":0},{"key":"documentRegDate","visible":true,"index":1},{"key":"urgentDocument","visible":true,"index":2},{"key":"documentControlType","visible":true,"index":3},{"key":"DateExecution","visible":true,"index":4},{"key":"resolutionControl","visible":true,"index":5},{"key":"dssResolutionDescription","visible":true,"index":6},{"key":"performerEmployee","visible":true,"index":7},{"key":"appointedExecutors","visible":true,"index":8},{"key":"documentDescription","visible":true,"index":9},{"key":"authorEmplId","visible":true,"index":10},{"key":"taskExecuteDate","visible":true,"index":11},{"key":"actualPerformer","visible":true,"index":12},{"key":"documentTerm","visible":true,"index":13},{"key":"stamp","visible":false,"index":14},{"key":"agentOrganization","visible":false,"index":15}],"memberCommission":[{"label":"ФИО/Должность","key":"employeeId","width":"300px","type":"ORGRSTURCTURE","format":[null,null],"visible":true},{"label":"Организация","key":"organization","type":"INLINE_TEXT","visible":true},{"label":"Отдел","key":"branch","type":"INLINE_TEXT","visible":true}],"questionHistoryList":[{"label":"Вопрос","key":"questionNumber","width":"100px","type":"INLINE_TEXT","visible":true},{"label":"Секретарь","key":"secretary","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"visible":true},{"label":"Присвоенный статус","key":"newStatusName","width":"150px","type":"INLINE_TEXT","visible":true},{"label":"Предыдущий статус","key":"oldStatusName","width":"150px","type":"INLINE_TEXT","visible":true},{"label":"Дата изменения статуса","key":"modifiedAt","width":"150px","type":"INLINE_TEXT","sortField":"modifiedAt","visible":true}],"attachedTable":[{"label":"Документ","key":"documentStatus","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"regDate","label":"Дата документа"},{"id":"regNumber","label":"Номер документа"},{"id":"typeDisplay","label":"Тип/Подтип документа"}],"visible":true},{"label":"Краткое содержание","key":"description","width":"200px","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Автор","key":"author","width":"200px","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Дата","key":"creationDate","width":"200px","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Размер","key":"contentSize","width":"200px","type":"INLINE_TEXT","format":[null,null],"visible":true}],"searchDocument":[{"label":"Документ","key":"DocumentType","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["dss_reg_number","dsdt_reg_date"],"component":"DocumentTypeTableColumn","sortField":"dsdt_reg_date","index":1,"visible":true},{"label":"Краткое содержание","key":"dss_description","width":"300px","type":"AREA_TEXT","format":[null,null],"title":"Краткое содержание","sortField":"dss_description","printParams":["dss_description"],"component":"DescriptionTableColumn","index":0,"visible":true},{"label":"Процессуальный документ","key":"dsb_procedural","width":"50px","type":"ICON","format":[null,null],"title":"Процессуальный документ","sortField":"dsb_procedural","printParams":["dsb_procedural"],"component":"DescriptionTableColumn","index":2,"visible":true},{"label":"Согласующее лицо","key":"dsid_approver_empl","width":"350px","type":"ORGRSTURCTURE","format":[null,null],"title":"Согласующее лицо","sortField":"dsid_approver_empl","printParams":["dsid_approver_empl"],"component":"UserInfoColumn","index":3,"visible":true},{"label":"Организация подписанта","key":"dss_signer_organization","type":"AREA_TEXT","format":[null,null],"defaultVisible":true,"title":"Организация подписанта","sortField":"dss_signer_organization","printParams":["dss_signer_organization"],"component":"DescriptionTableColumn","index":4,"visible":true},{"label":"Подписант (ВРИО)","key":"dsid_vrio_empl","width":"350px","type":"ORGRSTURCTURE","format":[null,null],"title":"Подписант (ВРИО)","sortField":"dsid_vrio_empl","printParams":["dsid_vrio_empl"],"component":"UserInfoColumn","index":5,"visible":true},{"label":"Инициатор","key":"dsid_executor_empl","width":"350px","type":"ORGRSTURCTURE","format":[null,null],"title":"Инициатор","sortField":"dsid_executor_empl","printParams":["dsid_executor_empl"],"component":"UserInfoColumn","index":6,"visible":true},{"label":"Филиал подписанта","key":"dss_signer_branch","type":"AREA_TEXT","format":[null,null],"defaultVisible":true,"title":"Филиал подписанта","sortField":"dss_signer_branch","printParams":["dss_signer_branch"],"component":"DescriptionTableColumn","index":7,"visible":true},{"label":"Подписант","key":"dsid_signer_empl","width":"350px","type":"ORGRSTURCTURE","format":[null,null],"title":"Подписант","sortField":"dsid_signer_empl","printParams":["dsid_signer_empl"],"component":"UserInfoColumn","index":8,"visible":true},{"label":"Внутренний адресат","key":"drid_addressee_empl","width":"350px","type":"ORGRSTURCTURE","format":[null,null],"title":"Внутренний адресат","printParams":["drid_addressee_empl"],"component":"UserInfoColumn","index":9,"visible":true},{"label":"Вид документа","key":"dsid_document_kind","type":"AREA_TEXT","format":[null,null],"defaultVisible":true,"title":"Вид документа","sortField":"dsid_document_kind","printParams":["dsid_document_kind"],"component":"DescriptionTableColumn","index":10,"visible":true},{"label":"Автор","key":"dsid_author_empl","width":"350px","type":"ORGRSTURCTURE","format":[null,null],"title":"Автор","sortField":"dsid_author_empl","printParams":["dsid_author_empl"],"component":"UserInfoColumn","index":11,"visible":true},{"label":"Дата регистрации","key":"dsdt_reg_date","type":"AREA_TEXT","format":[null,null],"title":"Дата регистрации","sortField":"dsdt_reg_date","printParams":["dsdt_reg_date"],"component":"DescriptionTableColumn","index":12,"visible":true},{"label":"ic_error","key":"dsb_important","width":"50px","type":"ICON","format":[null,null],"title":"Важный документ","sortField":"dsb_important","printParams":["dsb_important"],"component":"DescriptionTableColumn","index":13,"visible":true},{"label":"Договор основание","key":"dsid_document_basis","width":"300px","type":"INLINE_TEXT","format":[null,null],"title":"Договор основание","sortField":"dsid_document_basis","component":"DocumentTypeTableColumn","index":14,"visible":true},{"label":"Проект","key":"drid_project","width":"300px","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"title":"Проект","sortField":"drid_project","printParams":["drid_project"],"component":"DescriptionTableColumn","index":15,"visible":false},{"label":"Гриф","key":"dsid_stamp","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Гриф","sortField":"stamp","printParams":["dsid_stamp"],"component":"DescriptionTableColumn","index":16,"visible":false}],"auditHistory":[{"label":"Исполнитель","key":"documentExecutor","type":"ORGRSTURCTURE","format":[null,null],"sortField":"documentExecutor","visible":true},{"label":"Событие","key":"eventLabel","type":"INLINE_TEXT","sortField":"eventLabel","visible":true},{"label":"Дата","key":"eventDate","type":"INLINE_TEXT","sortField":"eventDate","visible":true},{"label":"Замещаемый","key":"documentDeputize","type":"ORGRSTURCTURE","format":[null,null],"sortField":"documentDeputize","visible":true},{"label":"Описание","key":"description","type":"AREA_TEXT","format":[null,null],"sortField":"description","visible":true}],"auditHistoryCompact":[{"label":"Наименование","key":"eventLabel","type":"INLINE_TEXT","format":[null,null],"sortField":"eventLabel","visible":true},{"label":"Этап","key":"stageInfo","type":"INLINE_TEXT","sortField":"stageInfo","visible":true},{"label":"Итерация","key":"stageIteration","type":"INLINE_TEXT","sortField":"stageIteration","visible":true},{"label":"Статус","key":"status","type":"INLINE_TEXT","sortField":"status","visible":true},{"label":"Исполнитель","key":"performerFio","type":"INLINE_TEXT","sortField":"performerFio","visible":true},{"label":"Должность исполнителя","key":"performerPosition","type":"INLINE_TEXT","sortField":"performerPosition","visible":true},{"label":"Дата получения","key":"taskReceiveDate","type":"INLINE_TEXT","sortField":"taskReceiveDate","visible":true},{"label":"Дата начала работы","key":"taskReadDate","type":"INLINE_TEXT","sortField":"taskReadDate","visible":true},{"label":"Дата окончания работы","key":"taskExecutionDate","type":"INLINE_TEXT","sortField":"taskExecutionDate","visible":true},{"label":"Описание","key":"description","type":"AREA_TEXT","format":[null,null],"sortField":"description","visible":true},{"label":"Замещаемый","key":"documentDeputize","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"sortField":"documentDeputize","visible":false}],"LinksDocuments":[{"key":"document","visible":true,"index":0},{"key":"documentDescription","visible":true,"index":1},{"key":"notificationType","visible":true,"index":2},{"key":"notificationAuthor","visible":true,"index":3},{"key":"notificationDate","visible":true,"index":4},{"key":"extension","visible":true,"index":5},{"key":"notificationDirection","visible":true,"index":6},{"key":"notificationComment","visible":true,"index":7},{"key":"organization","visible":false,"index":8},{"key":"branch","visible":false,"index":9}],"userInputList":[{"key":"emplId","visible":true,"index":0},{"key":"department","visible":true,"index":1},{"key":"organization","visible":true,"index":2},{"key":"branch","visible":true,"index":3}],"ListCorrespondents":[{"label":"","key":"editIcon","type":"ICON","format":[null,null],"fixedWidth":"50px","visible":true},{"label":"ФИО","key":"dssPersonFio","width":"250px","type":"INLINE_TEXT","format":[null,null],"sortField":"dssPersonFio","visible":true},{"label":"Должность","key":"dssPersonPosition","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"dssPersonPosition","visible":true},{"label":"Название организации","key":"organization","width":"250px","type":"INLINE_TEXT","format":[null,null],"sortField":"organization","visible":true},{"label":"Филиал","key":"agentFolderBranch","width":"250px","type":"INLINE_TEXT","format":[null,null],"sortField":"agentFolderBranch","visible":true},{"label":"Тип","key":"dsbIndividual","width":"80px","type":"INLINE_TEXT","format":[null,null],"sortField":"dsbIndividual","visible":true},{"label":"Код","key":"codeNum","width":"80px","type":"INLINE_TEXT","format":[null,null],"sortField":"codeNum","visible":true},{"label":"Инн","key":"dssInn","width":"120px","type":"INLINE_TEXT","format":[null,null],"sortField":"dssInn","visible":true},{"label":"Кпп","key":"dssKpp","width":"120px","type":"INLINE_TEXT","format":[null,null],"sortField":"dssKpp","visible":true}],"InternalAddressees":[{"label":"Адресат","key":"Адресат","type":"ORGRSTURCTURE","format":[null,null],"sortField":"fio","visible":true},{"label":"Организация","key":"organization","type":"AREA_TEXT","format":[null,null],"sortField":"organization","visible":true},{"label":"Статус","key":"status","type":"AREA_TEXT","format":[null,null],"sortField":"status","visible":true},{"label":"Дата отправки","key":"dsdtSentDate","type":"INLINE_TEXT","visible":true}],"ExternalAddressees":[{"label":"Адресат","key":"Адресат","type":"ORGRSTURCTURE","format":[null,null],"sortField":"fio","visible":true},{"label":"Организация","key":"Организация","type":"AREA_TEXT","format":[null,null],"sortField":"organization","visible":true},{"label":"Электронный адрес","key":"Электронный адрес","type":"AREA_TEXT","format":[null,null],"defaultVisible":false,"sortField":"email","visible":false},{"label":"Филиал","key":"Филиал","type":"AREA_TEXT","format":[null,null],"defaultVisible":false,"sortField":"branch","visible":false},{"label":"Статус отправки","key":"Статус отправки","type":"AREA_TEXT","format":[null,null],"defaultVisible":false,"sortField":"mailingStatusName","visible":false},{"label":"Дата отправки","key":"Дата отправки","type":"AREA_TEXT","format":[null,null],"defaultVisible":false,"sortField":"mailingSentDate","visible":false}],"LinkedApplications":[{"label":"Формат","key":"format","width":"300px","format":[null,null],"sortField":"format","visible":true},{"label":"Краткое содержание","key":"description","width":"300px","type":"INLINE_TEXT","format":[null,null],"sortField":"description","visible":true},{"label":"Тип связи","key":"contentType","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"contentType","visible":true},{"label":"Автор","key":"notificationAuthor","type":"ORGRSTURCTURE","format":[null,null],"sortField":"notificationAuthor","visible":true},{"label":"Дата добавления","key":"creationDate","type":"INLINE_TEXT","format":[null,null],"sortField":"notificationDate","visible":true},{"label":"Размер файла","key":"size","type":"INLINE_TEXT","format":[null,null],"sortField":"size","visible":true}],"ResolutionExecutionHistory":[{"label":"Текст комментария","key":"comment","width":"400px","type":"AREA_TEXT","format":[null,null],"sortField":"body","visible":true},{"label":"Автор","key":"author","width":"140px","type":"AREA_TEXT","format":[null,null],"sortField":"author","visible":true},{"label":"Организация","key":"organization","width":"140px","type":"AREA_TEXT","format":[null,null],"sortField":"organization","visible":true},{"label":"Дата создания","key":"createdAt","width":"100px","type":"AREA_TEXT","format":[null,null],"sortField":"creationDate","visible":true},{"label":"Статус","key":"status","width":"100px","type":"AREA_TEXT","format":[null,null],"sortField":"status","visible":true},{"label":"Тип замечания","key":"docStatus","width":"160px","type":"AREA_TEXT","format":[null,null],"sortField":"docStatus","visible":true},{"label":"","key":"blocked","type":"ICON","format":[null,null],"fixedWidth":"16px","visible":true}],"ReconciliationDocument":[{"key":"user","visible":true,"index":0},{"key":"delegate","visible":true,"index":1},{"key":"organization","visible":true,"index":2},{"key":"branch","visible":true,"index":3},{"key":"dssStatus","visible":true,"index":4},{"key":"author","visible":true,"index":5}],"ddt_outcoming_type_doc":[{"key":"DocumentType","visible":true,"index":0},{"key":"dss_description","visible":true,"index":1},{"key":"dsb_procedural","visible":true,"index":2},{"key":"dsid_approver_empl","visible":true,"index":3},{"key":"dss_signer_organization","visible":true,"index":4},{"key":"dsid_vrio_empl","visible":true,"index":5},{"key":"dsid_executor_empl","visible":true,"index":6},{"key":"dss_signer_branch","visible":true,"index":7},{"key":"dsid_signer_empl","visible":true,"index":8},{"key":"drid_addressee_empl","visible":true,"index":9},{"key":"dsid_document_basis","visible":true,"index":14},{"key":"dss_addressee_organization","visible":true},{"key":"dsid_register_empl","visible":true},{"key":"dss_agent_index","visible":true},{"key":"dsid_author_empl","visible":true,"index":11},{"key":"dsdt_reg_date","visible":true,"index":12},{"key":"dsb_important","visible":true,"index":13},{"key":"drid_project","visible":false,"index":15},{"key":"dsid_stamp","visible":false,"index":16}],"NotificationList":[{"key":"notifyLabel","visible":true,"index":0},{"key":"documentRegDate","visible":true,"index":1},{"key":"documentDescription","visible":true,"index":2},{"key":"creationDate","visible":true,"index":3},{"key":"performerEmplId","visible":true,"index":4},{"key":"authorEmplId","visible":true,"index":5},{"key":"resolutionDescription","visible":true,"index":6},{"key":"signer","visible":true,"index":7},{"key":"documentStatus","visible":true,"index":8},{"key":"resolutionAuthor","visible":true,"index":9},{"key":"performerFio","visible":true,"index":10}],"TaskListWeek":[{"label":"Задание","key":"taskType","width":"380px","type":"AREA_TEXT","format":[null,null],"sortFields":[{"id":"taskType","label":"Тип задания"},{"id":"dueDate","label":"Срок"},{"id":"creationDate","label":"Дата поступления"}],"sortField":"dsdt_creation_date","printParams":["taskType","creationDate"],"component":"DocumentNameTableComponent","visible":true},{"label":"Документ","key":"documentRegDate","width":"280px","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"display","label":"Тип/подтип документа"},{"id":"documentRegNumber","label":"Номер"},{"id":"documentCreationDate","label":"Дата"}],"sortField":"dsdt_creation_date","printParamsCompactRowsMode":["documentTypeName","documentCreationDate"],"printParams":["documentTypeName","documentRegNumber","documentCreationDate"],"component":"DocumentTypeTableColumn","visible":true},{"label":"attention","key":"urgentDocument","type":"ICON","format":[null,null],"title":"Важный/Срочный документ","fixedWidth":"50px","sortField":"urgentDocument","printParams":["urgentDocument"],"component":"DescriptionTableColumn","visible":true},{"label":"arrow","key":"documentControlType","type":"ICON","format":[null,null],"title":"Контроль документа","fixedWidth":"50px","sortField":"documentControlType","printParams":["documentControlType"],"component":"DescriptionTableColumn","visible":true},{"label":"flag","key":"DateExecution","type":"ICON","format":[null,null],"title":"Срок исполнения резолюций","fixedWidth":"50px","sortField":"resolution_overdue_state","printParams":["resolutionLessThan5DaysOverdue","resolutionLessThan10DaysOverdue","resolutionOverdue","resolutionNotOverdue"],"component":"DescriptionTableColumn","visible":true},{"label":"ic_control","key":"resolutionControl","type":"ICON","format":[null,null],"title":"Контроль резолюции","fixedWidth":"50px","sortField":"resolutionControl","printParams":["resolutionControl"],"component":"DescriptionTableColumn","visible":true},{"label":"Содержание резолюции","key":"dssResolutionDescription","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"resolutionDescription","printParams":["dssResolutionDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"От кого","key":"performerEmployee","type":"ORGRSTURCTURE","format":[null,null],"sortField":"dss_from_whom_last_name&orderBy=dss_from_whom_first_name&orderBy=dss_from_whom_middle_name","printParams":["fromWhomEmployee"],"component":"UserInfoColumn","visible":true},{"label":"Назначенный исполнитель","key":"appointedExecutors","width":"300px","type":"AREA_TEXT","format":[null,null],"defaultVisible":true,"printParams":["appointedExecutors"],"component":"UserInfoColumn","visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"300px","type":"AREA_TEXT","format":[null,null],"sortField":"dss_document_description","printParams":["documentDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"Статус документа","key":"documentStatus","width":"130px","type":"AREA_TEXT","format":[null,null],"sortField":"dss_document_status","printParams":["documentStatus"],"component":"DescriptionTableColumn","visible":true},{"label":"Автор документа","key":"authorEmplId","type":"ORGRSTURCTURE","format":[null,null],"sortField":"dss_author_fio","printParams":["authorFio","authorPosition"],"component":"UserInfoColumn","visible":true},{"label":"Срок документа","key":"documentTerm","type":"INLINE_TEXT","format":[null,null],"sortField":"documentTerm","printParams":["documentTerm"],"component":"DescriptionTableColumn","visible":true},{"label":"Гриф","key":"stamp","width":"50px","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"sortField":"dsid_stamp","printParams":["stamp"],"component":"DescriptionTableColumn","visible":false},{"label":"Организация корреспондента","key":"agentOrganization","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"sortField":"agentOrganization","printParams":["agentOrganization"],"component":"DescriptionTableColumn","visible":false}],"ResolutionsListIncome":[{"key":"message","visible":true,"index":0},{"key":"creationDate","visible":true,"index":1},{"key":"dateRange","visible":true,"index":2},{"key":"initiator","visible":true,"index":3},{"key":"documentRegDate","visible":true,"index":4},{"key":"documentDescription","visible":true,"index":5},{"key":"stamp","visible":true,"index":6},{"key":"coPerformers","visible":true,"index":7},{"key":"importantDocument","visible":true,"index":8},{"key":"urgencyDocument","visible":true,"index":9},{"key":"documentControlType","visible":true,"index":10},{"key":"resolutionOverdue","visible":true,"index":11},{"key":"resolutionControl","visible":true,"index":12},{"key":"author","visible":true,"index":13},{"key":"controller","visible":true,"index":14},{"key":"appointedExecutors","visible":true,"index":15},{"key":"state","visible":false,"index":16}],"folders":[{"label":"Название","key":"folderName","width":"380px","type":"AREA_TEXT","visible":true}],"daughterPowerOfAttorney":[{"label":"Документ","key":"documentStatus","type":"AREA_TEXT","format":[null,null],"visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"300px","type":"INLINE_TEXT","format":[null,null],"visible":true}],"linked-uploads":[{"label":"Документ","key":"document","type":"AREA_TEXT","format":[null,null],"visible":true},{"label":"Комментарий","key":"comment","type":"INLINE_TEXT","format":[null,null],"visible":true}],"ReportsList":[{"label":"Имя","key":"name","type":"INLINE_TEXT","sortField":"name","visible":true},{"label":"Описание","key":"description","type":"INLINE_TEXT","sortField":"description","visible":true}],"PurchasingCommissionDZK":[{"label":"","key":"isInactive","type":"ICON","format":[null,null],"fixedWidth":"30px","visible":true},{"label":"Уровень ЗК","key":"commissionLevel","type":"INLINE_TEXT","printParams":["commissionLevel"],"component":"DescriptionTableColumn","sortField":"dss_com_level","visible":true},{"label":"Организация","key":"dssOrganization","type":"INLINE_TEXT","printParams":["dssOrganization"],"component":"DescriptionTableColumn","sortField":"dsid_organization","visible":true},{"label":"Филиал","key":"dssBranch","type":"INLINE_TEXT","printParams":["dssBranch"],"component":"DescriptionTableColumn","sortField":"dsid_branch","visible":true},{"label":"Наименование","key":"dssName","type":"INLINE_TEXT","printParams":["dssName"],"component":"DescriptionTableColumn","sortField":"dss_name","visible":true}],"versionsList":[{"label":"Номер версии","key":"label","width":"120px","type":"AREA_TEXT","format":[null,null],"sortField":"label","visible":true},{"label":"Этап согласования","key":"stageInfo","width":"150px","type":"AREA_TEXT","format":[null,null],"sortField":"stageInfo","visible":true},{"label":"Итерация","key":"iteration","width":"100px","type":"AREA_TEXT","format":[null,null],"sortField":"iteration","visible":true},{"label":"Описание","key":"description","width":"150px","type":"AREA_TEXT","format":[null,null],"sortField":"description","visible":true},{"label":"Дата","key":"createDate","width":"150px","type":"AREA_TEXT","format":[null,null],"sortField":"createDate","visible":true},{"label":"Автор","key":"creator","width":"150px","type":"ORGRSTURCTURE","format":[null,null],"sortField":"creator","visible":true},{"label":"ЭП","key":"certificate","width":"150px","type":"AREA_TEXT","format":[null,null],"visible":true}],"ddt_ord_type_doc":[{"key":"DocumentType","visible":true,"index":0},{"key":"dsb_important","visible":true,"index":1},{"key":"dss_reg_number","visible":true,"index":2},{"key":"dsid_author_empl","visible":true,"index":3},{"key":"dss_signer_organization","visible":true,"index":4},{"key":"dsid_executor_empl","visible":true,"index":5},{"key":"dsid_vrio_empl","visible":true,"index":6},{"key":"dsid_document_subtype","visible":true,"index":7},{"key":"dsid_approver_empl","visible":true,"index":8},{"key":"dsid_document_kind","visible":true,"index":9},{"key":"dss_description","visible":true,"index":10},{"key":"dsid_signer_empl","visible":true,"index":11},{"key":"dsid_register_empl","visible":true,"index":12},{"key":"dss_signer_branch","visible":true,"index":13},{"key":"dss_status","visible":true,"index":14},{"key":"dss_clerksmark","visible":true,"index":15},{"key":"dsid_control_v","visible":true,"index":16},{"key":"dss_visa","visible":false,"index":17},{"key":"dsid_stamp","visible":false,"index":18}],"TemplateTable":[{"label":"Наименование","key":"dss_name","width":"300px","type":"INLINE_TEXT","sortField":"dss_name","visible":true},{"label":"Создан","key":"r_creation_date","width":"300px","type":"INLINE_TEXT","sortField":"r_creation_date","visible":true},{"label":"Примечание","key":"dss_note","width":"300px","type":"INLINE_TEXT","sortField":"dss_note","visible":true}],"CompendiumsTable":[{"label":"ФИО","key":"dssPersonFio","type":"INLINE_TEXT","sortField":"dssPersonFio","visible":true},{"label":"Должность","key":"dssPersonPosition","type":"INLINE_TEXT","sortField":"dssPersonPosition","visible":true},{"label":"Название организации","key":"dssAgentName","type":"INLINE_TEXT","format":[null,null],"sortField":"dssAgentName","visible":true},{"label":"Почтовый адрес","key":"dssAgentAddress","type":"INLINE_TEXT","sortField":"dssAgentAddress","visible":true},{"label":"Тип","key":"dsbIndividual","type":"INLINE_TEXT","sortField":"dsbIndividual","visible":true},{"label":"Тип документа корреспондента","key":"typeDocument","type":"INLINE_TEXT","sortField":"typeDocument","visible":true},{"label":"Примечание","key":"dssDescription","type":"INLINE_TEXT","sortField":"dssDescription","visible":true},{"label":"ИНН","key":"dssInn","type":"INLINE_TEXT","defaultVisible":false,"sortField":"dssInn","visible":false},{"label":"КПП","key":"dssKpp","type":"INLINE_TEXT","defaultVisible":false,"sortField":"dssKpp","visible":false}],"AssistantsAndDeputies":[{"label":"Замещающий","key":"dss_status","width":"300px","type":"ORGRSTURCTURE","format":[null,null],"sortField":"deputyFio","visible":true},{"label":"Тип замещения","key":"documentDescription","width":"300px","type":"AREA_TEXT","format":[null,null],"sortField":"deputyTypeName","visible":true},{"label":"Период замещения","key":"addresseeEmpl","width":"350px","type":"AREA_TEXT","format":[null,null],"sortField":"start","visible":true}],"LinksDialogueForm":[{"label":"Документ","key":"dss_status","type":"AREA_TEXT","format":[null,null],"visible":true},{"label":"Краткое содержание","key":"dss_description","width":"300px","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Тип связи","key":"linkTypeId","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Комментарий","key":"comment","type":"INLINE_TEXT","format":[null,null],"visible":true}],"printDocument":[{"label":"Разделы документа","key":"caption","type":"AREA_TEXT","format":[null,null],"visible":true}],"ContentList":[{"label":"Тип контента","key":"contentTypeName","width":"150px","type":"INLINE_TEXT","format":[null,null],"printParams":["contentTypeName"],"component":"DescriptionTableColumn","visible":true},{"label":"Версия","key":"currentVersionLabel","width":"50px","type":"INLINE_TEXT","format":[null,null],"printParams":["currentVersionLabel"],"component":"DescriptionTableColumn","visible":true},{"label":"Название","key":"contentName","type":"INLINE_TEXT","format":[null,null],"printParams":["contentName"],"component":"DescriptionTableColumn","visible":true},{"label":"","key":"dscReportContent","type":"ICON","format":[null,null],"fixedWidth":"30px","visible":true},{"label":"Автор","key":"dssAuthorEmpl","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["dssAuthorFio"],"component":"UserInfoColumn","visible":true},{"label":"Дата добавления","key":"creationDate","width":"200px","type":"INLINE_TEXT","format":[null,null],"printParams":["creationDate"],"component":"DescriptionTableColumn","visible":true},{"label":"Этап согласования","key":"dssStageInfo","width":"50px","type":"INLINE_TEXT","format":[null,null],"printParams":["dssStageInfo"],"component":"DescriptionTableColumn","visible":true},{"label":"Итерация","key":"dsiStageIteration","width":"50px","type":"INLINE_TEXT","format":[null,null],"printParams":["dsiStageIteration"],"component":"DescriptionTableColumn","visible":true}],"ResolutionReportFiles":[{"label":"Файл","key":"file","width":"120px","type":"AREA_TEXT","format":[null,null],"visible":true},{"label":"Дата добавления","key":"dsdtRegDate","width":"120px","type":"INLINE_TEXT","visible":true},{"label":"Название","key":"dssDescription","type":"INLINE_TEXT","visible":true},{"label":"","key":"remove","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true}],"ResolutionsListOutcome":[{"label":"Текст резолюции","key":"message","width":"250px","type":"AREA_TEXT","printParams":["message"],"component":"DescriptionTableColumn","sortField":"res_description","visible":true},{"label":"Дата выдачи","key":"creationDate","width":"120px","type":"INLINE_TEXT","format":[null,null],"printParams":["creationDate"],"component":"DescriptionTableColumn","sortField":"dsdt_creation_date","visible":true},{"label":"Контрольный срок","key":"dateRange","width":"130px","type":"INLINE_TEXT","format":[null,null],"printParams":["controlDate"],"component":"DescriptionTableColumn","sortField":"dsdt_control_date","visible":true},{"label":"Документ","key":"documentRegDate","width":"220px","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["documentTypeLabel","documentRegNumber","creationDate"],"component":"DocumentTypeTableColumn","sortField":"documentRegDate","visible":true},{"label":"Содержание документа","key":"documentDescription","width":"300px","type":"AREA_TEXT","printParams":["documentDescription"],"component":"DescriptionTableColumn","sortField":"dss_description","visible":true},{"label":"Гриф","key":"stamp","width":"50px","format":[null,null],"defaultVisible":false,"printParams":["controlDate"],"component":"DescriptionTableColumn","sortField":"stamp","visible":false},{"label":"Исполнители","key":"coPerformers","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"printParams":["coPerformers"],"component":"UserInfoColumn","visible":false},{"label":"ic_error","key":"importantDocument","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Важный документ","tooltip":"Важный документ","fixedWidth":"50px","sortField":"importantDocument","visible":false},{"label":"attention","key":"urgencyDocument","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Требует срочного рассмотрения","fixedWidth":"50px","sortField":"urgencyDocument","visible":false},{"label":"arrow","key":"documentControlType","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Контроль документа","fixedWidth":"50px","sortField":"documentControlType","visible":false},{"label":"flag","key":"resolutionOverdue","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Срок исполнения резолюций","fixedWidth":"50px","sortField":"resolution_overdue_state","visible":false},{"label":"ic_control","key":"resolutionControl","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Контроль резолюции","fixedWidth":"50px","sortField":"resolutionControl","visible":false},{"label":"Инициатор","key":"initiator","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"printParams":["initiator"],"component":"UserInfoColumn","sortField":"dss_initiator_name","visible":false},{"label":"Контролер","key":"controller","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"printParams":["fio","position"],"path":[{"attr":"fio","path":"controller.lastName"},{"attr":"position","path":"controller.position"}],"component":"UserInfoColumn","sortField":"dss_controller_name","visible":false},{"label":"Статус","key":"state","width":"120px","type":"INLINE_TEXT","defaultVisible":false,"printParams":["statusCaption"],"component":"DescriptionTableColumn","sortField":"dss_status_caption","visible":false}],"ddt_zk_agenda_type_doc":[{"key":"DocumentType","visible":true,"index":0},{"key":"dsid_zk_agenda_kind","visible":true,"index":1},{"key":"dss_reg_number","visible":true,"index":2},{"key":"dss_work_number","visible":true,"index":3},{"key":"dsid_classification","visible":true,"index":4},{"key":"dss_kind_of_meeting","visible":true,"index":5},{"key":"dsid_branch_zk","visible":true,"index":6},{"key":"dsid_author_empl","visible":true,"index":7},{"key":"dsid_level_zk","visible":true,"index":8},{"key":"dsdt_reg_date","visible":true,"index":9},{"key":"dsid_organization_zk","visible":true,"index":10},{"key":"dsdt_meeting_date","visible":true,"index":11},{"key":"dss_description","visible":true,"index":12},{"key":"dss_status","visible":true,"index":13},{"key":"dsid_dzk_chairman_empl","visible":false,"index":14},{"key":"dsid_stamp","visible":false,"index":15}],"ddt_incoming_type_doc":[{"key":"DocumentType","visible":true,"index":0},{"key":"dsid_control_v","visible":true,"index":1},{"key":"dsdt_reg_date","visible":true,"index":2},{"key":"dss_addressee_empl_organization","visible":true,"index":3},{"key":"dsid_register_empl","visible":true,"index":4},{"key":"dsb_urgency","visible":true,"index":5},{"key":"dsb_ai_verified_document","visible":true,"index":6},{"key":"dsid_delivery","visible":true,"index":7},{"key":"dsb_important","visible":true,"index":8},{"key":"dss_status","visible":true,"index":9},{"key":"dss_description","visible":true,"index":10},{"key":"dsid_author_empl","visible":true,"index":11},{"key":"dsid_classification","visible":true,"index":12},{"key":"dsid_examination_kind","visible":true,"index":13},{"key":"dsb_examination","visible":true,"index":14},{"key":"dsid_document_kind","visible":true,"index":15},{"key":"drid_addressee_empl","visible":true,"index":16},{"key":"dsdt_crsp_reg_date","visible":true,"index":17},{"key":"dss_crsp_reg_number","visible":true,"index":18},{"key":"dss_addressee_empl_branch","visible":true,"index":19},{"key":"dsid_signer_empl_outcoming","visible":true,"index":20},{"key":"drid_addressee_empl_outcoming","visible":true,"index":21},{"key":"dsdt_control_date","visible":true,"index":22},{"key":"dsid_agent_person","visible":true,"index":23},{"key":"dss_reg_number","visible":true,"index":24}],"ResolutionsListControl":[{"label":"Текст резолюции","key":"message","width":"250px","type":"AREA_TEXT","printParams":["message"],"component":"DescriptionTableColumn","sortField":"res_description","visible":true},{"label":"Дата выдачи","key":"creationDate","width":"120px","type":"INLINE_TEXT","format":[null,null],"printParams":["documentRegDate"],"component":"DescriptionTableColumn","sortField":"dsdt_creation_date","visible":true},{"label":"Контрольный срок","key":"dateRange","width":"130px","type":"INLINE_TEXT","format":[null,null],"printParams":["controlDate"],"component":"DescriptionTableColumn","sortField":"dsdt_control_date","visible":true},{"label":"Документ","key":"documentRegDate","width":"220px","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["documentTypeLabel","documentRegNumber","creationDate"],"component":"DocumentTypeTableColumn","sortField":"documentRegDate","visible":true},{"label":"Содержание документа","key":"documentDescription","width":"300px","type":"AREA_TEXT","printParams":["documentDescription"],"component":"DescriptionTableColumn","sortField":"dss_description","visible":true},{"label":"Гриф","key":"stamp","width":"50px","format":[null,null],"defaultVisible":false,"printParams":["controlDate"],"component":"DescriptionTableColumn","sortField":"stamp","visible":false},{"label":"Исполнители","key":"coPerformers","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"printParams":["coPerformers"],"component":"UserInfoColumn","visible":false},{"label":"ic_error","key":"importantDocument","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Важный документ","tooltip":"Важный документ","fixedWidth":"50px","sortField":"importantDocument","visible":false},{"label":"attention","key":"urgencyDocument","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Требует срочного рассмотрения","fixedWidth":"50px","sortField":"urgencyDocument","visible":false},{"label":"arrow","key":"documentControlType","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Контроль документа","fixedWidth":"50px","sortField":"documentControlType","visible":false},{"label":"flag","key":"resolutionOverdue","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Срок исполнения резолюций","fixedWidth":"50px","sortField":"resolution_overdue_state","visible":false},{"label":"ic_control","key":"resolutionControl","type":"ICON","format":[null,null],"defaultVisible":false,"title":"Контроль резолюции","fixedWidth":"50px","sortField":"resolutionControl","visible":false},{"label":"Автор резолюции","key":"author","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"printParams":["author"],"component":"UserInfoColumn","sortField":"dss_author_name","visible":false},{"label":"Инициатор","key":"initiator","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"printParams":["initiator"],"component":"UserInfoColumn","sortField":"dss_initiator_name","visible":false},{"label":"Статус","key":"state","width":"120px","type":"INLINE_TEXT","defaultVisible":false,"printParams":["statusCaption"],"component":"DescriptionTableColumn","sortField":"dss_status_caption","visible":false}],"CommentsList":[{"label":"","key":"blocked","type":"ICON","format":[null,null],"fixedWidth":"20px","visible":true},{"label":"Текст комментария","key":"comment","width":"400px","type":"AREA_TEXT","format":[null,null],"sortField":"body","visible":true},{"label":"Автор","key":"author","width":"140px","type":"AREA_TEXT","format":[null,null],"sortField":"author","visible":true},{"label":"Организация","key":"organization","width":"140px","type":"AREA_TEXT","format":[null,null],"sortField":"organization","visible":true},{"label":"Дата создания","key":"createdAt","width":"100px","type":"AREA_TEXT","format":[null,null],"sortField":"creationDate","visible":true},{"label":"Статус","key":"status","width":"100px","type":"AREA_TEXT","format":[null,null],"sortField":"status","visible":true},{"label":"Тип замечания","key":"docStatus","width":"160px","type":"AREA_TEXT","format":[null,null],"sortField":"docStatus","visible":true}],"ddt_contract_type_doc":[{"label":"Документ","key":"DocumentType","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["dss_reg_number","dsdt_reg_date"],"component":"DocumentTypeTableColumn","sortField":"dsdt_reg_date","visible":true}],"TaskListBoss":[{"key":"taskType","visible":true,"index":0},{"key":"documentRegDate","visible":true,"index":1},{"key":"urgentDocument","visible":true,"index":2},{"key":"documentControlType","visible":true,"index":3},{"key":"DateExecution","visible":true,"index":4},{"key":"resolutionControl","visible":true,"index":5},{"key":"dssResolutionDescription","visible":true,"index":6},{"key":"performerEmployee","visible":true,"index":7},{"key":"appointedExecutors","visible":true,"index":8},{"key":"documentDescription","visible":true,"index":9},{"key":"documentStatus","visible":true,"index":10},{"key":"authorEmplId","visible":true,"index":11},{"key":"documentTerm","visible":true,"index":12},{"key":"stamp","visible":false,"index":13},{"key":"agentOrganization","visible":false,"index":14}],"search":[{"label":"Документ","key":"documentRegDate","type":"AREA_TEXT","format":[null,null],"sortFields":[{"id":"documentRegDate","label":"Дата"},{"id":"documentRegNumber","label":"Номер"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["documentTypeLabel","documentRegNumber","creationDate"],"component":"DocumentTypeTableColumn","sortField":"documentRegDate","visible":true},{"label":"Номер вопроса","key":"questionNumber","width":"120px","type":"INLINE_TEXT","format":[null,null],"printParams":["questionNumber"],"component":"DescriptionTableColumn","sortField":"questionNumber","visible":true},{"label":"Краткое содержание","key":"docDescription","width":"300px","type":"AREA_TEXT","format":[null,null],"printParams":["docDescription"],"component":"DescriptionTableColumn","sortField":"docDescription","visible":true},{"label":"Подписано","key":"docSigner","width":"300px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["docSigner"],"component":"UserInfoColumn","sortField":"docSigner","visible":true},{"label":"Дата создания","key":"docCreationDate","width":"120px","type":"INLINE_TEXT","format":[null,null],"printParams":["docCreationDate"],"component":"DescriptionTableColumn","sortField":"docCreationDate","visible":true},{"label":"Статус вопроса","key":"questionStatus","width":"120px","type":"INLINE_TEXT","format":[null,null],"printParams":["questionStatus"],"component":"DescriptionTableColumn","sortField":"questionStatus","visible":true},{"label":"Создержание вопроса","key":"questionDescription","width":"120px","type":"INLINE_TEXT","format":[null,null],"printParams":["questionDescription"],"component":"DescriptionTableColumn","sortField":"questionDescription","visible":true}],"TemplateListTable":[{"key":"dss_name","visible":true,"index":0},{"key":"r_creation_date","visible":true,"index":1},{"key":"dss_note","visible":true,"index":2},{"key":"creatorFio","visible":true,"index":3},{"key":"opentemplate","visible":true,"index":4},{"key":"applytemplate","visible":true,"index":5},{"key":"containsDeletedUsers","visible":true,"index":6}],"PrivateDocumentsTable":[{"label":"Просмотр","key":"id","type":"ICON","format":[null,null],"fixedWidth":"70px","visible":true},{"label":"Документ","key":"dss_status","width":"300px","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["type_name","dss_reg_number","dsdt_reg_date","dsdt_creation_date"],"component":"DocumentTypeTableColumn","visible":true},{"label":"Формат","key":"extension","width":"100px","type":"AREA_TEXT","format":[null,null],"minWidth":100,"sortField":"extension","printParams":["extension"],"component":"DescriptionTableColumn","visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"300px","type":"AREA_TEXT","format":[null,null],"sortField":"dss_description","printParams":["dss_description"],"component":"DescriptionTableColumn","visible":true},{"label":"Дата добавления","key":"created","width":"150px","type":"AREA_TEXT","format":[null,null],"minWidth":150,"sortField":"created","printParams":["created"],"component":"DescriptionTableColumn","visible":true},{"label":"Автор связи","key":"author","type":"ORGRSTURCTURE","format":[null,null],"sortField":"author","printParams":["author"],"component":"UserInfoColumn","visible":true},{"label":"Размер файла","key":"size","width":"100px","type":"INLINE_TEXT","minWidth":100,"visible":true},{"label":"","key":"deleteDoc","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true}],"PrivateFolders":[{"label":"Название","key":"folderName","width":"380px","type":"AREA_TEXT","visible":true}],"ResolutionHistoryCompact":[{"label":"Наименование","key":"eventLabel","width":"150px","type":"INLINE_TEXT","sortField":"eventLabel","index":0,"visible":true},{"label":"Статус","key":"status","type":"INLINE_TEXT","sortField":"status","index":1,"visible":true},{"label":"Исполнитель","key":"performerFio","type":"INLINE_TEXT","sortField":"performerFio","index":5,"visible":true},{"label":"Дата получения","key":"taskReceiveDate","type":"INLINE_TEXT","format":[null,null],"sortField":"taskReceiveDate","index":2,"visible":true},{"label":"Дата начала работы","key":"taskReadDate","type":"INLINE_TEXT","sortField":"taskReadDate","index":3,"visible":true},{"label":"Дата окончания работы","key":"taskExecutionDate","type":"INLINE_TEXT","sortField":"taskExecutionDate","index":4,"visible":true},{"label":"Должность исполнителя","key":"performerPosition","type":"INLINE_TEXT","sortField":"performerPosition","index":6,"visible":true},{"label":"Описание","key":"description","width":"150px","type":"INLINE_TEXT","sortField":"description","index":7,"visible":true}],"ddt_project_documentation_type_doc":[{"label":"Документ","key":"DocumentType","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["dss_reg_number","dsdt_reg_date"],"component":"DocumentTypeTableColumn","sortField":"dsdt_reg_date","visible":true}],"ResolutionHistory":[{"label":"Наименование","key":"eventLabel","width":"150px","type":"INLINE_TEXT","sortField":"eventLabel","visible":true},{"label":"Статус","key":"eventStatus","type":"INLINE_TEXT","sortField":"eventStatus","visible":true},{"label":"Дата получения","key":"taskReceiveDate","type":"INLINE_TEXT","format":[null,null],"sortField":"taskReceiveDate","visible":true},{"label":"Дата начала работы","key":"taskReadDate","type":"INLINE_TEXT","sortField":"taskReadDate","visible":true},{"label":"Дата окончания работы","key":"taskExecutionDate","type":"INLINE_TEXT","sortField":"taskExecutionDate","visible":true},{"label":"Исполнитель","key":"performerFio","type":"INLINE_TEXT","sortField":"performerFio","visible":true},{"label":"Должность исполнителя","key":"performerPosition","type":"INLINE_TEXT","sortField":"performerPosition","visible":true},{"label":"Описание","key":"description","width":"150px","type":"INLINE_TEXT","sortField":"description","visible":true},{"label":"Замещаемый","key":"deputize","width":"150px","type":"INLINE_TEXT","sortField":"deputize","visible":true}],"TaskListAll-Autotest1":[{"label":"Задание","key":"taskType","width":"380px","type":"AREA_TEXT","format":[null,null],"sortFields":[{"id":"taskType","label":"Тип задания"},{"id":"dueDate","label":"Срок"},{"id":"creationDate","label":"Дата поступления"}],"sortField":"dsdt_creation_date","printParams":["taskType","creationDate"],"component":"DocumentNameTableComponent","visible":true},{"label":"Документ","key":"documentRegDate","width":"280px","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"display","label":"Тип/подтип документа"},{"id":"documentRegNumber","label":"Номер"},{"id":"documentCreationDate","label":"Дата"}],"sortField":"dsdt_creation_date","printParamsCompactRowsMode":["documentTypeName","documentRegNumber","documentCreationDate"],"printParams":["documentTypeName","documentRegNumber","documentCreationDate"],"component":"DocumentTypeTableColumn","visible":true},{"label":"attention","key":"urgentDocument","type":"ICON","format":[null,null],"title":"Важный/Срочный документ","fixedWidth":"50px","sortField":"urgentDocument","printParams":["urgentDocument"],"component":"DescriptionTableColumn","visible":true},{"label":"arrow","key":"documentControlType","type":"ICON","format":[null,null],"title":"Контроль документа","fixedWidth":"50px","sortField":"documentControlType","printParams":["documentControlType"],"component":"DescriptionTableColumn","visible":true},{"label":"flag","key":"DateExecution","type":"ICON","format":[null,null],"title":"Срок исполнения резолюций","fixedWidth":"50px","sortField":"resolution_overdue_state","printParams":["resolutionLessThan5DaysOverdue","resolutionLessThan10DaysOverdue","resolutionOverdue","resolutionNotOverdue"],"component":"DescriptionTableColumn","visible":true},{"label":"ic_control","key":"resolutionControl","type":"ICON","format":[null,null],"title":"Контроль резолюции","fixedWidth":"50px","sortField":"resolutionControl","printParams":["resolutionControl"],"component":"DescriptionTableColumn","visible":true},{"label":"Содержание резолюции","key":"dssResolutionDescription","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"resolutionDescription","printParams":["dssResolutionDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"От кого","key":"performerEmployee","type":"ORGRSTURCTURE","format":[null,null],"isCompactRowsMode":false,"sortField":"dss_from_whom_last_name&orderBy=dss_from_whom_first_name&orderBy=dss_from_whom_middle_name","printParams":["fromWhomEmployee"],"component":"UserInfoColumn","visible":true},{"label":"Назначенный исполнитель","key":"appointedExecutors","width":"300px","type":"AREA_TEXT","format":[null,null],"defaultVisible":true,"printParams":["appointedExecutors"],"component":"UserInfoColumn","visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"300px","type":"AREA_TEXT","format":[null,null],"sortField":"dss_document_description","printParams":["documentDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"Статус документа","key":"documentStatus","width":"130px","type":"AREA_TEXT","format":[null,null],"isCompactRowsMode":false,"sortField":"dss_document_status","printParams":["documentStatus"],"component":"DescriptionTableColumn","visible":true},{"label":"Автор документа","key":"authorEmplId","type":"ORGRSTURCTURE","format":[null,null],"isCompactRowsMode":false,"sortField":"dss_author_fio","printParams":["authorFio","authorPosition"],"component":"UserInfoColumn","visible":true},{"label":"Срок документа","key":"documentTerm","type":"INLINE_TEXT","format":[null,null],"sortField":"documentTerm","printParams":["documentTerm"],"component":"DescriptionTableColumn","visible":true},{"label":"Гриф","key":"stamp","width":"50px","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"sortField":"dsid_stamp","printParams":["stamp"],"component":"DescriptionTableColumn","visible":false},{"label":"Исполнитель подписания","key":"signaturePerformer","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"isCompactRowsMode":false,"sortField":"dss_from_whom_last_name&orderBy=dss_from_whom_first_name&orderBy=dss_from_whom_middle_name","printParams":["signaturePerformer"],"component":"UserInfoColumn","visible":false},{"label":"Организация корреспондента","key":"agentOrganization","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"sortField":"agentOrganization","printParams":["agentOrganization"],"component":"DescriptionTableColumn","visible":false}],"ddt_outcoming_type_docCompact":[{"key":"DocumentType","visible":true,"index":0},{"key":"dsid_document_basis","visible":true,"index":1},{"key":"dss_description","visible":true,"index":2},{"key":"dsb_procedural","visible":true,"index":3},{"key":"dsid_approver_empl","visible":true,"index":4},{"key":"dss_signer_organization","visible":true,"index":5},{"key":"dss_addressee_organization","visible":true,"index":6},{"key":"dsid_vrio_empl","visible":true,"index":7},{"key":"dsid_executor_empl","visible":true,"index":8},{"key":"dss_signer_branch","visible":true,"index":9},{"key":"dsid_signer_empl","visible":true,"index":10},{"key":"drid_addressee_empl","visible":true,"index":11},{"key":"dsid_register_empl","visible":true,"index":12},{"key":"dss_agent_index","visible":true,"index":13},{"key":"dsdt_reg_date","visible":true,"index":14},{"key":"dsb_important","visible":true,"index":15},{"key":"dsid_author_empl","visible":true,"index":16},{"key":"drid_project","visible":false,"index":17},{"key":"dsid_stamp","visible":false,"index":18}],"LinkDocument":[{"label":"Наименование","key":"name","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"name","visible":true},{"label":"Тип связи","key":"linkName","width":"200px","type":"INLINE_TEXT","format":null,"sortField":"linkName","visible":true},{"label":"Автор связи","key":"linkAuthor","type":"ORGRSTURCTURE","format":[null,null],"visible":true},{"label":"Дата связи","key":"linkCreationDate","width":"200px","type":"INLINE_TEXT","format":null,"sortField":"linkCreationDate","visible":true},{"label":"Размер файла","key":"linkCreationDate","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"linkCreationDate","visible":true},{"label":"","key":"docPreview","width":"100px","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true}],"TaskListAll-NikNik1":[{"label":"Задание","key":"taskType","width":"380px","type":"AREA_TEXT","format":[null,null],"sortFields":[{"id":"taskType","label":"Тип задания"},{"id":"dueDate","label":"Срок"},{"id":"creationDate","label":"Дата поступления"}],"sortField":"dsdt_creation_date","printParams":["taskType","creationDate"],"component":"DocumentNameTableComponent","visible":true},{"label":"Документ","key":"documentRegDate","width":"280px","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"display","label":"Тип/подтип документа"},{"id":"documentRegNumber","label":"Номер"},{"id":"documentCreationDate","label":"Дата"}],"sortField":"dsdt_creation_date","printParamsCompactRowsMode":["documentTypeName","documentRegNumber","documentCreationDate"],"printParams":["documentTypeName","documentRegNumber","documentCreationDate"],"component":"DocumentTypeTableColumn","visible":true},{"label":"attention","key":"urgentDocument","type":"ICON","format":[null,null],"title":"Важный/Срочный документ","fixedWidth":"50px","sortField":"urgentDocument","printParams":["urgentDocument"],"component":"DescriptionTableColumn","visible":true},{"label":"arrow","key":"documentControlType","type":"ICON","format":[null,null],"title":"Контроль документа","fixedWidth":"50px","sortField":"documentControlType","printParams":["documentControlType"],"component":"DescriptionTableColumn","visible":true},{"label":"flag","key":"DateExecution","type":"ICON","format":[null,null],"title":"Срок исполнения резолюций","fixedWidth":"50px","sortField":"resolution_overdue_state","printParams":["resolutionLessThan5DaysOverdue","resolutionLessThan10DaysOverdue","resolutionOverdue","resolutionNotOverdue"],"component":"DescriptionTableColumn","visible":true},{"label":"ic_control","key":"resolutionControl","type":"ICON","format":[null,null],"title":"Контроль резолюции","fixedWidth":"50px","sortField":"resolutionControl","printParams":["resolutionControl"],"component":"DescriptionTableColumn","visible":true},{"label":"Содержание резолюции","key":"dssResolutionDescription","width":"200px","type":"INLINE_TEXT","format":[null,null],"sortField":"resolutionDescription","printParams":["dssResolutionDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"От кого","key":"performerEmployee","type":"ORGRSTURCTURE","format":[null,null],"isCompactRowsMode":false,"sortField":"dss_from_whom_last_name&orderBy=dss_from_whom_first_name&orderBy=dss_from_whom_middle_name","printParams":["fromWhomEmployee"],"component":"UserInfoColumn","visible":true},{"label":"Назначенный исполнитель","key":"appointedExecutors","width":"300px","type":"AREA_TEXT","format":[null,null],"defaultVisible":true,"printParams":["appointedExecutors"],"component":"UserInfoColumn","visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"300px","type":"AREA_TEXT","format":[null,null],"sortField":"dss_document_description","printParams":["documentDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"Статус документа","key":"documentStatus","width":"130px","type":"AREA_TEXT","format":[null,null],"isCompactRowsMode":false,"sortField":"dss_document_status","printParams":["documentStatus"],"component":"DescriptionTableColumn","visible":true},{"label":"Автор документа","key":"authorEmplId","type":"ORGRSTURCTURE","format":[null,null],"isCompactRowsMode":false,"sortField":"dss_author_fio","printParams":["authorFio","authorPosition"],"component":"UserInfoColumn","visible":true},{"label":"Срок документа","key":"documentTerm","type":"INLINE_TEXT","format":[null,null],"sortField":"documentTerm","printParams":["documentTerm"],"component":"DescriptionTableColumn","visible":true},{"label":"Гриф","key":"stamp","width":"50px","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"sortField":"dsid_stamp","printParams":["stamp"],"component":"DescriptionTableColumn","visible":false},{"label":"Исполнитель подписания","key":"signaturePerformer","type":"ORGRSTURCTURE","format":[null,null],"defaultVisible":false,"isCompactRowsMode":false,"sortField":"dss_from_whom_last_name&orderBy=dss_from_whom_first_name&orderBy=dss_from_whom_middle_name","printParams":["signaturePerformer"],"component":"UserInfoColumn","visible":false},{"label":"Организация корреспондента","key":"agentOrganization","type":"INLINE_TEXT","format":[null,null],"defaultVisible":false,"sortField":"agentOrganization","printParams":["agentOrganization"],"component":"DescriptionTableColumn","visible":false}],"TaskListAll-Autotest3":[{"key":"taskType","visible":true,"index":0},{"key":"documentRegDate","visible":true,"index":1},{"key":"urgentDocument","visible":true,"index":2},{"key":"documentControlType","visible":true,"index":3},{"key":"DateExecution","visible":true,"index":4},{"key":"resolutionControl","visible":true,"index":5},{"key":"dssResolutionDescription","visible":true,"index":6},{"key":"performerEmployee","visible":true,"index":7},{"key":"appointedExecutors","visible":true,"index":8},{"key":"documentDescription","visible":true,"index":9},{"key":"documentStatus","visible":true,"index":10},{"key":"authorEmplId","visible":true,"index":11},{"key":"documentTerm","visible":true,"index":12},{"key":"stamp","visible":false,"index":13},{"key":"signaturePerformer","visible":false,"index":14},{"key":"agentOrganization","visible":false,"index":15}],"TaskListAll-A2":[{"key":"taskType","visible":true,"index":0},{"key":"documentRegDate","visible":true,"index":1},{"key":"urgentDocument","visible":true,"index":2},{"key":"documentControlType","visible":true,"index":3},{"key":"DateExecution","visible":true,"index":4},{"key":"resolutionControl","visible":true,"index":5},{"key":"dssResolutionDescription","visible":true,"index":6},{"key":"performerEmployee","visible":true,"index":7},{"key":"appointedExecutors","visible":true,"index":8},{"key":"documentDescription","visible":true,"index":9},{"key":"documentStatus","visible":true,"index":10},{"key":"authorEmplId","visible":true,"index":11},{"key":"documentTerm","visible":true,"index":12},{"key":"stamp","visible":false,"index":13},{"key":"signaturePerformer","visible":false,"index":14},{"key":"agentOrganization","visible":false,"index":15}],"ResolutionReportLinkedDocs":[{"label":"Рег. номер","key":"dssRegNumber","width":"120px","type":"AREA_TEXT","format":[null,null],"visible":true},{"label":"Рег. дата","key":"dsdtRegDate","width":"120px","type":"INLINE_TEXT","visible":true},{"label":"Краткое содержание","key":"dssDescription","type":"INLINE_TEXT","visible":true},{"label":"","key":"remove","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true}],"ddt_zk_protocol_type_doc":[{"key":"DocumentType","visible":true,"index":0},{"key":"dsid_level_zk","visible":true,"index":1},{"key":"dss_description","visible":true,"index":2},{"key":"dsid_organization_zk","visible":true,"index":3},{"key":"dsid_zk_protocol_kind","visible":true,"index":4},{"key":"dsid_author_empl","visible":true,"index":5},{"key":"dss_reg_number","visible":true,"index":6},{"key":"dss_kind_of_meeting","visible":true,"index":7},{"key":"dsid_branch_zk","visible":true,"index":8},{"key":"dsid_signer_empl","visible":true,"index":9},{"key":"dsdt_creation_date","visible":true,"index":10},{"key":"dsdt_reg_date","visible":true,"index":11},{"key":"dsdt_meeting_date","visible":true,"index":12},{"key":"dsid_stamp","visible":false,"index":13},{"key":"dsid_zk_agenda","visible":false,"index":14}],"ddt_zk_material_type_doc":[{"key":"DocumentType","visible":true,"index":0},{"key":"dsid_addressee_empl","visible":true,"index":1},{"key":"dsid_speaker_empl","visible":true,"index":2},{"key":"dsid_executor_empl","visible":true,"index":3},{"key":"dsdt_creation_date","visible":true,"index":4},{"key":"dsid_organization_zk","visible":true,"index":5},{"key":"dsid_branch_zk","visible":true,"index":6},{"key":"dsid_type_material","visible":true,"index":7},{"key":"dsid_level_zk","visible":true,"index":8},{"key":"dsid_signer_empl","visible":true,"index":9},{"key":"dsid_author_empl","visible":true,"index":10},{"key":"dss_reg_number","visible":true,"index":11},{"key":"dss_description","visible":true,"index":12},{"key":"dsdt_reg_date","visible":true,"index":13},{"key":"dss_work_number","visible":true,"index":14},{"key":"dss_status","visible":true,"index":15},{"key":"dsid_stamp","visible":false,"index":16}],"ExaminationList":[{"label":"Документ","key":"document","type":"AREA_TEXT","format":[null,null],"sortFields":[{"id":"creationDate","label":"Дата"},{"id":"regNumber","label":"Номер"}],"sortField":"document","visible":true},{"label":"Вид проверки","key":"checkKindId","width":"200px","type":"INLINE_TEXT","format":[null,null],"printParams":["checkKindId"],"component":"DescriptionTableColumn","sortField":"checkKindId","visible":true},{"label":"Дата начала","key":"startDate","type":"INLINE_TEXT","format":[null,null],"printParams":["startDate"],"component":"DescriptionTableColumn","sortField":"startDate","visible":true},{"label":"Дата окончания ","key":"endDate","type":"INLINE_TEXT","format":[null,null],"printParams":["endDate"],"component":"DescriptionTableColumn","sortField":"endDate","visible":true},{"label":"Куратор","key":"curatorId","width":"200px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["curatorId"],"component":"UserInfoColumn","sortField":"curator","visible":true},{"label":"Наименование проверки","key":"checkForm","width":"200px","type":"INLINE_TEXT","format":[null,null],"printParams":["checkForm"],"component":"DescriptionTableColumn","sortField":"checkForm","visible":true},{"label":"Надзорный орган","key":"supervisoryAuthorityId","width":"200px","type":"INLINE_TEXT","format":[null,null],"printParams":["supervisoryAuthorityId"],"component":"DescriptionTableColumn","sortField":"supervisoryAuthorityId","visible":true},{"label":"Направление проверки","key":"checkLineId","width":"200px","type":"INLINE_TEXT","format":[null,null],"printParams":["checkLineId"],"component":"DescriptionTableColumn","sortField":"checkLineId","visible":true},{"label":"Статус","key":"status","width":"200px","type":"INLINE_TEXT","format":[null,null],"printParams":["status"],"component":"DescriptionTableColumn","sortField":"status","visible":true}],"Projects":[{"label":"Титул УПСД","key":"title","type":"INLINE_TEXT","sortField":"title","visible":true},{"label":"Код титула","key":"titleCode","type":"INLINE_TEXT","sortField":"titleCode","visible":true},{"label":"Заказчик","key":"customer","type":"INLINE_TEXT","sortField":"customer","visible":true},{"label":"Генеральный проектировщик","key":"generalDesigner","type":"INLINE_TEXT","sortField":"generalDesigner","visible":true}],"select-questions":[{"label":"Исполнитель","key":"executor","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"sortField":"executor","visible":true},{"label":"Вопрос","key":"orderNumber","width":"100px","type":"INLINE_TEXT","sortField":"orderNumber","visible":true},{"label":"Статус вопроса","key":"statusName","width":"150px","type":"INLINE_TEXT","sortField":"statusName","visible":true},{"label":"Содержание","key":"subject","type":"INLINE_TEXT","sortField":"subject","visible":true}],"searchResolution":[{"label":"Документ","key":"documentRegDate","type":"AREA_TEXT","format":[null,null],"sortFields":[{"id":"documentRegDate","label":"Дата"},{"id":"documentRegNumber","label":"Номер"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["documentTypeLabel","documentRegNumber","documentRegDate"],"component":"DocumentTypeTableColumn","sortField":"documentRegDate","visible":true},{"label":"ic_error","key":"importantDocument","type":"ICON","format":[null,null],"title":"Важный документ","fixedWidth":"50px","printParams":["importantDocument"],"path":"importantDocument","component":"DescriptionTableColumn","sortField":"importantDocument","visible":true},{"label":"arrow","key":"documentControlType","type":"ICON","format":[null,null],"title":"Контроль документа","fixedWidth":"50px","printParams":["dss_name"],"path":"documentControlType","component":"DescriptionTableColumn","visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"300px","type":"AREA_TEXT","printParams":["documentDescription"],"component":"DescriptionTableColumn","sortField":"documentDescription","visible":true},{"label":"Комментарий контролера","key":"controllerComment","width":"300px","type":"AREA_TEXT","printParams":["controllerComment"],"component":"DescriptionTableColumn","sortField":"controllerComment","visible":true},{"label":"Подписант","key":"signers","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["signers"],"component":"UserInfoColumn","sortField":"signers","visible":true},{"label":"Адресат","key":"addressees","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["addressees"],"component":"UserInfoColumn","sortField":"addressees","visible":true},{"label":"ФИО Корреспондента","key":"correspondent","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["correspondent"],"component":"ContractorTableColumn","sortField":"correspondent","visible":true},{"label":"Инициатор","key":"initiator","type":"ORGRSTURCTURE","format":[null,null],"printParams":["initiator"],"component":"UserInfoColumn","sortField":"initiator","visible":true},{"label":"ic_control","key":"resolutionControl","type":"ICON","format":[null,null],"title":"Контроль резолюции","fixedWidth":"50px","printParams":["resolutionControl"],"component":"DescriptionTableColumn","sortField":"resolutionControl","visible":true},{"label":"Текст резолюции","key":"message","width":"380px","type":"AREA_TEXT","format":[null,null],"printParams":["message"],"component":"DescriptionTableColumn","sortField":"message","visible":true},{"label":"Исполнитель","key":"coPerformers","type":"ORGRSTURCTURE","format":[null,null],"printParams":["coPerformers"],"component":"UserInfoColumn","sortField":"coPerformers","visible":true},{"label":"Ответственный исполнитель","key":"mainPerformer","type":"INLINE_TEXT","printParams":["mainPerformer"],"component":"DescriptionTableColumn","sortField":"mainPerformer","visible":true},{"label":"Автор","key":"author","type":"ORGRSTURCTURE","format":[null,null],"printParams":["author"],"component":"UserInfoColumn","sortField":"author","visible":true},{"label":"Срок","key":"controlDate","type":"INLINE_TEXT","format":[null,null],"printParams":["controlDate"],"component":"DescriptionTableColumn","sortField":"controlDate","visible":true},{"label":"flag","key":"urgentDocument","type":"ICON","format":[null,null],"title":"Срок исполнения резолюций","fixedWidth":"50px","sortField":"overdue_state","visible":true},{"label":"Статус","key":"statusCaption","type":"INLINE_TEXT","format":[null,null],"printParams":["statusCaption"],"component":"DescriptionTableColumn","sortField":"statusCaption","visible":true},{"label":"Дата выдачи","key":"resolutionIssueDate","type":"INLINE_TEXT","format":[null,null],"printParams":["resolutionIssueDate"],"component":"DescriptionTableColumn","sortField":"resolutionIssueDate","visible":true},{"label":"Дата исполнения","key":"resolutionExecutionDate","type":"INLINE_TEXT","format":[null,null],"printParams":["resolutionExecutionDate"],"component":"DescriptionTableColumn","sortField":"resolutionExecutionDate","visible":true},{"label":"Контролер","key":"controller","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["controller"],"component":"UserInfoColumn","sortField":"controller","visible":true},{"label":"Требуется отчет","key":"reportRequired","type":"INLINE_TEXT","printParams":["reportRequired"],"component":"DescriptionTableColumn","sortField":"reportRequired","visible":true},{"label":"Организация исполнителя","key":"dss_performer_organization","type":"INLINE_TEXT","printParams":["dss_performer_organization"],"component":"DescriptionTableColumn","sortField":"dss_performer_organization","visible":true},{"label":"Организация инициатора","key":"dss_initiator_organization","type":"INLINE_TEXT","printParams":["dss_initiator_organization"],"component":"DescriptionTableColumn","sortField":"dss_initiator_organization","visible":true},{"label":"Организация автора резолюции","key":"dss_author_organization","type":"INLINE_TEXT","printParams":["dss_author_organization"],"component":"DescriptionTableColumn","sortField":"dss_author_organization","visible":true},{"label":"Организация контролера резолюции","key":"dss_controller_organization","type":"INLINE_TEXT","printParams":["dss_controller_organization"],"component":"DescriptionTableColumn","sortField":"dss_controller_organization","visible":true},{"label":"Филиал контролера резолюции","key":"dss_controller_branch","type":"INLINE_TEXT","printParams":["dss_controller_branch"],"component":"DescriptionTableColumn","sortField":"dss_controller_branch","visible":true}],"ImportantDocuments":[{"label":"Документ","key":"documentId","type":"INLINE_TEXT","format":[null,null],"component":"DocumentTypeTableColumn","visible":true},{"label":"Краткое содержание","key":"documentDescription","width":"250px","type":"INLINE_TEXT","format":[null,null],"printParams":["documentDescription"],"component":"DescriptionTableColumn","visible":true},{"label":"Подписант","key":"signerId","width":"200px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["signerId"],"component":"UserInfoColumn","visible":true},{"label":"Адресат/Корреспондент","key":"addressees","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["addressees"],"component":"UserInfoColumn","visible":true},{"label":"Дата начала","key":"dateBegin","type":"INLINE_TEXT","format":[null,null],"printParams":["dateBegin"],"component":"DescriptionTableColumn","visible":true},{"label":"Дата плановая","key":"datePlan","type":"INLINE_TEXT","format":[null,null],"printParams":["datePlan"],"component":"DescriptionTableColumn","visible":true},{"label":"Дата ожидаемая","key":"dateExpected","type":"INLINE_TEXT","format":[null,null],"printParams":["dateExpected"],"component":"DescriptionTableColumn","visible":true},{"label":"Отклонение","key":"deviation","type":"INLINE_TEXT","format":[null,null],"printParams":["deviation"],"component":"DescriptionTableColumn","visible":true},{"label":"У кого","key":"whoHasAgreement","width":"250px","type":"ORGRSTURCTURE","format":[null,null],"printParams":["whoHasAgreement"],"component":"UserInfoColumn","visible":true}],"limitTable":[{"label":"Позиция","key":"position","type":"INLINE_TEXT","sortField":"position","visible":true},{"label":"Общая сумма","key":"ammount","type":"INLINE_TEXT","sortField":"ammount","visible":true},{"label":"Текст","key":"description","type":"INLINE_TEXT","sortField":"description","visible":true},{"label":"Финансовая позиция (Статья)","key":"finPositionCode","type":"INLINE_TEXT","sortField":"finPositionCode","visible":true},{"label":"ПФМ (ЦФО)","key":"pfmCode","type":"INLINE_TEXT","sortField":"pfmCode","visible":true},{"label":"Фонд (Проект АПСБ)","key":"fundCode","type":"INLINE_TEXT","sortField":"fundCode","visible":true},{"label":"ФункцСфера (Вид деятельности)","key":"funcSphereCode","type":"INLINE_TEXT","sortField":"funcSphereCode","visible":true},{"label":"Контрагент","key":"creditorCode","type":"INLINE_TEXT","sortField":"creditorCode","visible":true},{"label":"Авансовый платеж","key":"prepayment","type":"INLINE_TEXT","format":[null,null],"sortField":"prepayment","visible":true},{"label":"Срок исполнения","key":"executionDate","type":"INLINE_TEXT","sortField":"executionDate","visible":true},{"label":"№ фин.средств в SAP","key":"sapMoneyCode","type":"INLINE_TEXT","sortField":"sapMoneyCode","visible":true},{"label":"Поз. РС","key":"currentAccountPosition","type":"INLINE_TEXT","sortField":"currentAccountPosition","visible":true},{"label":"Статус","key":"status","type":"INLINE_TEXT","format":[null,null],"sortField":"status","visible":true},{"label":"Информация","key":"info","type":"INLINE_TEXT","format":[null,null],"sortField":"info","visible":true}],"incoming-traffic":[{"label":"Событие","key":"eventDisplayName","type":"INLINE_TEXT","visible":true},{"label":"Отправлено","key":"sentDateTime","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true},{"label":"Начало обработки","key":"startDateTime","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true},{"label":"Обработано","key":"finishDateTime","type":"ICON","format":[null,null],"fixedWidth":"1px","visible":true}],"Monitoring":[{"label":"Автор подписки на мониторинг","key":"authorMonitoring","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Период","key":"periodName","width":"100px","type":"INLINE_TEXT","visible":true},{"label":"Список получателей рассылки печатной карточки","key":"recipientsMonitoring","type":"INLINE_TEXT","format":[null,null],"visible":true},{"label":"Дата старта рассылки","key":"dispatchDate","width":"150px","type":"INLINE_TEXT","visible":true},{"label":"Дата создания подписки","key":"creationDate","width":"150px","type":"INLINE_TEXT","visible":true},{"label":"Статус подписки","key":"inactive","width":"150px","type":"INLINE_TEXT","visible":true}],"paymentTable":[{"label":"Позиция","key":"position","type":"INLINE_TEXT","sortField":"position","visible":true},{"label":"Общая сумма","key":"ammount","type":"INLINE_TEXT","sortField":"ammount","visible":true},{"label":"Текст","key":"description","type":"INLINE_TEXT","sortField":"description","visible":true},{"label":"Финансовая позиция (Статья)","key":"finPositionCode","type":"INLINE_TEXT","sortField":"finPositionCode","visible":true},{"label":"ПФМ (ЦФО)","key":"pfmCode","type":"INLINE_TEXT","sortField":"pfmCode","visible":true},{"label":"Фонд (Проект АПСБ)","key":"fundCode","type":"INLINE_TEXT","sortField":"fundCode","visible":true},{"label":"ФункцСфера (Вид деятельности)","key":"funcSphereCode","type":"INLINE_TEXT","sortField":"funcSphereCode","visible":true},{"label":"Контрагент","key":"creditorCode","type":"INLINE_TEXT","sortField":"creditorCode","visible":true},{"label":"Авансовый платеж","key":"prepayment","type":"INLINE_TEXT","format":[null,null],"sortField":"prepayment","visible":true},{"label":"Срок исполнения","key":"executionDate","type":"INLINE_TEXT","sortField":"executionDate","visible":true},{"label":"№ фин.средств в SAP","key":"sapMoneyCode","type":"INLINE_TEXT","sortField":"sapMoneyCode","visible":true},{"label":"Поз. РС","key":"currentAccountPosition","type":"INLINE_TEXT","sortField":"currentAccountPosition","visible":true},{"label":"Статус","key":"status","type":"INLINE_TEXT","format":[null,null],"sortField":"status","visible":true},{"label":"Информация","key":"info","type":"INLINE_TEXT","format":[null,null],"sortField":"info","visible":true}],"ddt_outcoming_claim_contract_type_doc":[{"label":"Документ","key":"DocumentType","type":"INLINE_TEXT","format":[null,null],"sortFields":[{"id":"dsdt_document_reg_date","label":"Дата документа"},{"id":"dss_reg_number","label":"Номер документа"},{"id":"display","label":"Тип/Подтип документа"}],"printParams":["dss_reg_number","dsdt_reg_date"],"component":"DocumentTypeTableColumn","sortField":"dsdt_reg_date","visible":true}]}",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_pref_create_or_update_response, 'Успешный запрос').toBeOK();
  const _sedo_employee_query_response = await request.post('/sedo/employee/query', {
    data: {
      filter: {
      organizationId: "00xxxxxx0000121g",,
      branchId: "000000020002owef",,
      filterIds: [
    ],,
      docId: "00000002001e4ax0",,
      restrictDocumentParticipants: false,,
      notFederated: false,,
      stamp: "00xxxxxx000003rm",,
      source: "addressees.selectedUsers",,
      isCombobox: false
    },,
      sort: null,,
      limit: 10,,
      offset: 0,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_employee_query_response, 'Успешный запрос').toBeOK();
  const _sedo_employee_query_responseJson = await _sedo_employee_query_response.json();
  const _sedo_addressee_00000002001e4ax0_create_response = await request.post('/sedo/addressee/00000002001e4ax0/create', {
    data: {
      employeeIds: [
      "000000020019d0hk"
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_addressee_00000002001e4ax0_create_response, 'Успешный запрос').toBeOK();
  const _sedo_addressee_00000002001e4ax0_create_responseJson = await _sedo_addressee_00000002001e4ax0_create_response.json();
  const _sedo_addressee_list_response = await request.post('/sedo/addressee/list', {
    data: {
      documentId: "00000002001e4ax0",,
      documentType: "ddt_outcoming_type_doc",,
      agentsSort: {
    },,
      internalSort: {
    },,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_addressee_list_response, 'Успешный запрос').toBeOK();
  const _sedo_addressee_list_responseJson = await _sedo_addressee_list_response.json();
  const _sedo_document_get_response = await request.post('/sedo/document/get', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      stamp: "00xxxxxx000003rm",,
      useForScanning: false,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_get_response, 'Успешный запрос').toBeOK();
  const _sedo_document_get_responseJson = await _sedo_document_get_response.json();
  const _sedo_document_get_audit_response = await request.post('/sedo/document/get/audit', {
    data: {
      id: "00000002001e4ax0",,
      type: "ddt_outcoming_type_doc",,
      classificationId: "00xxxxxx000006iq",,
      stamp: "00xxxxxx000003rm",,
      useForScanning: false,,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_document_get_audit_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_response = await request.post('/sedo/doc_settings/get', {
    data: {
      dsidDocument: "00000002001e4ax0",,
      documentType: "ddt_outcoming_type_doc",,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_doc_settings_get_response, 'Успешный запрос').toBeOK();
  const _sedo_doc_settings_get_responseJson = await _sedo_doc_settings_get_response.json();
  const _sedo_addressee_00000002001e4ax0_send_addressee_response = await request.post('/sedo/addressee/00000002001e4ax0/send_addressee', {
    data: {
      ids: [
      "00000002001e4bgg"
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_addressee_00000002001e4ax0_send_addressee_response, 'Успешный запрос').toBeOK();
  const _sedo_addressee_list_response = await request.post('/sedo/addressee/list', {
    data: {
      documentId: "00000002001e4ax0",,
      documentType: "ddt_outcoming_type_doc",,
      agentsSort: {
    },,
      internalSort: {
    },,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_addressee_list_response, 'Успешный запрос').toBeOK();
  const _sedo_addressee_list_responseJson = await _sedo_addressee_list_response.json();
  const _sedo_content_edit_list_response = await request.post('/sedo/content/edit/list', {
    data: {
      ids: [
      null
    ],,
      token: "6d1c5348-379e-413b-8380-a52cd05d88b4"
    }  });
  await expect(_sedo_content_edit_list_response, 'Успешный запрос').toBeOK();
  const _sedo_content_edit_list_responseJson = await _sedo_content_edit_list_response.json();
});
