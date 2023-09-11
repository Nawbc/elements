export const fileDemo = {
  openapi: '3.0.0',
  paths: {
    '/v1/user/list': {
      get: {
        operationId: 'UserController_getUserList',
        summary: '',
        description: 'Require:user_list:read',
        parameters: [
          {
            name: 'pageIndex',
            required: true,
            in: 'query',
            schema: {
              default: 1,
              type: 'number',
            },
          },
          {
            name: 'pageSize',
            required: true,
            in: 'query',
            schema: {
              default: 20,
              type: 'number',
            },
          },
          {
            name: 'username',
            required: false,
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'email',
            required: false,
            in: 'query',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/list/{username}': {
      get: {
        operationId: 'UserController_getProfile',
        summary: 'Get a user profile',
        parameters: [
          {
            name: 'username',
            required: true,
            in: 'path',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/profile': {
      get: {
        operationId: 'UserController_getMyProfile',
        summary: 'Get my profile',
        parameters: [],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
      put: {
        operationId: 'UserController_updateUserProfile',
        summary: 'Update my profile',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateUserProfileDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/orgs': {
      get: {
        operationId: 'UserController_queryOwnOrgs',
        summary: 'Gets the owned organization',
        parameters: [],
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/OwnOrgsResDto',
                },
              },
            },
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/profile/sync': {
      post: {
        operationId: 'UserController_syncProfile',
        summary: 'Sync profile with platform. e.g. Github',
        parameters: [],
        responses: {
          '201': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/possession': {
      get: {
        operationId: 'UserController_getMyPossession',
        summary: 'Getting user owns resources',
        parameters: [
          {
            name: 'Domain',
            in: 'header',
            description: 'The product package name, same as domain',
            schema: {
              default: 'com.deskbtm.indiebase',
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/test': {
      get: {
        operationId: 'UserController_test',
        summary: 'Test',
        parameters: [
          {
            name: 'Domain',
            in: 'header',
            description: 'The product package name, same as domain',
            schema: {
              default: 'com.deskbtm.indiebase',
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/User'],
        security: [
          {
            'paseto-token': [],
          },
          {
            oauth2: ['pets:write'],
          },
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/role': {
      post: {
        operationId: 'RoleController_create',
        summary: 'Create a new role',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateRoleDto',
              },
            },
          },
        },
        responses: {
          '201': {
            description: '',
          },
        },
        tags: ['v1/Role'],
        security: [
          {
            SID: [],
          },
        ],
      },
      patch: {
        operationId: 'RoleController_update',
        summary: 'Update a role',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateRoleDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Role'],
      },
      delete: {
        operationId: 'RoleController_delete',
        summary: 'Delete a role',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DeleteRoleDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Role'],
      },
    },
    '/v1/user/role/list': {
      get: {
        operationId: 'RoleController_getList',
        summary: 'Get role list',
        parameters: [
          {
            name: 'pageIndex',
            required: true,
            in: 'query',
            schema: {
              default: 1,
              type: 'number',
            },
          },
          {
            name: 'pageSize',
            required: true,
            in: 'query',
            schema: {
              default: 20,
              type: 'number',
            },
          },
          {
            name: 'name',
            required: false,
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            required: false,
            in: 'query',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'domain',
            required: true,
            in: 'query',
            description: "The same as project's packageName",
            schema: {
              default: 'com.deskbtm.indiebase',
              type: 'string',
            },
          },
          {
            name: 'createStartAt',
            required: false,
            in: 'query',
            description: 'Role create start at',
            schema: {
              format: 'date-time',
              type: 'string',
            },
          },
          {
            name: 'createEndAt',
            required: false,
            in: 'query',
            description: 'Role create end at',
            schema: {
              format: 'date-time',
              type: 'string',
            },
          },
        ],
        responses: {
          '201': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/QueryRolesResDto',
                },
              },
            },
          },
        },
        tags: ['v1/Role'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/role/attach': {
      post: {
        operationId: 'RoleController_attachRole2User',
        summary: 'Attach a role to user',
        parameters: [
          {
            name: 'Domain',
            in: 'header',
            description: 'The product package name, same as domain',
            schema: {
              default: 'com.deskbtm.indiebase',
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AttachRole2UserDto',
              },
            },
          },
        },
        responses: {
          '201': {
            description: '',
          },
        },
        tags: ['v1/Role'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/user/res': {
      get: {
        operationId: 'ResourceController_getResources',
        summary: 'Get resource list',
        parameters: [
          {
            name: 'Domain',
            in: 'header',
            description: 'The product package name, same as domain',
            schema: {
              default: 'com.deskbtm.indiebase',
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Resource'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/storage/{bucket}/upload/file': {
      put: {
        operationId: 'StorageController_uploadFile',
        summary: 'Upload single file',
        description: 'Receives a file and an associated bucket for uploading the file into the specified bucket.',
        parameters: [
          {
            name: 'bucket',
            required: true,
            in: 'path',
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/FileUploadDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Storage'],
      },
    },
    '/v1/storage/{bucket}/upload/files': {
      put: {
        operationId: 'StorageController_uploadFiles',
        summary: 'Upload multiple files',
        description:
          'Receives multiple files and an associated bucket for uploading the files into the specified bucket.',
        parameters: [
          {
            name: 'bucket',
            required: true,
            in: 'path',
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/FilesUploadDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Storage'],
      },
    },
    '/v1/storage/bucket': {
      post: {
        operationId: 'StorageController_createBucket',
        summary: 'Create a bucket',
        description: 'Receives a bucket name and creates the bucket.',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateBucketDto',
              },
            },
          },
        },
        responses: {
          '201': {
            description: '',
          },
        },
        tags: ['v1/Storage'],
      },
    },
    '/v1/storage/buckets': {
      get: {
        operationId: 'StorageController_getBuckets',
        summary: 'Get buckets list',
        parameters: [],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Storage'],
      },
    },
    '/v1/storage/buckets/files/{id}': {
      get: {
        operationId: 'StorageController_getFile',
        summary: '',
        parameters: [],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Storage'],
      },
    },
    '/v1/storage/buckets/{bucket}': {
      delete: {
        operationId: 'StorageController_deleteBucket',
        summary: 'Delete a bucket',
        description: 'Receives a bucket name and deletes the bucket.',
        parameters: [
          {
            name: 'bucket',
            required: true,
            in: 'path',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Storage'],
      },
    },
    '/v1/project/list': {
      get: {
        operationId: 'ProjectController_getProjects',
        summary: 'Get project list',
        parameters: [
          {
            name: 'pageIndex',
            required: true,
            in: 'query',
            schema: {
              default: 1,
              type: 'number',
            },
          },
          {
            name: 'pageSize',
            required: true,
            in: 'query',
            schema: {
              default: 20,
              type: 'number',
            },
          },
          {
            name: 'id',
            required: false,
            in: 'query',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'name',
            required: false,
            in: 'query',
            description: 'Project name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'orgName',
            required: false,
            in: 'query',
            description: 'Organization name',
            schema: {
              default: 'deskbtm',
              type: 'string',
            },
          },
          {
            name: 'sort',
            required: false,
            in: 'query',
            schema: {
              enum: ['createTime', 'updateTime', 'name'],
              type: 'string',
            },
          },
          {
            name: 'direction',
            required: false,
            in: 'query',
            schema: {
              enum: ['createTime', 'updateTime', 'name'],
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Project'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/project': {
      post: {
        operationId: 'ProjectController_createProject',
        summary: 'Create a project',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateProjectDto',
              },
            },
          },
        },
        responses: {
          '201': {
            description: '',
          },
        },
        tags: ['v1/Project'],
        security: [
          {
            SID: [],
          },
        ],
      },
      put: {
        operationId: 'ProjectController_updateProject',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateProjectDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Project'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/project/github/search': {
      get: {
        operationId: 'ProjectController_searchGithubRepo',
        summary: 'Fetch github projects from specified organization',
        parameters: [
          {
            name: 'q',
            required: false,
            in: 'query',
            description:
              'Details: https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Project'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/project/{name}': {
      delete: {
        operationId: 'ProjectController_deleteProject',
        summary: 'Delete project',
        parameters: [
          {
            name: 'name',
            required: true,
            in: 'path',
            schema: {
              default: 'deskbtm',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Project'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/list': {
      get: {
        operationId: 'OrgController_queryOrgs',
        parameters: [
          {
            name: 'pageIndex',
            required: true,
            in: 'query',
            schema: {
              default: 1,
              type: 'number',
            },
          },
          {
            name: 'pageSize',
            required: true,
            in: 'query',
            schema: {
              default: 20,
              type: 'number',
            },
          },
          {
            name: 'name',
            required: false,
            in: 'query',
            schema: {
              nullable: true,
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/github': {
      get: {
        operationId: 'OrgController_githubOrgs',
        summary: 'Fetch github organizations',
        parameters: [],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/github/{name}': {
      get: {
        operationId: 'OrgController_githubOrg',
        summary: 'Fetch a github organization',
        parameters: [
          {
            name: 'name',
            required: true,
            in: 'path',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/github/{name}/repos': {
      get: {
        operationId: 'OrgController_githubOrgProjects',
        summary: 'Fetch github organization repositories',
        parameters: [
          {
            name: 'name',
            required: true,
            in: 'path',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/{name}': {
      get: {
        operationId: 'OrgController_getOrg',
        summary: 'Get an organization',
        parameters: [
          {
            name: 'name',
            required: true,
            in: 'path',
            schema: {
              default: 'deskbtm',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
      delete: {
        operationId: 'OrgController_deleteOrg',
        summary: 'Delete an owned organization',
        description: 'Require:org_list:deleteOwn',
        parameters: [
          {
            name: 'name',
            required: true,
            in: 'path',
            schema: {
              default: 'deskbtm',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org': {
      post: {
        operationId: 'OrgController_createOrg',
        summary: 'Create an organization',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateOrgDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BaseResSchemaDto',
                },
              },
            },
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
      put: {
        operationId: 'OrgController_updateOrg',
        summary: 'Update an owned organization',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateOrgDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/{org}/pinned_projects': {
      get: {
        operationId: 'OrgController_getPinnedProjects',
        summary: 'Get pinned organizations',
        parameters: [],
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BaseResSchemaDto',
                },
              },
            },
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/org/{org}/projects': {
      get: {
        operationId: 'OrgController_getProjects',
        summary: 'Get organization projects',
        parameters: [
          {
            name: 'pageIndex',
            required: true,
            in: 'query',
            schema: {
              default: 1,
              type: 'number',
            },
          },
          {
            name: 'pageSize',
            required: true,
            in: 'query',
            schema: {
              default: 20,
              type: 'number',
            },
          },
          {
            name: 'id',
            required: false,
            in: 'query',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'name',
            required: false,
            in: 'query',
            description: 'Project name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'orgName',
            required: false,
            in: 'query',
            description: 'Organization name',
            schema: {
              default: 'deskbtm',
              type: 'string',
            },
          },
          {
            name: 'sort',
            required: false,
            in: 'query',
            schema: {
              enum: ['createTime', 'updateTime', 'name'],
              type: 'string',
            },
          },
          {
            name: 'direction',
            required: false,
            in: 'query',
            schema: {
              enum: ['createTime', 'updateTime', 'name'],
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BaseResSchemaDto',
                },
              },
            },
          },
        },
        tags: ['v1/Organization'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/invitation/org/{name}': {
      get: {
        operationId: 'InvitationController_getInvitation',
        summary: 'Get invitations',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateOrgDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BaseResSchemaDto',
                },
              },
            },
          },
        },
        tags: ['v1/Invitation'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/invitation/confirm': {
      get: {
        operationId: 'InvitationController_confirmInviteMember',
        parameters: [],
        responses: {
          '200': {
            description: '',
          },
        },
        tags: ['v1/Invitation'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/invitation': {
      post: {
        operationId: 'InvitationController_inviteMember',
        summary: 'Create invitations.',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InviteMembersDto',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BaseResSchemaDto',
                },
              },
            },
          },
        },
        tags: ['v1/Invitation'],
        security: [
          {
            SID: [],
          },
        ],
      },
    },
    '/v1/mail/send-captcha': {
      post: {
        operationId: 'MailController_sendCaptcha',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/GetCaptchaDto',
              },
            },
          },
        },
        responses: {
          '201': {
            description: '',
          },
        },
        tags: ['v1/Mail'],
      },
    },
  },
  info: {
    title: 'Indiebase API',
    description: 'Indiebase lets-community REST API ',
    version: '1.0.0',
    contact: {
      name: 'deskbtm/indiebase',
      url: 'https://indiebase.deskbtm.com/contact',
      email: 'deskbtm@outlook.com',
    },
  },
  tags: [],
  servers: [],
  components: {
    securitySchemes: {
      'paseto-token': {
        scheme: 'bearer',
        bearerFormat: 'paseto',
        type: 'http',
        description: 'Enter paseto token',
        in: 'header',
      },
    },
    schemas: {
      OrgEntity: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          githubOrgName: {
            type: 'string',
          },
          githubOrgUrl: {
            type: 'string',
          },
          domain: {
            type: 'string',
          },
          contactEmail: {
            type: 'string',
          },
          avatarUrl: {
            type: 'string',
            description: 'Organization avatar image url',
          },
          status: {
            type: 'string',
            enum: ['active', 'inactive'],
            description: 'Organization status',
          },
          description: {
            type: 'string',
          },
          homepage: {
            type: 'string',
          },
          createTime: {
            format: 'date-time',
            type: 'string',
          },
          updateTime: {
            format: 'date-time',
            type: 'string',
          },
          creatorId: {
            type: 'number',
            description: 'Creator id',
          },
          ownerId: {
            type: 'number',
            description: 'Organization owner id, the same as creator id at first time.',
          },
          projects: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [
          'id',
          'name',
          'githubOrgName',
          'githubOrgUrl',
          'domain',
          'contactEmail',
          'avatarUrl',
          'status',
          'description',
          'homepage',
          'createTime',
          'updateTime',
          'creatorId',
          'ownerId',
          'projects',
        ],
      },
      OwnOrgsResDto: {
        type: 'object',
        properties: {
          code: {
            type: 'number',
            description: 'Response logical code',
            default: 1,
          },
          message: {
            type: 'object',
            description: 'Response message',
          },
          d: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrgEntity',
            },
          },
        },
        required: ['code', 'd'],
      },
      UpdateUserProfileDto: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            default: 'deskbtm@outlook.com',
          },
          password: {
            type: 'string',
            default: 'indiebase',
          },
        },
        required: ['email', 'password'],
      },
      CreateRoleDto: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            default: 'owner',
          },
          description: {
            type: 'string',
            description: 'Role description',
            default: 'owner',
          },
          domain: {
            type: 'string',
            description: "The same as project's packageName",
            default: 'indiebase.indiebase.deskbtm.com',
          },
          possession: {
            description: 'Possession',
            default: [
              {
                resource: 'user_list',
                action: ['create', 'read', 'update', 'delete'],
              },
              {
                resource: 'role_list',
                action: ['create'],
              },
            ],
            type: 'array',
            items: {
              type: 'object',
            },
          },
        },
        required: ['name', 'domain'],
      },
      RoleDto: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            default: 1,
          },
          name: {
            type: 'string',
            default: 'owner',
          },
          description: {
            type: 'string',
            default: 'owner',
          },
          status: {
            type: 'string',
            description: 'Role status',
            enum: ['inactive', 'active'],
            default: 'active',
          },
        },
        required: ['id'],
      },
      QueryRolesResDto: {
        type: 'object',
        properties: {
          code: {
            type: 'number',
            description: 'Response logical code',
            default: 1,
          },
          message: {
            type: 'object',
            description: 'Response message',
          },
          total: {
            type: 'number',
            description: 'Total items',
          },
          current: {
            type: 'number',
            description: 'Current page',
          },
          pageSize: {
            type: 'number',
            description: 'Page size',
          },
          d: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/RoleDto',
            },
          },
        },
        required: ['code', 'total', 'current', 'pageSize', 'd'],
      },
      UpdateRoleDto: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            default: 1,
          },
          name: {
            type: 'string',
            default: 'owner',
          },
          description: {
            type: 'string',
            default: 'owner',
          },
          status: {
            type: 'string',
            description: 'Role status',
            enum: ['inactive', 'active'],
            default: 'active',
          },
        },
        required: ['id'],
      },
      DeleteRoleDto: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            default: 1,
          },
        },
        required: ['id'],
      },
      AttachRole2UserDto: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            default: 'Nawbc',
          },
          roleName: {
            type: 'string',
            default: 'owner',
          },
          domain: {
            type: 'string',
            default: 'indiebase.indiebase.deskbtm.com',
          },
        },
        required: ['username', 'roleName', 'domain'],
      },
      FileUploadDto: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
          temp: {
            type: 'boolean',
            description: 'Save to the /tmp/ directory, object will delete automatically when expire.',
          },
        },
        required: ['file'],
      },
      FilesUploadDto: {
        type: 'object',
        properties: {
          files: {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary',
            },
          },
          temp: {
            type: 'boolean',
            description: 'Save to the /tmp/ directory, object will delete automatically when expire.',
          },
        },
        required: ['files'],
      },
      CreateBucketDto: {
        type: 'object',
        properties: {
          bucket: {
            type: 'string',
            default: 'indiebase-dev',
          },
          description: {
            type: 'string',
            default: 'indiebase dev bucket',
          },
        },
        required: ['bucket'],
      },
      CreateProjectDto: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Project name',
            default: 'indiebase',
          },
          githubRepoName: {
            type: 'string',
            description: 'Github repository name',
            default: 'indiebase',
          },
          orgName: {
            type: 'string',
          },
          contactEmail: {
            type: 'string',
            description: 'Public email',
            default: 'deskbtm@outlook.com',
          },
          packageName: {
            type: 'string',
            description: 'Project domain equals project name + organization domain',
            default: 'indiebase.indiebase.deskbtm.com',
          },
          description: {
            type: 'string',
            default: 'xxxxxx',
          },
          pinned: {
            type: 'boolean',
            default: false,
          },
        },
        required: ['name', 'githubRepoName', 'orgName', 'contactEmail', 'packageName'],
      },
      UpdateProjectDto: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
            description: 'Project name',
            default: 'indiebase',
          },
          contactEmail: {
            type: 'string',
            description: 'public email',
            default: 'deskbtm@outlook.com',
          },
          description: {
            type: 'string',
            default: 'xxxxxx',
          },
        },
        required: ['id', 'name', 'contactEmail', 'description'],
      },
      CreateOrgDto: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Org name',
            default: 'deskbtm-indiebase',
          },
          githubOrgName: {
            type: 'string',
            description: 'Github organization name',
            default: 'deskbtm-indiebase',
          },
          domain: {
            type: 'string',
            description:
              'Organization domain is the unique id for indiebase. if the package name is not specific, the project will use reverse words that project name + organization domain as package name. e.g com.deskbtm.indiebase.xxxx.',
            default: 'indiebase.deskbtm.com',
          },
          contactEmail: {
            type: 'string',
            default: 'deskbtm@outlook.com',
          },
          description: {
            type: 'string',
            default: 'xxxxxx',
          },
          avatarUrl: {
            type: 'string',
            description: 'Organization icon url',
          },
        },
        required: ['name', 'githubOrgName', 'domain'],
      },
      BaseResSchemaDto: {
        type: 'object',
        properties: {
          code: {
            type: 'number',
            description: 'Response logical code',
            default: 1,
          },
          message: {
            type: 'object',
            description: 'Response message',
          },
        },
        required: ['code'],
      },
      UpdateOrgDto: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          contactEmail: {
            type: 'string',
            description: 'Public email',
            default: 'deskbtm@outlook.com',
          },
          description: {
            type: 'string',
            default: 'xxxxxx',
          },
          avatarUrl: {
            type: 'string',
            default: 'xxxxxx',
          },
          domain: {
            type: 'string',
            description: 'Organization domain',
            default: 'indiebase.deskbtm.com',
          },
          homepage: {
            type: 'string',
            description: 'Organization homepage',
            default: 'https://indiebase.deskbtm.com',
          },
        },
        required: ['id', 'contactEmail'],
      },
      InviteMembersDto: {
        type: 'object',
        properties: {
          inviteesEmails: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          org: {
            type: 'string',
            description: 'Organization name',
          },
        },
        required: ['inviteesEmails', 'org'],
      },
      GetCaptchaDto: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            default: 'deskbtm@outlook.com',
          },
        },
        required: ['username'],
      },
    },
  },
};
